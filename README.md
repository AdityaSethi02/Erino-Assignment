
# Contact Assignment

## Overview
The **Contact Management** feature helps users manage customer/client information efficiently. It allows users to **add, view, update, and delete** contacts, ensuring organized and accessible data for maintaining strong business relationships.

---

## Features
1. **Add New Contact**  
   Input details like name, email, phone number, company, and job title.
2. **View Contacts**  
   Browse a sortable, paginated table of contacts.
3. **Edit Contact**  
   Update contact information when needed.
4. **Delete Contact**  
   Remove outdated or duplicate contact records.

---

## Tech Stack
- **Frontend**: ReactJS, Material-UI (MUI)
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL

---

## Steps to Run Locally

### **Prerequisites**
- Install [Node.js](https://nodejs.org/) (v18+)
- Install [PostgreSQL](https://www.postgresql.org/)
- A package manager like `npm` or `yarn` (use `npm` in the instructions below)
- Install [Git](https://git-scm.com/)

### **Clone the Repository**
1. Open a terminal and navigate to the directory where you want to clone the project.
2. Run the following command:
   ```bash
   git clone https://github.com/AdityaSethi02/Erino-Assignment.git
   cd Erino-Assignment
   ```

### **Set Up the Backend**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Create a PostgreSQL database named on [Neon.tech](https://console.neon.tech/) and get the PostgreSQL URL

4. Create a `.env` file in the `backend` directory and add the following:
   ```env
   DATABASE_URL=<YOUR PostgreSQL URL>
   PORT=8080
   ```

5. Build the backend server:
   ```bash
   npm run build
   ```
6. Start the backend server:
   ```bash
   npm run start
   ```

   The backend will be available at `http://localhost:8080`.

---

### **Set Up the Frontend**
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Navigate to the src directory:
    ```bash
    cd src
    ```

4. Create a `config.ts` file in the `frontend/src` directory and add the following:
   ```env
   export const BACKEND_URL = `http://localhost:8080`.
   ```

5. Navigate back to the frontend directory Start the frontend server:
   ```bash
   cd ..
   ```
6. Start the frontend server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`.

---

## How It Works Locally
1. Open the frontend in a browser at `http://localhost:5173`.
2. Use the Contact Management interface to:
  - Add a new contact using the provided form.
  - View and manage contacts in the table.
  - Edit or delete contact records using the action buttons.

---
