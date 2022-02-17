import './App.css';
import Header from './Header'
import Hero from './Hero'
import data from './data.js'


function App() {
  const places = data.map(place => {
    return (
      <Hero
        key={place.id}
        place={place}
      />
    )

  })
  return (
    <div>
      <Header />
      {places}
    </div>
  );
}

export default App;
