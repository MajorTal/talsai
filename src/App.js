import './App.css';
import ImageGallery from 'react-image-gallery';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
  useLocation,
} from "react-router-dom";
import { Share, Tweet, Timeline, Follow } from 'react-twitter-widgets'

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const domain = 'https://tal-private-zombie.s3.amazonaws.com/zombies/';
const number_of_images_per_page = 16;



// function OnbulletOnClick(item, itemIndex, currentIndex) {
//   console.log("hi");
// }



function GetImages(prefix){
  let images = [];

  for (let i in [...Array(number_of_images_per_page).keys()]) {
    images.push({
      original: domain + prefix + "/" + i + ".png",
      thumbnail: domain + prefix + "/" + i + "-thumb.png",
      // bulletOnClick: OnbulletOnClick,
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
    <div style={{'text-align': "-webkit-center"}}>
      <h2>Zombies are cool!</h2>
      <Tweet tweetId="1578104320683147265" />
    </div>
  );
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}


function Zombie() {
  // We can use the `useParams` hook here to access the dynamic pieces of the URL.
  let { id } = useParams();
  let items = GetImages(id);
  let query = useQuery();
  let number = query.get("number");
  if (isNumeric(number) && number < number_of_images_per_page){
    let item = [items.at(number)]
    return(
      <div className="App">
      <header className="App-header">
      <Share  options={{ size: "large", text: "Check out my Zombie!", via: "taltimes2"}} />
      </header>
      <div className="App-body">
        <ImageGallery 
          items={item} 
          thumbnailPosition={"top"} 
          autoplay={false}
          showThumbnails={false}
          onErrorImageURL="https://publicdomainvectors.org/photos/Zombie-Head.png"
          defaultImage={"https://publicdomainvectors.org/photos/Zombie-Head.png"}  
        />
      </div>
    </div>
    )
  }

  return (

    <div className="App">
        <header className="App-header">
        <Share url="https://taltal.im" options={{ size: "large", text: "Check out my Zombie!", via: "taltimes2"}} />
        <Follow username="taltimes2" options={{ size: "large"}}/>
        </header>
        <div className="App-body">
          <ImageGallery 
            items={items} 
            thumbnailPosition={"top"} 
            autoplay={true} 
            onErrorImageURL="https://publicdomainvectors.org/photos/Zombie-Head.png"
            defaultImage={"https://publicdomainvectors.org/photos/Zombie-Head.png"}  
          />
        </div>
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

// Todos:
// In case of 404 error
// Add caption here? https://stackoverflow.com/a/65165218/78234
// Link to specific image on page
// Bootstrap
// click on zombie in carousel
// different link in Twitter thread