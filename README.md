# Space Corporate App 🛸 A Hope AI Example Project s

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Welcome to **Space app**! This is a fully functional example application generated using [**Hope AI**](https://bit.cloud) and refined by humans. It demonstrates how to compose a modern web application from independent, reusable components. The app itself is a fun corporate application of an organization aiming to colonize mars.

This project serves as a practical guide to showcase AI-driven development, modular architecture, and rapid delivery with Hope AI.

Browse the components on the [Bit Cloud example organization](https://bit.cloud/infinity) for browsing live preview and of the application components.

---

## ✨ Features

* **[Design system](https://bit.cloud/corporate/design):** Browse the [application design system components](https://bit.cloud/corporate/design/~components). Each as standalone reusable package.
* **[Space corporate application](https://bit.cloud/corporate/corporate-website):** A space tech company website with pages and sections. Includes responsive design.

---

## 🛠️ Tech Stack

This project is built with a modern, component-oriented technology stack:

* **Monorepo:** [Bit](https://bit.dev) - For creating, versioning, and composing the platform packages.
* **Frontend:** [React](https://reactjs.org/) - For building interactive and reusable UI components.
* **Application:** [Vite](https://vite.dev) - For performant app development.
* **Styling:** CSS Modules - For locally scoped and conflict-free component styles.
* **Code standards:** Unit tests powered by [Vitest](https://vitest.dev). Code consistency and quality enforced by [ESLint](https://eslint.org).

---

## 🚀 Getting Started

Follow these steps to get the Space corporate app running on your local machine.

### Prerequisites

Make sure you have [Bit](https://bit.dev/docs/getting-started/installing-bit/installing-bit) and [MongoDB](https://www.mongodb.com/docs/manual/installation/) installed globally on your system.

### Installation & Setup

1.  **Clone the repository** (or get the source code).
2.  **Navigate into the project directory:**
    ```bash
    cd path/to/corporate-website
    ```
3.  **Install dependencies** for all components in the workspace:
    ```bash
    bit install
    ```

## Running the App

You can run the full application or view individual components in the Bit workspace.
This command builds and runs the main `corporate-website` application, showing you the final, composed product:

```bash
bit run corporate-website
```
Now, open your browser to the specified local port to see the app live!

### Start the Workspace Preview

This command launches the Bit development server, where you can see, test, and interact with each component in isolation. It's great for development and debugging.

```bash
bit start
```

## 📂 Project Structure

The directory structure is organized by components. This makes the codebase more modular, scalable, and easier to maintain. Enable, add or disable application features in the [application shell](https://github.com/ranm8/space-app/tree/main/corporate-website/corporate-website).
