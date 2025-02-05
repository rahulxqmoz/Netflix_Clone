# Netflix Clone

This is a feature-rich Netflix clone built with React, providing an immersive UI and seamless content browsing experience. It integrates the TMDB API to fetch and display trending movies, genres, and includes a search functionality.

## Features

- **Dynamic UI**: Built using React with HTML and CSS, closely mimicking Netflix’s interface.
- **TMDB API Integration**: Fetch and display trending movies, genres, and implement search functionality.
- **Responsive Design**: Optimized for different screen sizes.

---

## Tech Stack

- **Frontend:** React, HTML, CSS
- **API Integration:** TMDB API
- **State Management:** React Hooks

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (Download from [Node.js official website](https://nodejs.org/en/))
- **npm** (comes with Node.js) or **Yarn** (optional) ([Download Yarn](https://yarnpkg.com/))

---

## Installation

### 1. Clone the Repository

```bash
git clone [https://github.com/yourusername/netflix-clone.git](https://github.com/rahulxqmoz/Netflix_Clone)
cd netflix-clone
```

### 2. Install Dependencies

```bash
npm install  # or yarn install
```

### 3. Create a .env File

Create a `.env` file in the root directory and add the following environment variable:

```plaintext
REACT_APP_TMDB_API_KEY=<your_tmdb_api_key>
```

Replace `<your_tmdb_api_key>` with your actual TMDB API key.

### 4. Start the Development Server

```bash
npm start  # or yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Notes

- Ensure you have a valid TMDB API key to fetch movie data.
- Keep your `.env` file private and never push it to a public repository.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

