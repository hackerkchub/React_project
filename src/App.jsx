
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css'

function App(){
  return (
    <>
    <Header/>
    
    <main id="main-content">
      <h1>Hello, I am React Developer </h1>
      <p>Welcome to my first React website.
        I am learning React and building my skills in front-end development. This website is a simple example of how to create a React application with components, state, and props. I hope you enjoy exploring it!
      </p>
      <button onClick={() => alert('Button clicked!')}>Contact me</button>
    </main>
    <Footer/>
    </>
  )
}

export default App;
