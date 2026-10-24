
import Header from './component/Header';
import Footer from './component/Footer';
import Student from './component/Student';
import './App.css'
import { useState } from 'react';

function App(){

//  const [count, setCount] = useState(0);

//   function increase(){
//     setCount(count + 1);
//     console.log('Count increased to:', count + 1);
//   }

//   function decrease(){
//     setCount(count - 1);
//     console.log('Count decreased to:', count - 1);
//   }

// const [message, setMessage] = useState('Hello, friend!');

const [name, setName] = useState('');

  return (
    <>
    {/* <Header/>
    
    <main id="main-content">
      <h1>Hello, I am React Developer </h1>
      <p>Welcome to my first React website.
        I am learning React and building my skills in front-end development. This website is a simple example of how to create a React application with components, state, and props. I hope you enjoy exploring it!
      </p>
      <button onClick={() => alert('Button clicked!')}>Contact me</button>
    </main>
    <Footer/> */}


    {/* <Student name="Mayank" course="Computer Science" age={20} />
    <Student name="Priya" course="Mathematics" age={22} />
    <Student name="Rahul" course="Physics" age={21} /> */}


    {/* <h1>Counter: {count}</h1>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button> */}

    {/* <h1>{message}</h1>
   <button onClick={() => setMessage('welcome to react')}>Update Message</button> */}

      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />

      <h2>Hello, {name}!</h2>

    </>
   
  )
}

export default App;
