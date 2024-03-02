import './App.css';
import Card from './Card';
import airplanes from './airplanes.json';

const plane = airplanes.planeInfo;

const App = () => {

  return (
    <div className="App">
      <div className="card-container">
      {
        plane.map(element => (
          <>
          <Card imagePath={element.imageFile} Model={element.description} Manufacturer={element.category} viewLink={element.link}/>
          </>
        ))
        }
      </div>
    
    </div>
  )
}

export default App