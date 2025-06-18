# LearnSphere 🎓

**LearnSphere** is a full-stack e-learning web application designed to deliver a seamless online learning experience. Users can browse educational content, register securely, and access interactive courses. The platform features a modern design, authentication, media handling via Cloudinary, payment integration, and a robust backend powered by Node.js, Express, and MongoDB.

🌐 **Live Demo**: [learn-sphere-nu.vercel.app](https://learn-sphere-nu.vercel.app)  
📁 **GitHub Repo**: [Mythripaluri/LearnSphere](https://github.com/Mythripaluri/LearnSphere)

---

## ✨ Features

- 🔐 **Authentication**: Secure user login and registration  
- 📚 **Course Browsing**: Explore various courses with structured content  
- 🌆 **Media Uploads**: Efficient image handling using Cloudinary  
- 🧾 **Full-Stack Architecture**: React front-end + Node.js/Express backend + MongoDB  
- 💳 **Payment Gateway**: Razorpay integration for payments  
- 📬 **Email Notifications**: Email sending through Nodemailer  
- 📱 **Responsive UI**: Clean and adaptable interface built with CSS  
- ☁️ **Deployment**: Front-end via Vercel, back-end via Render  

---

## 🛠️ Tech Stack

| Technology     | Usage                                      |
|----------------|---------------------------------------------|
| React          | Front-end library for building UI          |
| Node.js        | JavaScript runtime for backend             |
| Express.js     | Web framework for Node.js                  |
| MongoDB Atlas  | Database for storing user/course data      |
| Cloudinary     | Media/image storage and optimization       |
| CSS            | Styling and layout                         |
| Razorpay       | Payment gateway integration                |
| Nodemailer     | Sending emails (e.g., welcome, reset)      |
| Vercel         | Front-end deployment                       |
| Render         | Back-end deployment                        |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Mythripaluri/LearnSphere.git
cd LearnSphere
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 4. Environment Variables
Create a .env file in the /backend directory and add the following:

```bash
# Server
PORT=5000

# MongoDB
DATABASE_URL=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret
# (Generate one using: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))")

# Razorpay
RAZOR_KEY=your_razorpay_key
RAZOR_SECRET=your_razorpay_secret

# Cloudinary
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
FOLDER_NAME=your_cloudinary_folder

# Nodemailer
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email_address
MAIL_PASS=your_email_password
```

Also, in the /frontend directory, create a .env file:
```bash
VITE_APP_BASE_URL=https://learnsphere-0vbt.onrender.com/api/v1
```

### 5. Run the Development Servers
Start backend server:
```bash
cd backend
npm run dev
```

Start frontend dev server:
```bash
cd ../frontend
npm run dev
```

🧩 Project Structure

```bash
LearnSphere/
├── frontend/               → React Front-end
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── backend/                → Node.js Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/             → DB, Cloudinary, etc.
│   └── index.js
└── README.md
```

🙌 Contributing
Contributions are welcome!
Feel free to fork the repository and submit a pull request with your proposed changes.
For major feature suggestions, please open an issue first to discuss them.

👨‍💻 Author
Developed by Mythripaluri
