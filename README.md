# Fresh4U - Online Grocery Store

## Overview

Fresh4U is an online grocery store designed to provide a seamless and convenient shopping experience for users to purchase high-quality fresh produce and everyday essentials. This project is built using React.js for the front end, Node.js for the server, and MongoDB for the database.

## Features

1. **User Authentication**: Users can create accounts, log in, and manage their profiles. Secure authentication ensures a personalized shopping experience.

2. **Product Catalog**: Browse through a diverse range of fresh produce, groceries, and daily essentials conveniently categorized for easy navigation.

3. **Shopping Cart**: Add products to the cart, review items, and proceed to a secure checkout process.

4. **Order Management**: Users can view their order history, track current orders, and receive updates on delivery status.

5. **Admin Panel**: A separate admin panel to manage products, orders, and user accounts efficiently.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Setup Instructions

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/fresh4u.git
    ```

2. **Install dependencies for both the client and server**:

    ```bash
    cd fresh4u/client
    npm install

    cd ../server
    npm install
    ```

3. **Configure the environment variables**:

    Create a `.env` file in the `server` directory and add the following:

    ```env
    PORT=3001
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-secret-key
    ```

4. **Run the application**:

    Start the server:

    ```bash
    cd server
    npm start
    ```

    Start the client:

    ```bash
    cd client
    npm start
    ```

5. **Open your browser and visit** `http://localhost:3000` **to access the Fresh4U online grocery store.**

## Contributors
