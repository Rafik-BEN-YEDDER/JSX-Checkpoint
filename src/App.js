import logo from './logo.svg';
import './App.css';
import './title.css'
import myImage from './image/src ninja.jpg'
function App() {
  return (
    <div className="App">
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
          <h1 className="title red">NINJA</h1>
          <br />
          <img src={myImage} />
          <br />
          <img src="/public ninja.jpg" />
        </div>
        <video width="320" height="240" controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
