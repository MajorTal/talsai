// import logo from './logo.svg';
import './App.css';
import ImageGallery from 'react-image-gallery';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// function Welcome(props) {
//   return <h1>Hello, {props.name}, {props.name2}</h1>;
// }

const prefix = 'https://tal-private-zombie.s3.amazonaws.com/zombies/rYvqsftACOY/';
const number_of_images_per_page = 16;

let images = [];

for (let i in [...Array(number_of_images_per_page).keys()]) {
  images.push({
    original: prefix + i + ".png",
    thumbnail: prefix + i + "-thumb.png",
    // originalTitle: "asd",
    // originalAlt: "aaa",
  })
};

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 2000,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'top',
      showVideo: {},
      useWindowKeyDown: true,
      autoPlay: true,
    };
  }
  componentDidMount(){
    document.title = "Zombies"
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route exact path="/" element={<Home/>}/>
            </Routes>
          </div>
    </Router>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and raves to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
          <Welcome name="Sara" name2="asd"/>
          <Welcome name="Cahal" />
        </header> */}
        <body>
          {/* <h1>Hello, world</h1> */}
          <ImageGallery 
            items={images}
            infinite={this.state.infinite}
            showBullets={this.state.showBullets}
            showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
            showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
            showThumbnails={this.state.showThumbnails}
            showIndex={this.state.showIndex}
            showNav={this.state.showNav}
            isRTL={this.state.isRTL}
            thumbnailPosition={this.state.thumbnailPosition}
            slideDuration={parseInt(this.state.slideDuration)}
            slideInterval={parseInt(this.state.slideInterval)}
            slideOnThumbnailOver={this.state.slideOnThumbnailOver}
            additionalClass="app-image-gallery"
            useWindowKeyDown={this.state.useWindowKeyDown}
          />;
        </body>
      </div>
    );
  }
}

export default App;
