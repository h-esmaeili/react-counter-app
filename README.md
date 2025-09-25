# React Counter App

A beautiful and modern React counter application with increment, decrement, and reset functionality.

## Features

- ✨ Modern, responsive UI design
- 🔢 Counter with increment/decrement buttons
- 🔄 Reset functionality
- 📱 Mobile-friendly design
- 🎨 Beautiful gradient styling
- ⚡ Fast and lightweight

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-counter-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3001`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run dev` - Runs the app in development mode and opens in browser

## Technologies Used

- React 18
- Webpack 5
- Babel
- dotenv for environment variables
- CSS3 with modern features
- HTML5

## Environment Variables

The app uses environment variables for configuration. 

1. Copy the example file:
```bash
cp .env.example .env
```

2. Modify the values in `.env` as needed:
```env
PORT=3001
NODE_ENV=development
```

You can also use the `start:env` script to explicitly load environment variables:

```bash
npm run start:env
```

## Project Structure

```
react-counter-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── webpack.config.js
├── .babelrc
├── .env.example
└── README.md
```

## License

MIT