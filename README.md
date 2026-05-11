🧸 Toy Tales
📌 Project Overview

Toy Tales is a React CRUD application that allows users to manage a collection of toys. Users can view toys, add new toys, like toys, and delete (donate) toys. The app is connected to a backend API to persist data.

🚀 Features
📖 Read (GET)
Displays all toys on page load using useEffect
Fetches data from backend API
➕ Create (POST)
Users can add a new toy via a form
New toys are saved to backend and displayed immediately
Default likes start at 0
❤️ Update (PATCH)
Users can “like” a toy
Likes are updated in the backend and UI updates instantly
🗑 Delete (DELETE)
Users can delete (donate) a toy
Toy is removed from backend and UI updates immediately
🛠️ Tech Stack
React (useState, useEffect)
JavaScript (ES6+)
Fetch API
JSON Server (Backend)
CSS for styling
📁 Project Structure
src/
│── App.jsx
│── Header.jsx
│── ToyForm.jsx
│── ToyContainer.jsx
│── ToyCard.jsx
⚙️ Installation & Setup
1. Clone the repository
git clone <your-repo-url>
cd toy-tales
2. Install dependencies
npm install
3. Run backend server
npm run server
4. Run frontend
npm run dev
📡 API Endpoints
Method	Endpoint	Description
GET	/toys	Fetch all toys
POST	/toys	Add a new toy
PATCH	/toys/:id	Update toy likes
DELETE	/toys/:id	Delete a toy
🧠 Key Concepts Learned
React state management with useState
Side effects with useEffect
CRUD operations using Fetch API
Props drilling and component communication
Updating UI after backend changes


✍️ Author

Your Name – Toy Tales Project
