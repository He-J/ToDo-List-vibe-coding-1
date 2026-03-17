# 📝 ToDo List App

A minimal, fast, and modular ToDo List web application built with React and Vite.

---

## 🚀 Overview

This project is a lightweight task management application designed for simplicity and speed. It allows users to efficiently manage daily tasks without requiring accounts, servers, or external services.

All data is stored locally in the browser, ensuring privacy and instant performance.

---

## ✨ Features

* Add new tasks
* Edit existing tasks
* Mark tasks as completed
* Delete tasks
* Filter tasks (All / Active / Completed)
* Persistent storage using LocalStorage

---

## 🏗️ Tech Stack

* **Frontend:** React (Hooks)
* **Build Tool:** Vite
* **Language:** JavaScript (ES6+)
* **Storage:** Browser LocalStorage
* **Architecture:** Modular component-based design

---

## 📁 Project Structure

```
todo-app/
│
├── docs/                  # PRD and design documents
│
├── src/
│   ├── components/        # UI components
│   ├── hooks/             # Custom hooks (state management)
│   ├── services/          # Storage logic
│   ├── utils/             # Helper functions
│   ├── styles/            # Global styles
│   │
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
│
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-url>
cd todo-app
```

### 2. Install dependencies

```
npm install
```

### 3. Start development server

```
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🧠 Architecture Highlights

This project follows key software engineering principles:

* **Separation of Concerns**

  * UI, state logic, and storage are decoupled

* **Custom Hooks**

  * `useTasks` manages all task-related state and logic

* **Service Layer**

  * LocalStorage interactions are isolated in `storageService.js`

* **Reusable Components**

  * UI is split into small, focused components

---

## 💾 Data Persistence

Tasks are stored in the browser using LocalStorage.

* No backend required
* Data persists across sessions
* Fully client-side application

---

## 🎯 Design Philosophy

* Minimalist UI
* Fast interactions
* No unnecessary dependencies
* Focus on usability and clarity

---

## 📦 Build for Production

To create a production build:

```
npm run build
```

To preview the production build:

```
npm run preview
```

---

## 🚀 Deployment

You can deploy this app easily using:

* Vercel
* Netlify
* GitHub Pages

### Example (Vercel):

1. Push code to GitHub
2. Import project into Vercel
3. Deploy with default settings

---

## 🔮 Future Improvements

* Drag-and-drop task reordering
* Dark mode
* Cloud sync (Firebase / Supabase)
* User authentication
* Mobile optimization enhancements

---

## Others
### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

#### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

#### Expanding the ESLint configuration

If you are developing a production application, I recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## 🤝 Acknowledgment

This project was developed using an AI-assisted workflow (vibe coding), combining structured product requirements with modular engineering practices.

---

## 📄 License

MIT License

