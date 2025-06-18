---

LearnSphere

LearnSphere is a full-stack e-learning web application designed to deliver a seamless online learning experience. Users can browse educational content, register securely, and access interactive courses. The platform features modern design, authentication, media handling with Cloudinary, and a robust backend powered by Node.js and MongoDB.

Live Demo: [https://learn-sphere-nu.vercel.app/](https://learn-sphere-nu.vercel.app/)
GitHub Repo: [https://github.com/Mythripaluri/LearnSphere](https://github.com/Mythripaluri/LearnSphere)

---

Features

* Authentication: Secure user login and registration
* Course Browsing: Explore various courses with structured content
* Media Uploads: Efficient image handling using Cloudinary
* Full-Stack Architecture: React front-end + Node.js/Express backend + MongoDB
* Responsive UI: Clean and adaptable interface built with CSS
* Deployment: Front-end deployed via Vercel

---

Tech Stack

Technology         - Usage
React              - Front-end library for building UI
Node.js            - JavaScript runtime for backend
Express.js         - Web framework for Node.js
MongoDB            - NoSQL database for storing user/course data
Cloudinary         - Image & media hosting service
CSS                - Styling and layout
Vercel             - Deployment for front-end

---

Screenshots

(Replace these with actual URLs or file paths as needed)

Home Page: your-screenshot-url.com/home.png
Login Page: your-screenshot-url.com/login.png
Course Details: your-screenshot-url.com/course.png

---

Getting Started

1. Clone the Repository

git clone [https://github.com/Mythripaluri/LearnSphere.git](https://github.com/Mythripaluri/LearnSphere.git)
cd LearnSphere

2. Install Frontend Dependencies

cd client
npm install

3. Install Backend Dependencies

cd ../server
npm install

4. Environment Setup

Create a .env file inside the /server directory with the following keys:

MONGO\_URI=your\_mongodb\_connection\_string
JWT\_SECRET=your\_jwt\_secret
CLOUDINARY\_CLOUD\_NAME=your\_cloud\_name
CLOUDINARY\_API\_KEY=your\_api\_key
CLOUDINARY\_API\_SECRET=your\_api\_secret

---

Project Structure

LearnSphere/
├── client/              - React Front-end
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── server/              - Node.js Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/          - DB and Cloudinary config
│   └── index.js
└── README.txt

---

Sample API Endpoints

Method - Endpoint           - Description
POST   - /api/auth/signup   - Register a new user
POST   - /api/auth/login    - Authenticate user
GET    - /api/courses       - Fetch all courses
POST   - /api/courses       - Create a new course

---

To-Do

* Add profile management
* Add course progress tracking
* Add user reviews and ratings
* Improve accessibility (a11y)

---

Contributing

Contributions are welcome! Please fork the repo and create a pull request with your proposed changes. For major changes, open an issue first to discuss what you’d like to add.

---

License

This project is licensed under the MIT License.

---

Author

Developed by Mythripaluri
GitHub: [https://github.com/Mythripaluri](https://github.com/Mythripaluri)

---
