import './App.css';
import ImageGallery from 'react-image-gallery';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";


const domain = 'https://tal-private-zombie.s3.amazonaws.com/zombies/';
const number_of_images_per_page = 16;


function GetImages(prefix){
  let images = [];

  for (let i in [...Array(number_of_images_per_page).keys()]) {
    images.push({
      original: domain + prefix + "/" + i + ".png",
      thumbnail: domain + prefix + "/" + i + "-thumb.png",
    })
  };
  return images;  
};

function Home() {
  return <h2>Zombies are cool!</h2>;
}


function Zombie() {
  // We can use the `useParams` hook here to access the dynamic pieces of the URL.
  let { id } = useParams();
  let items = GetImages(id);
  console.log(items);

  return (
    <div>
    <ImageGallery items={items} />
  </div>
  );
}


class App extends React.Component {

  componentDidMount(){
    document.title = "Zombies"
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Routes>
              <Route path="/zombies/:id" element={<Zombie />} />
              <Route exact path="/" element={<Home/>}/>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
