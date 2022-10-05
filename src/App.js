import './App.css';
import ImageGallery from 'react-image-gallery';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link
} from "react-router-dom";
import { Share, Tweet, Timeline } from 'react-twitter-widgets'


const domain = 'https://tal-private-zombie.s3.amazonaws.com/zombies/';
const number_of_images_per_page = 16;


function GetImages(prefix){
  let images = [];

  for (let i in [...Array(number_of_images_per_page).keys()]) {
    images.push({
      original: domain + prefix + "/" + i + ".png",
      thumbnail: domain + prefix + "/" + i + "-thumb.png",
      originalTitle: "asd",
    })
  };
  return images;  
};

function Home() {
  return (
    <div>
      <h2>ברוכים הבאים לבית החדש שלי</h2>
      <ul>
          <li>
            <Link to="/zombies">Zombies!</Link>
          </li>
      </ul>
      <Timeline
        dataSource={{ sourceType: "profile", screenName: "taltimes2" }}
        options={{ width: "400", }}
      />
    </div>
  );
}

function Zombies() {
  return (
    <div>
      <h2>Zombies are cool!</h2>
      <Tweet tweetId="1577372692604403713" />
    </div>
  );
}




function Zombie() {
  // We can use the `useParams` hook here to access the dynamic pieces of the URL.
  let { id } = useParams();
  let items = GetImages(id);
  console.log(items);

  return (
    <div>
      <Share url="https://talsai.com" options={{ size: "large", text: "Check out my Zombies!" }} />
      <ImageGallery items={items} autoplay={true} onErrorImageURL="https://publicdomainvectors.org/photos/Zombie-Head.png"/>
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
              <Route exact path="/zombies" element={<Zombies/>}/>
              <Route exact path="/" element={<Home/>}/>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

// Todo: Twitter button
// Todo: in case of error
// Todo: add caption here? https://stackoverflow.com/a/65165218/78234
