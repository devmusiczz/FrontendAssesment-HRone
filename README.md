# 🧩 JSON Schema Builder — HROne Frontend Intern Task

A dynamic, recursive JSON Schema Builder built with **ReactJS**, **React Hook Form**, and **ShadCN/Ant Design** (UI optional). This project was created as part of the **HROne Frontend Intern Hiring Task**.

## 🎯 Features

- ✅ Add/Edit/Delete fields dynamically
- 🔁 Support for **nested fields** (recursive schema)
- 🎛 Field types: `String`, `Number`, `Boolean` and `Nested`
- 🧠 Real-time **JSON preview** of the generated schema
- ⚙ Built using **React Hook Form** for optimal form state management

## 📸 Demo

https://frontend-assesment-h-rone.vercel.app/

---

## 🏗 Tech Stack

- ⚛ **ReactJS**
- 🧰 **React Hook Form**
- 💅 **ShadCN**
- 🔤 TypeScript
- 🆔 UUID for unique field IDs

---

## 📁 Folder Structure

```bash
src/
│
├── components/
│   ├── SchemaBuilder.tsx      # Main component that ties everything
│   ├── FieldRenderer.tsx      # Renders individual fields with nested support
│   ├── FieldSelect.tsx        # Dropdown to choose field type
│   └── JSONPreview.tsx        # Live JSON output display
│
├── hooks/
│   ├── useFieldArray.ts       # Hook wrapper around RHF useFieldArray
│   └── useSchemaBuilder.ts    # Optional logic helper for schema manipulation
│
├── utils/
│   └── schemaGenerator.ts     # Converts form data into final JSON schema
│
└── types/
    └── schema.ts              # Type definitions for schema fields
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/json-schema-builder.git
cd json-schema-builder
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Your app will be running at [http://localhost:3000](http://localhost:3000)

---

## 🧪 How It Works

1. Click "Add Field" to create a new field.
2. Select its type (`String`, `Number`, `Boolean`, or `Nested`).
3. If `Nested`, you can add child fields recursively.
4. The right panel shows live JSON output generated from your form data.

---

## 📦 Build

```bash
npm run build
```

---

## 👨‍💻 Author

**Dev Rathore**  
GitHub: [@devrathore](https://github.com/devrathore)  
Email: devr69080@gmail.com

---
