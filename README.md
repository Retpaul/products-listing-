# E-commerce Product Listing Application

## Project Overview

This project is a simple e-commerce product listing application built with Vue.js for the frontend and Node.js + Express for the backend. It provides a platform where users can view, add, update, and delete products. Only authenticated users can perform CRUD operations on products. 

## Features

### Frontend (Vue.js)
- **Product Listing Page**: Displays products with details such as name, description, price, and image.
- **Add Product Form**: Allows authenticated users to add new products.
- **Search Bar**: Filters products by name.
- **Login Form**: Authenticates users.
- **Responsive Design**: Ensures compatibility across different devices.

### Backend (Node.js + Express)
- **API for Products**: Supports Create, Read, Update, Delete (CRUD) operations for products.
- **API for User Authentication**: Handles user login.
- **Route Protection**: Ensures that only authenticated users can add, update, or delete products.
- **Database Integration**: Uses MongoDB to store user and product information.

## Technologies Used

### Frontend
- Vue.js
- Vue Router
- Vuex
- Tailwind CSS (for responsive design)

### Backend
- Node.js
- Express
- Mongoose (for MongoDB integration)
- JWT (for authentication)

### Database
- MongoDB

## Setup and Installation

### Prerequisites
- Node.js
- npm
- MongoDB

### Backend Setup
1. Clone the repository
    ```sh
    git clone https://github.com/Retpaul/products-listing-.git
    ```

2. Install backend dependencies
    ```sh
    npm install
    ```
3 Create a `.env` file and add the following environment variables:
    ```env
  NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vue
JWT_SECRET=380b73dc13f9f439b73a1f4133b5979ef9bdd2e94b706d82a64b73e15e338490
    ```
4. Start the backend server
    ```sh
    npm run server
    ```

### Frontend Setup
1. Navigate to the frontend directory
    ```sh
    cd client
    ```
2. Install frontend dependencies
    ```sh
    npm install
    ```
3. Start the frontend development server
    ```sh
    npm run dev
    ```
4.To run json server run command
 ```sh
    npm run server
    ```
### Running the Application
1. Make sure MongoDB is running.
2. Start the backend server.
3. Start the frontend server.
4. Open `http://localhost:5000/products` in your browser to view the application.

## Ongoing Work/Unfinished Work

### Image Upload using Cloudinary
Currently, the application uses dummy data generated using JSON Server for product images. The next step is to integrate Cloudinary for image upload. This involves:
- Adding a Cloudinary SDK to the backend.
- Creating an endpoint for uploading images to Cloudinary.
- Updating the product creation form to handle image uploads.

### Connecting Frontend and Backend
The frontend is currently using dummy data. The next step is to connect the frontend with the backend API:
- Update Vuex store actions to fetch data from the backend API.
- Use Axios for making HTTP requests.
- Ensure the frontend handles JWT authentication and passes the token with requests.

### Handling Authentication from Frontend
- Implement a login form that sends user credentials to the backend for authentication.
- Store the JWT token in local storage upon successful login.
- Protect routes in the frontend based on authentication status.

## Future Enhancements
- Implement user registration and profile management.
- Add unit and integration tests for both frontend and backend.
- Improve error handling and input validation.
- Enhance the UI/UX with more features and animations.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.
