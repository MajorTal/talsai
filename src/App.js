import logo from './logo.svg';
import './App.css';
import ImageGallery from 'react-image-gallery';
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}, {props.name2}</h1>;
}

const images = [
  {
    original: 'https://tal-private-zombie.s3.amazonaws.com/zombies-Appelboy7-zombie.png',
    thumbnail: 'https://tal-private-zombie.s3.amazonaws.com/zombies-Appelboy7-zombie.png',
  },
  {
    original: 'https://tal-private-zombie.s3.amazonaws.com/zombies-lilahav-zombie.png',
    thumbnail: 'https://tal-private-zombie.s3.amazonaws.com/zombies-lilahav-zombie.png',
  },
  {
    original: 'https://tal-private-zombie.s3.amazonaws.com/zombies-EdenLevov-zombie.png',
    thumbnail: 'https://tal-private-zombie.s3.amazonaws.com/zombies-EdenLevov-zombie.png',
  },
  {
    original: 'https://tal-private-zombie.s3.amazonaws.com/zombies-nuchem_green-zombie.png',
    thumbnail: 'https://tal-private-zombie.s3.amazonaws.com/zombies-nuchem_green-zombie.png',
  },
];

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
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'bottom',
      showVideo: {},
      useWindowKeyDown: true,
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
          <h1>Hello, world</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
          <Welcome name="Sara" name2="asd"/>
          <Welcome name="Cahal" />
        </header>
        <body>
          <ImageGallery items={images} />;
        </body>
      </div>
    );
  }
}

export default App;
