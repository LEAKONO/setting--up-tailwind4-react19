import React from 'react'
import { useState } from 'react'

function Contact() {
    const[name, setName]=useState("")
    const[email ,setEmail]=useState("")
    const[message,setMessage]=useState("")
    const handleSubmit = (e) => {
    e.preventDefault();
  if (!name || !email || !message) {
    alert("All fields are required.");
    return;
  }
  console.log({ name, email, message });
  alert("Message sent!");
  setName("");
  setEmail("");
  setMessage("");
};

  return (
    <div>
        <h1>You Can Reach Out</h1>
        <form onSubmit={handleSubmit}>
         <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='enter your name' required/>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='enter your email' required/>
        <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder='enter your message' required></textarea>
        <button type="submit">Send</button>
        </form>
        
</div>
  )
}

export default Contact