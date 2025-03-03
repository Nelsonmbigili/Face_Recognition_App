import './App.css';
import React, { Component } from "react";
import Navigation from './components/Navigation/Navigation.jsx';
import Logo from './components/Logo/Logo.jsx';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx';
import Rank from './components/Rank/Rank.jsx';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.jsx';
import ParticlesBg from 'particles-bg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      Image_Url: "",
      box: {},
    };
  }

  calculateFaceLocation = (data) => {
    // Placeholder for face detection logic
    const clarifyFace = data.outputs[0].data.regions[0].region_info.bounding_box
    console.log("Face data received:", data);
    const image = document.getElementById("input_image");
    const width = Number(image.width);
    const height = Number(image.height);
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ Image_Url: this.state.input });
    
    fetch("http://localhost:3000/clarifai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrl: this.state.input })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Response Data:", data);
        this.calculateFaceLocation(data);
      })
      .catch(error => console.log("Error:", error));
  };

  render() {
    return (
      <div className="App">
        <ParticlesBg className="particles" color="#ff0000" num={100} type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition Image_Url={this.state.Image_Url} />
      </div>
    );
  }
}

export default App;