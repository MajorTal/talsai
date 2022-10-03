// import logo from './logo.svg';
import './App.css';
import ImageGallery from 'react-image-gallery';
import React from 'react';

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
  })
};

console.log(images);

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
      thumbnailPosition: 'top',
      showVideo: {},
      useWindowKeyDown: true,
    };
  }
  render() {
    return (
      <div className="App">
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
          <h1>Hello, world</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
          <Welcome name="Sara" name2="asd"/>
          <Welcome name="Cahal" />
        </header> */}
        <body>
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
