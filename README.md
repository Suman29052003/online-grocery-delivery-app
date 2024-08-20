# Grocery Delivery Web Application

This project is a comprehensive full-stack web application developed for online grocery delivery services. It allows users to browse products, add items to their cart, and place orders while integrating key features such as user authentication and profile management.

## Features
- User Registration & Authentication
- User Profile Management
- Browse and Add Products to Cart
- Address and Order Management
- Order Placement with Real-time Validation
- Responsive UI with optimized components

## Technologies Used
- **Frontend:**
  - React
  - Vite
  - Material-UI
  - React Router
  - React-Use-Cart
  - Axios

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
  - JWT Authentication

- **Other Tools:**
  - Git & GitHub for version control
  - Postman for API testing

## Project Structure
- `client/` - Frontend code (React components)
- `server/` - Backend code (Express routes, Mongoose models)
- `public/` - Static files and images
- `README.md` - Project overview and instructions

## How to Run
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/grocery-delivery-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd grocery-delivery-app
    ```
3. Install dependencies for both frontend and backend:
    ```bash
    npm install
    cd ./client && npm install
    cd ./server && npm install
    ```
4. Set up the environment variables in a `.env` file:
    ```bash
    MONGODB_URI=your-mongodb-connection-string
    JWT_SECRET=your-secret-key
    ```
5. Start the development server:
    ```bash
    npm run dev
    ```

## Credits
- Developed as part of the internship at **Next24tech Technology & Services**.
- Special thanks to **ChatGPT** for guidance and code assistance during development.
