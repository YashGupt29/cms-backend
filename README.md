# CMS Backend

This project is a Contact Management System (CMS) backend built with **Node.js**, **Express.js**, and **MongoDB**. It supports Docker for easy deployment but can also be run locally using `npm`.

## 📝 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project (Docker)](#running-the-project-docker)
- [Running the Project (Local)](#running-the-project-local)
- [Available Commands](#available-commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## 📋 Prerequisites

Make sure you have the following installed on your local machine:

- [Git](https://git-scm.com/)
- [Node.js (v18+)](https://nodejs.org/)
- [Docker](https://www.docker.com/products/docker-desktop) (optional for Docker setup)

## 🚀 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/YashGupt29/cms-backend.git
   cd cms-backend
   ```

2. **Set Up Environment Variables**

   Create a `.env` file in the root directory with the following content:

   ```env
   MONGO_URI="your_mongodb_connection_string"
   PORT=5000
   ```

   > **Note:** Replace `"your_mongodb_connection_string"` with your actual MongoDB connection string.

---

## 🐳 Running the Project (Docker)

This project includes a `Makefile` to simplify Docker operations.

### 1. **Run the Backend with Docker**

```bash
sudo make run-backend
```

This command will:

- Build the Docker image.
- Run the container in detached mode.
- Automatically display logs.

### 2. **Stopping the Backend**

```bash
sudo make stop-backend
```

### 3. **Cleaning Up Docker Images**

```bash
sudo make clean
```

---

## 🛠️ Running the Project (Local)

If you prefer not to use Docker, you can run the project using Node.js and `npm`.

### 1. **Install Dependencies**

```bash
npm install
```

### 2. **Start the Server**

```bash
node server.js
```

### 3. **Access the Application**

- Open your browser and navigate to:

  ```
  http://localhost:5000
  ```

### **Note:**

Ensure that your MongoDB server is running and the `MONGO_URI` in the `.env` file is correctly configured.

---

## ⚙️ Available Commands

| Command                  | Description                                |
| ------------------------ | ------------------------------------------ |
| `sudo make run-backend`  | Build and run the Docker container.        |
| `sudo make stop-backend` | Stop and remove the running container.     |
| `sudo make clean`        | Remove Docker images and prune the system. |
| `npm install`            | Install project dependencies (local).      |
| `node server.js`         | Run the backend server locally.            |

---

## 🌐 API Documentation

The backend provides the following endpoints:

- **GET /api/contacts** - Get all contacts.
- **POST /api/contacts** - Create a new contact.
- **PUT /api/contacts/:id** - Update a contact.
- **DELETE /api/contacts/:id** - Delete a contact.

### Sample API Request

```bash
curl -X GET http://localhost:5000/api/contacts
```

---

## 📁 Project Structure

```plaintext
cms-backend/
├── controllers/
├── routes/
├── models/
├── middleware/
├── config/
├── .env
├── .gitignore
├── Dockerfile
├── .dockerignore
├── Makefile
├── package.json
├── server.js
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request.

---

## 📝 License

This project is licensed under the MIT License.

---

### 💡 Notes

- If you encounter any issues, check the logs:
  - **For Docker**:
    ```bash
    sudo docker logs cms-backend-container
    ```
  - **For Local**:
    Check the terminal output for errors when running `node server.js`.
