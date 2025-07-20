import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import type { SchemaField, FieldType } from '../../types/schema';
import { FieldTypeSelect } from '../common/FieldTypeSelect';

interface Props {
  name: string; // dot-path like "fields[0]" or "fields[0].children[1]"
  allowDelete: boolean;
  onDelete: () => void;
}

export const FieldRenderer: React.FC<Props> = ({ name, allowDelete, onDelete }) => {
  const { register, control, setValue, watch } = useFormContext();
  const field = watch(name) as SchemaField;

  const { fields: childFields, append, remove } = useFieldArray({
    control,
    name: `${name}.children` as const,
  });

  const handleTypeChange = (type: FieldType) => {
    setValue(`${name}.type`, type);
    if (type === 'nested') {
      setValue(`${name}.children`, field.children || []);
    } else {
      setValue(`${name}.children`, undefined);
    }
  };

  const handleAddNested = () => {
    append({
      id: Date.now().toString(),
      name: '',
      type: 'string',
    });
  };

  return (
    <div className="border-l-2 border-gray-300 ml-4 pl-4 mt-2">
      <input
        {...register(`${name}.name`, { required: 'Field name is required' })}
        placeholder="Field name"
        className="border px-2 py-1 mr-2 rounded"
      />

      <FieldTypeSelect
        value={field.type}
        onChange={handleTypeChange}
      />

      {allowDelete && (
        <button onClick={onDelete} className="ml-2 text-red-500">Delete</button>
      )}

      {field.type === 'nested' && (
        <div className="mt-2">
          {childFields.map((child, idx) => (
            <FieldRenderer
              key={child.id}
              name={`${name}.children[${idx}]`}
              allowDelete={true}
              onDelete={() => remove(idx)}
            />
          ))}

          <button
            type="button"
            onClick={handleAddNested}
            className="bg-gray-100 border px-2 py-1 mt-2 rounded"
          >
            Add nested field
          </button>
        </div>
      )}
    </div>
  );
};
