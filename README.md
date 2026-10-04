# WordsTrainer 🧠 🚀

A highly optimized, modern single-page application (SPA) for learning and memorizing foreign languages (with advanced support for Greek grammar, phonetics, and dynamic exercise building). Built completely with a **zero-any TypeScript** configuration, modular architecture, and fully covered by unit tests.

🔗 **Live Demo:** [aleksey-technician.github.io/WordsTrainer/](https://alexey96may.github.io/WordsTrainer/)

---

## 🛠️ Tech Stack & Architecture

This project is built using professional-grade, modern front-end tooling optimized for scale, performance, and developer experience:

-   **Core:** Vue 3 (Composition API, `<script setup>`)
-   **Language:** TypeScript (Strict Mode, Zero `any` policy)
-   **State & Logic:** Custom Modular Composables (Domain-Driven design)
-   **Styling:** Tailwind CSS / Scoped CSS for precise layouts
-   **Testing Suite:** Vitest + `jsdom` for automated unit testing
-   **Build Tool & Optimization:** Vite + Terser + Rollup Code Splitting + Gzip Pre-compression

---

## 🏗️ Architectural Highlights & Clean Code

The main production component was heavily refactored from a monolithic file into isolated, focused modules using **Vue Composables**. This guarantees a high level of code reusability and testability.

### 🧩 Core Modules Split:

1.  **`useTrainerCore`**: Manages the core game loops, user answer validation engine, dynamically renders reactive HTML for question states, and handles resetting/refreshing training queues.
2.  **`useTrainerCategories`**: Encapsulates data filtration layers, multi-category selection mechanics, and calculates remaining pool capacities.
3.  **`useTrainerSound`**: Safely manages browser hardware audio APIs, volumes, and sound states using encapsulated reactive node clones (bypassing global memory leaks).

## Getting Started

Make sure you have Node.js installed on your machine.

1. **Clone the repository:**
    ```bash
    git clone [https://github.com/Alexey96may/WordsTrainer.git](https://github.com/Alexey96may/WordsTrainer.git)
    cd WordsTrainer
    ```
2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```
