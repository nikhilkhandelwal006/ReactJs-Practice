
---

# ReactJs Practice - Events and Event Handling (Branch: react-4)

This branch focuses on practicing **React.js Events**, **Event Handlers**, and **Event Bubbling** concepts, using **React Vite** as the development environment for a fast and optimized development workflow.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast, modern development tool for React apps, known for its rapid start and hot module replacement.

## Concepts Covered

### 1. React Events
This branch covers various types of events in React such as:
- **Click Events**
- **Form Events (input, change, submit)**
- **Keyboard Events**
- **Mouse Events**

### 2. Event Handlers
In this branch, you will find examples of how to use event handlers in React, including:
- Inline event handlers.
- External event handler functions.
- Passing arguments to event handlers.

### 3. Event Bubbling 
This branch also includes practice around:
- **Event Bubbling**: Understanding how events propagate through the DOM tree and how to handle it using `stopPropagation()` and `preventDefault()`.

## Project Setup

This project is bootstrapped using **Vite**. Follow the instructions below to get the project up and running.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nikhilkhandelwal006/ReactJs-practice.git
    ```

2. Navigate to the project directory:
    ```bash
    cd ReactJs-practice
    ```

3. Checkout the `react-4` branch:
    ```bash
    git checkout react-4
    ```

4. Install dependencies:
    ```bash
    npm install
    ```

### Running the Project

Start the development server using Vite:
```bash
npm run dev
```

You should now be able to see the project running on `localhost:3000` or another port specified by Vite.

### Building the Project
To build the project for production:
```bash
npm run build
```

## Folder Structure

```bash
├── src
│   ├── components
│   │   ├── EventExample.js   # Examples of event handling
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point for React Vite
│   └── index.css             # Global styles
├── public
│   ├── index.html            # Main HTML template
└── package.json              # Project dependencies
```

## Key Learnings

- Handling different types of events in React.
- Preventing and stopping event propagation with event handlers.
- Understanding how event delegation optimizes performance in React apps.

## Feedback and Contributions

Feel free to explore, fork, and contribute to this project. Any feedback or suggestions to improve the practice examples are welcome.

---
