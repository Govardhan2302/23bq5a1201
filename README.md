# URL Shortener

This is a React-based web application designed to shorten URLs for evaluation purposes. The app allows users to input a long URL, generate a shortened version, and access the original URL via the shortened link within a 30-minute validity period.

## Features
- Shortens any valid URL into a mock shortened format (e.g., `http://short.me/abcde`).
- Redirects to the original URL when the shortened link is clicked (valid for 30 minutes).
- Utilizes Material-UI for a modern, responsive user interface.
- Implements React Router for navigation and logging middleware for tracking events.
- Persists shortened URLs using localStorage for session continuity.

## Technologies Used
- **Frontend**: React, Material-UI, React Router DOM
- **Other**: LocalStorage for state persistence, Fetch API for logging

## Usage
1. Clone or download the repository.
2. Navigate to the project folder and run `npm install` to install dependencies.
3. Start the application with `npm start` to launch it at `http://localhost:3000`.
4. Enter a URL (e.g., `https://www.udemy.com/course/example`) in the input field.
5. Click "Shorten URL" to generate a shortened link.
6. Click the shortened link to redirect to the original URL (valid for 30 minutes).

## Screenshots
Below are screenshots of the application in action:

- **Home Page (Input and Shorten)**  
  <img width="1846" height="806" alt="image" src="https://github.com/user-attachments/assets/becf662e-fdff-47aa-a9f9-e8306f37904f" />



- **Redirect Page (Successful Redirect)**  
  <img width="1892" height="654" alt="image" src="https://github.com/user-attachments/assets/710d4552-6c62-43d3-a895-b3b8a1bc6716" />



## Notes
- The shortened URLs are mock (e.g., `http://short.me/`) and work locally for demonstration.
- Logging to the evaluation service may show errors due to CORS or authentication issues with the test server.
- Ensure the `access-token` in `logging.js` is replaced with a valid token from the evaluation service.

## Setup Instructions
1. Ensure Node.js is installed.
2. Run `npm install` and `npm start` in the project directory.
3. Update the `access-token` in `src/frontend/logging.js` with your evaluation token.
