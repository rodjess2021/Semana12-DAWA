import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [buscarPelicula, setBuscarPelicula] = useState("")
  const baseURL = "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json"

  const traerData = async () => {
    
    const res = await axios.get(baseURL);
    const fullData = res.data.entries;
    setData(fullData);
    
    console.log(fullData);
  };

  useEffect(() => {
    traerData();

  }, []);
  return (
    <div className={styles.grid_container}> 
      <h1>Listado de Peliculas:</h1>
      <div className={styles.grid}>
        {data?.map((data, i) => (
          <div key={i} className={styles}>
            
          </div>
        ))}
      </div>
    </div>

  )

}

export default App
