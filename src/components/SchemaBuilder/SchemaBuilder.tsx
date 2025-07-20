import React from 'react';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import { FieldRenderer } from '../FieldRenderer/FieldRenderer';
import { JSONPreview } from '../JSONPreview/JSONPreview';
import { generateSchema } from '../../utils/schemaGenerator';
import { v4 as uuidv4 } from 'uuid';
import type { SchemaField } from '../../types/schema';

interface FormValues {
  fields: SchemaField[];
}

export const SchemaBuilder: React.FC = () => {
  const methods = useForm<FormValues>({
    defaultValues: { fields: [] },
  });

  const { control, watch } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields',
  });

  const jsonOutput = generateSchema(watch('fields'));

  const handleAddField = () => {
    append({
      id: uuidv4(),
      name: '',
      type: 'Select',
      Select: null, // Provide a default value as per your SchemaField definition
      bool: false, // Provide a default value as per your SchemaField definition
    });
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-row gap-10 min-w-screen justify-center min-h-screen p-8">
        {/* Left Section */}
        <div className="flex-[2]">
          <div className="flex flex-col min-h-screen">
            <div className="mt-4 space-y-4">
              {fields.length > 0 ? (
                fields.map((field, i) => (
                  <FieldRenderer
                    key={field.id}
                    name={`fields[${i}]`}
                    allowDelete={fields.length > 0}
                    onDelete={() => remove(i)}
                  />
                ))
              ) : (
                <div className="text-gray-500 italic">Click "Add field" to start!</div>
              )}

              <button
                onClick={handleAddField}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-100"
              >
                Add field
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: JSON Preview */}
        <div className="flex-1 border border-gray-200 rounded-lg p-4 bg-gray-50">
          <JSONPreview json={jsonOutput} />
        </div>
      </div>
    </FormProvider>
  );
};

