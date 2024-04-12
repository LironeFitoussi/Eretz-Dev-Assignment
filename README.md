#Eretz Dev Assignment#
Welcome to the Eretz Dev Assignment repository! This project is designed as a front-end React checkout page and a Node.js backend server for an e-commerce website. The goal of this assignment is to evaluate your skills in React development, state management, API integration, testing, and front-end design.

Introduction
In this project, you'll be tasked with building a responsive checkout page for an e-commerce website using React. The checkout page should allow users to view a list of selected items, see the total price, and proceed with the checkout process by clicking a "Checkout" button. Upon clicking the "Checkout" button, the front end will send a POST request to the backend server with specific data including the selected items, customer information, and payment details.

Technical Requirements
Use React for the front-end development.
Implement state management for handling user input and application state.
Integrate with a Node.js backend server using API requests.
Utilize the Tailwind CSS framework for styling.
Write the application in TypeScript for improved type safety and code maintainability.
## Client

The client folder contains the front-end React application.

### Folder Structure

```
📦 Client
├─ .eslintrc.cjs         # Configuration file for ESLint, a tool for identifying and reporting on patterns found in JavaScript code.
├─ .gitignore            # Specifies intentionally untracked files to ignore.
├─ README.md             # Readme file containing project documentation.
├─ index.html            # HTML template file for the React application.
├─ package-lock.json     # Auto-generated file used for npm dependency resolution.
├─ package.json          # Configuration file for Node.js dependencies and scripts.
├─ postcss.config.js     # Configuration file for PostCSS, a tool for transforming CSS.
├─ public                # Folder containing static assets like images or SVGs.
│  └─ vite.svg           # Example SVG file.
├─ src                   # Source code directory.
│  ├─ App.css            # CSS file for the main App component.
│  ├─ App.tsx            # Entry point for the React application.
│  ├─ assets             # Folder for storing static assets like images.
│  │  └─ react.svg       # Example SVG file.
│  ├─ components         # Folder containing React components.
│  │  ├─ CheckoutForm.module.css  # CSS module for the CheckoutForm component.
│  │  ├─ CheckoutForm.tsx         # React component for the checkout form.
│  │  └─ CreditCard.tsx           # React component for credit card input.
│  ├─ index.css          # Global CSS file.
│  ├─ main.tsx           # Main TypeScript file for the React application.
│  ├─ pages              # Folder containing React components for different pages.
│  │  ├─ CheckoutPage.module.css  # CSS module for the CheckoutPage component.
│  │  └─ CheckoutPage.tsx         # React component for the checkout page.
│  ├─ types.ts           # TypeScript type definitions.
│  └─ vite-env.d.ts      # TypeScript declaration file for Vite.js.
├─ tailwind.config.js    # Configuration file for Tailwind CSS, a utility-first CSS framework.
├─ tsconfig.json         # TypeScript configuration file.
├─ tsconfig.node.json    # TypeScript configuration file specifically for Node.js.
└─ vite.config.ts        # Configuration file for Vite.js, a front-end build tool.
```

In the client folder:

- **.eslintrc.cjs**: This file configures ESLint, a tool for identifying and reporting on patterns found in JavaScript code. It defines rules for code linting.
- **.gitignore**: Specifies intentionally untracked files to ignore in Git version control.
- **README.md**: Contains project documentation.
- **index.html**: HTML template file for the React application.
- **package-lock.json**: Auto-generated file used for npm dependency resolution.
- **package.json**: Configuration file for Node.js dependencies and scripts.
- **postcss.config.js**: Configuration file for PostCSS, a tool for transforming CSS.
- **public**: Folder containing static assets like images or SVGs.
- **src**: Source code directory.
- **tailwind.config.js**: Configuration file for Tailwind CSS, a utility-first CSS framework.
- **tsconfig.json**: TypeScript configuration file.
- **tsconfig.node.json**: TypeScript configuration file specifically for Node.js.
- **vite.config.ts**: Configuration file for Vite.js, a front-end build tool.

### Dependencies

- React: A JavaScript library for building user interfaces.
- React Credit Cards: A React component for credit card form.
- React DOM: Entry point for React applications to interact with the DOM.
- React Modal: Accessible modal dialog component for React.

## Server

The server folder contains the Node.js backend application.

### Folder Structure

```
📦 Server
├─ index.ts              # Entry point for the Node.js server.
├─ package-lock.json     # Auto-generated file used for npm dependency resolution.
├─ package.json          # Configuration file for Node.js dependencies and scripts.
├─ server.ts             # Main TypeScript file for the Node.js server.
└─ tsconfig.json         # TypeScript configuration file.
```

In the server folder:

- **index.ts**: Entry point for the Node.js server.
- **package-lock.json**: Auto-generated file used for npm dependency resolution.
- **package.json**: Configuration file for Node.js dependencies and scripts.
- **server.ts**: Main TypeScript file for the Node.js server.
- **tsconfig.json**: TypeScript configuration file.

### Dependencies

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Body Parser: Node.js body parsing middleware.
- Cors: Middleware for enabling CORS with various options.
- TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.

### Development Dependencies

- @types/express: TypeScript definitions for Express.
- @types/node: TypeScript definitions for Node.js.
- @types/cors: TypeScript definitions for Cors.

## Scripts

- `setup`: Installs dependencies for both client and server applications.
- `server`: Starts the Node.js server.
- `client`: Starts the React development server.
- `test`: Placeholder script for running tests.

## License

This project is licensed under the ISC License.
