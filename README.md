# 🎵 Samespace Frontend Assignment

## 🚀 Overview  
This application is a **React.js** based music streaming application, built with **Vite** for **faster development and optimized performance**. It provides a **responsive, interactive, and smooth** user experience while fetching dynamic song data from a REST API.

### 🔥 **Key Features**  
✅ **Fully Responsive UI** matching the Figma design  
✅ **Fetches song data** dynamically from a REST API  
✅ **Background gradient** changes based on song cover image  
✅ **Persistent music playback** across tabs  
✅ **Smooth animations & transitions** for enhanced UX  
✅ **Context API** for global state management  



## 🎶 **Functionality**  

| Feature                | Description |
|------------------------|-------------|
 🎵 **Music Controls**  | Play, Pause, Next, Previous 
| 🔍 **Search Songs**    | Live search functionality |
| 🔄 **Tab Navigation**  | Switch between "For You" and "Top Tracks" |
| 🎚️ **Music Seeker**    | Adjust playback position smoothly |
| 🎨 **Dynamic UI**      | Background color adapts to song cover image |
| 🔊 **Persistent Audio**| Playback continues across tab switches |



## 🛠️ **Tech Stack**  
- **React.js** – Core framework
- **Vite** – Fast development environment
- **Context API** – Global state management for song data
- **Tailwind CSS** – Utility-first framework for styling
- **REST API** – Fetching real-time song data
- **react-h5-audio-player** – Handling music playback



## 📡 **REST API Usage**  
The app fetches song data from the **Samespace API**, including:  
- **Title, Artist, Cover Image, and Duration**  
- **Dynamic Cover Image**
- **API Endpoint**  
- **API Integration** is handled inside `services/api.jsx`.  



## 📂 **Project Structure**  

```
C:.
│   App.jsx                        # Main application file
│   index.css                      # Global styles
│   main.jsx                       # Entry point
│
├───assets                         # Static assets like images and icons
│   │   spotifylogo.png
│   └───favi
│           samespace_logo.ico
│
├───components                     # Reusable UI components
│       AudioPlayerComponent.jsx   # Handles audio playback UI
│       Header.jsx                 # Navigation bar
│       MainPage.jsx               # Landing page UI logic
│       SearchBar.jsx              # Search functionality
│       SongCard.jsx               # Individual song card
│       SongList.jsx               # List of all songs
│
├───context                        # Global state management
│       SongContext.jsx            # Context API for handling song state
│
├───pages                          # Main application pages
│       Home.jsx                   # Home page containing the music player
│
└───services                       # API handling logic
        api.jsx                    # Handles API requests to fetch songs
```



## 🌍 **State Management with Context API**  
The **Context API** is used for managing the song state globally. This ensures that:  
✅ **Selected song data** is accessible across components  
✅ **Playback control updates** reflect in real-time  
✅ **Optimized state handling** for performance  

This allows components to access and update song data efficiently.  

## ⚙️ **Installation & Setup**  

### **Prerequisites**  
- Node.js **(v16+ recommended)**  
- npm or yarn  

### **Steps to Run Locally**  

#### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/Adityakachare/Samespace_FrontEnd-Assignment.git
cd Samespace_FrontEnd-Assignment
```

#### 2️⃣ Install Dependencies  
```sh
npm install  # or yarn install
```

#### 3️⃣ Install the Audio Player Library
```sh
npm i react-h5-audio-player #audio player library
```

#### 4️⃣ Run the Application (Vite)
```sh
npm run dev  # or yarn dev
```

Open **http://localhost:5173/** in your browser (Vite uses port 5173 by default).



## 🚀 **Deployment**  
The project is **deployed on Netlify**.  
🔗 **Live Demo**: [Samespace Music Player](https://ssmusicplayerui.netlify.app/)  





## 👨‍💻 **Author**  
👤 **Aditya Kachare**  
📌 **LinkedIn:** [Aditya Kachare](https://www.linkedin.com/in/adityakachare/)  
📧 **Contact:** aadityakachare132@gmail.com  
