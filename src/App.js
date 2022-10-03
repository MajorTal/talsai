import logo from './logo.svg';
import './App.css';
import ImageGallery from 'react-image-gallery';

function Welcome(props) {
  return <h1>Hello, {props.name}, {props.name2}</h1>;
}

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and raven to reload.
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
        <ImageGallery items={images} />;
      </header>
    </div>
  );
}

export default App;
