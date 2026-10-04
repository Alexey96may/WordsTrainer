# GreekTrainer

A highly optimized, modern application for learning and memorizing Greek languages (with advanced support for Greek grammar, phonetics, and dynamic exercise building). Available as a **Progressive Web App (PWA)** and a native **Android APK** powered by Capacitor.

-   🔗 **Live Web App (PWA):** [alexey96may.github.io/WordsTrainer/](https://alexey96may.github.io/WordsTrainer/)
-   🔗 **Download Android APK:** [github.com/Alexey96may/WordsTrainer/releases](https://github.com/Alexey96may/WordsTrainer/releases)

---

## Key Highlights & Features

-   **Multi-Language Support (i18n):** Fully localized interface and learning materials supporting **Russian**, **English**, **Spanish**, and **French**.
-   **Cross-Platform Availability:** Works seamlessly as a web PWA and compiles into a native **Android APK** via **Capacitor**.
-   **Offline-First & Local Storage:**
    -   Web version: Powered by **IndexedDB** for reliable browser-based data persistence.
    -   Mobile APK version: Utilizes lightweight local device storage via Capacitor for offline progress tracking.
-   **Smooth Navigation:** Seamless Single-Page Application routing managed by **Vue Router**.

---

## Tech Stack & Architecture

This project is built using professional-grade, modern front-end tooling optimized for scale, performance, and cross-platform distribution:

-   **Core:** Vue 3 (Composition API, `<script setup>`)
-   **Routing:** **Vue Router**
-   **Mobile & Native:** **Capacitor** (Android deployment, native device integrations)
-   **Storage:** **IndexedDB** (Web PWA) / Local device storage (Android APK)
-   **Language:** TypeScript (Strict Mode, Zero `any` policy)
-   **State & Logic:** Custom Modular Composables (Domain-Driven design)
-   **Styling:** Tailwind CSS / Scoped CSS for precise layouts
-   **Testing Suite:** Vitest + `jsdom` for automated unit testing
-   **Build Tool & Optimization:** Vite + Terser + Rollup Code Splitting + Gzip Pre-compression

---

## Architectural Highlights & Clean Code

The main production component was heavily refactored from a monolithic file into isolated, focused modules using **Vue Composables**. This guarantees a high level of code reusability and testability.

### Core Modules Split:

1. **`useTrainerCore`**: Manages the core game loops, user answer validation engine, dynamically renders reactive HTML for question states, and handles resetting/refreshing training queues.
2. **`useTrainerCategories`**: Encapsulates data filtration layers, multi-category selection mechanics, and calculates remaining pool capacities.
3. **`useTrainerSound`**: Safely manages browser hardware audio APIs, volumes, and sound states using encapsulated reactive node clones (bypassing global memory leaks).

---

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

4. **Build and sync with Android:**
    ```bash
    npm run build:capacitor
    ```
