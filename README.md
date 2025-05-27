# Vite.js Bootstrap Project

A modern web application bootstrap project built with:

- [Vite.js](https://vitejs.dev/) - Fast development environment and build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Zustand](https://github.com/pmndrs/zustand) - Lightweight state management

## Features

- Fast development with Vite.js hot module replacement
- 3D graphics capabilities with React Three Fiber
- Modern styling with Tailwind CSS
- Simple and powerful state management with Zustand
- TypeScript support

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to the project directory
cd bootstrap-vite

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

### Building for Production

```bash
# Build the project
npm run build
# or
yarn build
```

## Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── assets/        # Project assets
│   ├── lib/           # Utility functions
│   ├── store/         # Zustand state management
│   ├── styles/        # CSS and Tailwind styles
│   ├── webgl/         # React Three Fiber components
│   │   └── components/# 3D components
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
└── ...config files    # Various configuration files
```

## License

[MIT](LICENSE) (or specify your preferred license)
