Movie Booking Backend System | Node.js, Express, MongoDB
Project Summary

This project is a backend system for an online movie ticket booking platform, similar to BookMyShow.
It is designed to handle movie discovery, show management, seat availability, booking lifecycle, and payment workflows using a scalable backend architecture.

The system focuses on high concurrency handling, seat locking, and data consistency, making it suitable for real-world production scenarios.

Key Responsibilities of the Backend

Manage cities, movies, theatres, and shows

Provide real-time seat availability

Prevent double booking using temporary seat locks

Handle booking creation and status transitions

Support payment initiation and verification

Generate confirmed tickets after successful payment

Tech Stack

Backend Technologies

Node.js (JavaScript runtime)

Express.js (REST API framework)

MongoDB (NoSQL database)

Mongoose (ODM for MongoDB)

Supporting Tools

dotenv (environment configuration)

Nodemon (development server)

Git & GitHub (version control)

Postman (API testing)

Planned

Redis (seat locking and caching)

Payment Gateway Integration

Notification Services (Email / SMS)

Project Architecture

The backend follows a modular and scalable folder structure with clear separation of concerns.

movie-booking-backend/
│
├── src/
│ ├── config/
│ │ └── db.js # MongoDB connection using Mongoose
│ │
│ ├── routes/
│ │ └── index.js # Base routes and health check
│ │
│ ├── app.js # Express app configuration and middleware
│ └── server.js # Server startup and port binding
│
├── .env # Environment variables (ignored by Git)
├── package.json # Dependencies and scripts
└── README.md

This structure is designed to scale with additional folders such as:

models/

controllers/

services/

middlewares/

utils/

Core Backend Features
Implemented

Express server setup

MongoDB database connection

Environment-based configuration

Health check API

Git-ready project with .gitignore

Planned

City and movie listing APIs

Theatre and show management

Seat layout and availability APIs

Redis-based seat locking with TTL

Booking lifecycle management

Payment processing flow

Ticket generation and confirmation

Seat Locking & Concurrency Handling (Design)

Seats will be temporarily locked using Redis

Lock duration: fixed TTL (e.g., 5 minutes)

Prevents race conditions and double booking

Automatic seat release on payment failure or timeout

This design supports high traffic scenarios and ensures data consistency.

API Flow (High-Level)

User selects a city

Fetch available movies for that city

Fetch theatres and shows for a movie

Fetch seat layout with availability

Lock selected seats temporarily

Create booking with PENDING_PAYMENT status

Process payment

Confirm booking and generate ticket

Release seats automatically if payment fails

Environment Setup
Clone Repository
git clone https://github.com/<your-username>/movie-booking-backend.git
cd movie-booking-backend

Install Dependencies
npm install

Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/movie_booking

Run the Application
npm run dev

API Testing

Health Check Endpoint

GET /api/health

Response

{
"success": true,
"message": "Server is running"
}

Non-Functional Requirements

High concurrency support

Atomic operations

No double booking

Scalable architecture

Clean REST API design

Production-ready backend structure

Future Enhancements

Authentication and authorization

Role-based access (Admin, Theatre Owner, User)

Pricing rules and seat categories

Offers and coupon management

Food and beverage ordering

Microservices-based architecture

Author

Vishnu Prabhakar
Backend Developer | Node.js
B.Tech in Artificial Intelligence & Data Science
