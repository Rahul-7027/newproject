# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🧱 Form Template Builder

A visual form template builder built with **React** and **Material UI** that lets users create customizable form templates. These templates can be used to generate data collection forms with support for various input types, validation, and real-time preview.

---

## 🚀 Features

### ✅ **Builder Functionality**
- Create up to **5 templates**, each with multiple **sections**
- Each section can contain multiple **custom fields**
- Field types supported:
  - **Label** (H1, H2, H3)
  - **Text**
  - **Number**
  - **Boolean** (Checkbox / Toggle)
  - **Enum** (Dropdown)
- **Drag-and-drop** field arrangement **within sections**
- Real-time **preview**
- **Validation** based on field types
- Save & retrieve templates via **localStorage**
- Delete fields or entire templates

### ✅ **Form Renderer**
- Dynamically render a form based on selected template
- Real-time field validation
- Save form submissions to **localStorage**

---

## 📦 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend Framework | [React](https://reactjs.org/) |
| UI Library         | [Material UI](https://mui.com/) |
| State Management   | Local state via React hooks |
| Persistence        | Browser's `localStorage` API |
| Styling            | Material UI components |
| Drag & Drop        | Native HTML5 Drag Events (no external library) |

> ❌ TypeScript is **not used** in this project.  
> ✅ Material UI is used for all UI components and styling.

---

## 🧩 Data Format

### 🔧 Template Schema Example

