import React from 'react'

function About() {
  return (
    <>
    <h1 className='text-3xl font-bold text-center text-blue-800 my-6'>About Me</h1>
     <div className='max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <p className='p-4 border rounded shadow-md bg-white text-gray-700'>I’m a Kenya-based fullstack developer with strong experience in JavaScript, React, Node.js, and Express. I’ve built and deployed multiple fullstack projects from the ground up, including a Doctor’s Appointment System and an Asset Inventory Management System, integrating features like authentication, role-based access, image uploads (Cloudinary), and secure API endpoints.</p>
        <p className='p-4 border rounded shadow-md bg-white text-gray-700'>I thrive in early-stage product development, having worked on pre-MVP products where I collaborated across backend and frontend to ship usable features fast. I’ve also handled deployment using platforms like Render, Vercel, and MongoDB Atlas, ensuring smooth end-to-end delivery.</p>
        <p className='p-4 border rounded shadow-md bg-white text-gray-700'>Outside of coding, I’m a curious learner who’s always exploring new tools, especially in the JavaScript and DevOps ecosystem. My long-term goal is to build and scale impactful platforms that serve real users — and to grow as a thoughtful, collaborative developer who brings clarity and value to any engineering team.

</p>
        
</div>
    </>
   
  )
}

export default About