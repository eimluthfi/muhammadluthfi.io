import logo from './logo.svg';
import './App.css';
import react, {Component} from 'react';
import Gambar from './asset/img/logo.png'


const Welcome = (props) => {
  return (
    <section className="text">
      <input className="box" type="checkbox" />
      {props.name}
    </section>
  )
}

const App = () => {
  return (
    <>
      <div className="card">
        <img src={Gambar} />
        <p>THINGS TO DO</p>
        <h6>During Bootcamp in Jabarcodingcamp</h6>
        <Welcome name="Belajar GIT & CLI" />
        <Welcome name="Belajar HTML & CSS" />
        <Welcome name="Belajar Javascript" />
        <Welcome name="Belajar ReactJS Dasar" />
        <Welcome name="Belajar ReactJS Andavance" />
        <button>SEND</button>       
      </div>
    </>
  )
}

export default App;
