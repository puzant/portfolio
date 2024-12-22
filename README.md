# 🌐 Puzant's Portfolio
- **📷 Demo**: [Puzant Portfolio](http://puzant.netlify.app/)
- **🔗 Back-End repo**: https://github.com/puzant/portfolio-backend

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

[![Netlify Status](https://api.netlify.com/api/v1/badges/69b08752-c859-4ab6-a550-e45447ffb753/deploy-status)](https://app.netlify.com/sites/puzant/deploys)

## 🌟 Portfolio Website
A modern and responsive portfolio showcasing projects, skills, and travels. Built with Vue 3, SCSS, Node.js, and Express.js, it features lazy loading with Intersection Observer API, seamless animations, and Cloudinary integration.

## Preview
![app-screenshot](./public/portfolio-screenshot.png)

## ✨ Features
**Intersection Observer for Lazy Loading**
- Custom Lazy Loading: Utilizes a custom Vue directive with the Intersection Observer API.
- Optimized Image Loading: Images are fetched and loaded only when they appear in the viewport, enhancing performance.
- WebP Image Format: All images are served in the WebP format via Cloudinary for optimal quality and compression.

**Backend API**
- Express Server: Built with Node.js and Express.
- Cloudinary Integration: Fetches and transforms images dynamically using Cloudinary SDK.
- Deployed on Render: The backend is hosted on Render, ensuring robust performance and scalability.

**Animations**
- Fade In Effects: As user scrolls the section will loaded with fade in animation.
- Dynamic Layouts: Even and odd-indexed images have unique tilt effects for a creative aesthetic.

**Navigation**
- Horizontal and Vertical Navigation: Horizontal navigation transitions to a vertical sidebar navigation based on scroll position using the Intersection Observer API.
- Section Highlights: Active sections are highlighted dynamically for a seamless navigation experience

**Contact Form**
- EmailJS Integration: Fully functional contact form with EmailJS for sending messages.
- Validation: Includes field validations to ensure proper inputs.

## 🛠️ Built With  
🎨 **Frontend**
- Vue 3 with Composition API
- SCSS for styling
- Intersection Observer API
- EmailJS

💻 **Backend**
- Node.js
- Express
- Cloudinary SDK

## 🗄️ Hosting
- Back-End deployed on Render
- Front-End deployed on Netlify
