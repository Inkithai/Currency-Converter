# Currency Converter and Transfer Management Application

## Overview
This project is a user-friendly currency converter and transfer management system. It enables users to convert currency between selected countries, create transfer records, and manage transaction history. Authentication is required to perform transfers and access past transactions.

## Frontend Hosting
This is the frontend hosting link:
https://currencyfrontend-q2qu8jin8-inkis-projects.vercel.app
https://currencyfrontend.vercel.app/

## Backend Hosting
Backend hosting will be set up soon.

## Technologies Used
- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Hosting:** Vercel (Frontend), Render (Backend)  
- **API:** ExchangeRate-API for currency conversion rates  

## Features
### Currency Conversion
- Users can select the source and target currencies and enter a transfer amount.
- The application calculates and displays the converted amount in the target currency.

### Transfer Management
- Users can create a transfer record using the transfer button.
- Transfer history lists all completed transactions.
- A revoke button allows users to delete individual transfer records.

### Authentication
- Users must log in to transfer funds or view transaction history.

## Supported Currencies
Transfers can be made between the following countries:
- **Sri Lanka (LKR)**
- **United States (USD)**
- **Australia (AUD)**
- **India (INR)**

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- ExchangeRate-API key

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Inkithai/Currency-Converter.git
   cd Currency-Converter/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend directory and add your environment variables.
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```
**Note:** The frontend does not require a `.env` file as configurations are handled by the backend.

## Usage
- Access the application via the frontend live demo link or localhost when running locally.
- Convert currency by selecting the source and target countries and entering the transfer amount.
- Log in to create a transfer record.
- View and manage past transfers.

## Environment Variables
Create a `.env` file in the backend directory and add the necessary environment variables.

### Frontend
- No `.env` file is required for the frontend setup.

---
This project provides a seamless experience for currency conversion and transfer management with secure authentication and efficient transaction tracking.
