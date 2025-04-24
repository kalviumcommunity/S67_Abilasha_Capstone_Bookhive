# S67_Capstone_Bookhive

BookHive is a reader-focused platform that helps users organize, explore, and review books.  Readers can manage their books in three categories—Past Readings, Current Reading, and Wanna Read. The Search Section allows users to find books by genre, offering suggestions (but not full access to books). In the Discover Section, users can explore different genres. Readers can also rate and review books, making it easier for others to find great reads

Project Goal:
To build BookHive, a reader-centric platform that enables users to organize their reading lists, explore books by genre, and share their thoughts through reviews and ratings. The platform will also include virtual book clubs, JWT + Google OAuth authentication, and separate views for readers and moderators. The tech stack includes MERN (MongoDB, Express.js, React, Node.js).

Week 1: Planning & Design Phase

Day 1: Idea Finalization & Documentation
Finalize core features of BookHive:
My Books (History, Current Reading, Wanna Read)
Search (Genre-based discovery)
Discover (Trending & category-based books)
Book Ratings & Reviews
Book Suggestion and Voting (future add-on)
Admin/Moderator Panels

Create a Google Doc to outline:
Full project scope
Feature list
Timeline and tech stack
Break down tasks into weekly sprints and track them using Trello/Jira/Notion.



Day 2: Low-Fidelity Wireframing
Sketch basic UI layouts for:
Homepage
My Books
Search & Discover Sections
Book Review Modal
Tools: Figma 
Focus: Layout planning, user flow, and navigation clarity



Day 3: High-Fidelity UI Design
Design sleek and minimal UI in Figma or Adobe XD
Ensure the design reflects a reader-friendly, community vibe
Prepare desktop versions for:
Dashboard
Book sections
Review popups
Signup/Login pages

Day 4: GitHub Repository Setup
Create your main repo: bookhive
Initialize with README, .gitignore
Setup GitHub Projects board (Kanban-style task tracker)
Add initial issues/tasks (at least 3-4):
Backend setup
UI components
Schema planning



🛠️ Week 2: Backend Development Begins

Day 5: Backend Initialization
Set up Node.js + Express.js backend
Install dependencies:
express, mongoose, dotenv, cors, nodemon, bcrypt, jsonwebtoken
Initialize server.js or app.js

Day 6: Database Schema Planning
Plan and document schemas:
User: name, email, password, roles, profilePic
Book: title, author, genre, image, description
Review: userId, bookId, rating, comment
Create an ER diagram showing relationships
Users → Reviews ← Books

Day 7: Database Setup & Testing
Connect MongoDB Atlas/local DB
Test schema creation using dummy data in Postman or Mongo shell
Create helper functions for DB CRUD


Day 8: Creating GET APIs
Create routes for:
Fetching all books
Fetching user profile
Fetching reviews for a book
Test endpoints using Postman or Bruno


Day 9: Creating POST APIs
Add routes for:
Adding books to user lists
Submitting reviews with rating
Ensure data validation using middleware

Day 10: PUT & DELETE APIs
Create routes for:
Updating book list status
Editing a review
Deleting a book from a user’s list
Deleting a review
Full CRUD achieved ✅


Day 11: Implement JWT Authentication
Setup JWT-based auth system:
Signup & Login routes
Secure password hashing using bcryptjs
Auth middleware to protect routes


Day 12: Google OAuth Integration
Implement Google Sign-In with Passport.js or Firebase Auth
Generate and store JWT after successful Google login
Handle token-based access and session validity



Day 13: File Upload Feature
Use Multer for handling profile pic uploads
Save images to server/uploads or integrate with Cloudinary (optional)
Attach image URL to user schema


Day 14: Backend Deployment Prep
Prepare for deployment:
Clean up console.logs
Setup environment variables (.env)
Final tests with all routes
Deploy to Render / Railway / Heroku
Test APIs live in frontend


🌐 Week 3: Frontend Kickoff

Day 15: React Frontend Setup
Use Vite + React to bootstrap frontend
Install base dependencies:
axios, react-router-dom, dotenv, tailwind (optional)
Folder structure setup (pages, components, api)


Day 16: UI Routing & Layout
Build base structure with Navbar, Footer, and routing using react-router-dom
Setup public pages: Home, Search, Discover
Setup protected pages: My Books, Profile


Day 17: My Books Section
Build 3 tab layout:
History (Past Reads)
Current Reading
Wanna Read
Use cards or list UI to display book info


Day 18: Search Section
Implement search functionality:
Search by genre/category
Use debounce or filters for smooth UX
Display results using fetched suggestions


Day 19: Discover Section
Show books based on genre interests (suggested by backend logic)
Add hover effects, clickable genres, filters


🔗 Week 4: Full Integration & Polishing

Day 20: Connect APIs to Frontend
Link backend APIs using Axios
Use context or Redux (optional) for user state
Display user’s book lists and reviews


Day 21: Reviews & Ratings UI
Show ratings/reviews below each book
Allow users to post reviews from UI
Optional: Use star rating component



Day 22: Update & Delete Actions
Add buttons for:
Moving books between categories
Editing/deleting reviews
Add confirmation modals

Day 23: Finalize UI + Bug Fixes
Polish the entire frontend to match your Figma design
Ensure responsive design across devices
Fix padding, color, spacing issues


Day 24: Frontend Deployment
Deploy frontend using Netlify or Vercel
Connect it with deployed backend
Test full flow: Signup → Book List → Review → Logout


Day 25: Final Debugging & Showcase Prep
Run final tests on all user journeys
Fix critical bugs


*Backend deployment link* - https://s67-abilasha-capstone-bookhive.onrender.com/
