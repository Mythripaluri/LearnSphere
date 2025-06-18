LearnSphere 🎓
LearnSphere is a full-stack e-learning web application designed to deliver a seamless online learning experience. Users can browse educational content, register securely, and access interactive courses. The platform features modern design, authentication, media handling with Cloudinary, and a robust backend powered by Node.js and MongoDB.

🌐 Live Demo: [learn-sphere-nu.vercel.app](https://learn-sphere-nu.vercel.app/)
📁 GitHub Repo: Mythripaluri/LearnSphere

✨ Features
🔐 Authentication: Secure user login and registration

📚 Course Browsing: Explore various courses with structured content

🌆 Media Uploads: Efficient image handling using Cloudinary

🧾 Full-Stack Architecture: React front-end + Node.js/Express backend + MongoDB

📱 Responsive UI: Clean and adaptable interface built with CSS

🌐 Deployment: Front-end deployed via Vercel

🛠️ Tech Stack
Technology	Usage
React	Front-end library for building UI
Node.js	JavaScript runtime for backend
Express.js	Web framework for Node.js
MongoDB	Atlas database for storing user/course data
Cloudinary	Image & media hosting service
CSS	Styling and layout
Vercel	Deployment for front-end
Render Deployment for back-end

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/Mythripaluri/LearnSphere.git
cd LearnSphere
2. Install Frontend Dependencies
cd client
npm install
3. Install Backend Dependencies
cd ../server
npm install
4. Environment Setup
Create a .env file in the /server directory with the following:

backend env
# Server
PORT=5000

# MongoDB
DATABASE_URL=your_mongodb_connection_string
# JWT
JWT_SECRET=your_jwt_secret
# node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Razorpay
RAZOR_KEY=razorpay_key
RAZOR_SECRET=razorpay_secret

# Cloudinary
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret

# Cloudinary Upload Folder
FOLDER_NAME=cloudinary_folder_name

# Nodemailer (Mail)
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_mail_id
MAIL_PASS=your_mail_pass

frontend env
VITE_APP_BASE_URL=https://learnsphere-0vbt.onrender.com/api/v1


🧩 Project Structure

LearnSphere/
├── frontend/              # React Front-end
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── backend/              # Node.js Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/          # DB and Cloudinary config
│   └── index.js
└── README.md

📦 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Authenticate user
GET	/api/courses	Fetch all courses
POST	/api/courses	Create a new course


🙌 Contributing
Contributions are welcome! Please fork the repo and create a pull request with your proposed changes. For major changes, open an issue first to discuss what you’d like to add.

👨‍💻 Author
Developed by Mythripaluri
