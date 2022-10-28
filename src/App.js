import React, {useState, useEffect} from 'react'
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from './Menu';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import DetailSite from './pages/DetailSite';
import axios from 'axios';


const CardTurist = ({id, image_url_1, name, description}) => {
  const navigate = useNavigate();
  const onClickCard = () => navigate(`/site/${id}`);

  return(
    <div style={{ alignItems: 'center', cursor: 'pointer', marginBottom: '40px', width: '50%', display: 'flex', flexDirection: 'column', fontFamily: 'Playfair Display'}} onClick={() => onClickCard()}>
      <img style={{ objectFit: 'cover',width: '80%', height: '180px', marginRight: '15px', borderRadius: '10px'}} src={image_url_1} />
      <div style={{ margin: '0px 0'}}>
        <h3
          style={{
            color: '#a47449',
            fontSize: '26px',
            color: '#a47449',
            letterSpacing: '0',
            lineHeight: 'normal',
            textTransform: 'uppercase',
            textAlign: 'center'
          }}>{name}</h3>
        <p style={{ margin: '0 10%'}}>{description}</p>
      </div>
    </div>
  )
}

const HomePage = () => {
  let Carousel = require('react-responsive-carousel').Carousel;
  const [attractions, setAttractions] = useState([])

  useEffect(() => {
    axios.get('https://us-central1-nodevs.cloudfunctions.net/fastifyFunction/attractions')
      .then(function ({ data: { payload }}) {
        setAttractions(payload)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  },[])
  const data = [
    {
      img: 'https://sorprendete.pe/wp-content/uploads/2021/11/NOTA-MANCORA-02.jpg',
      title: 'Mancora',
      description: 'Esta es una playa'
    },
    {
      img: 'https://sorprendete.pe/wp-content/uploads/2021/11/NOTA-MANCORA-02.jpg',
      title: 'Mancora',
      description: 'Esta es una playa'
    },
    {
      img: 'https://sorprendete.pe/wp-content/uploads/2021/11/NOTA-MANCORA-02.jpg',
      title: 'Mancora',
      description: 'Esta es una playa'
    },
    {
      img: 'https://sorprendete.pe/wp-content/uploads/2021/11/NOTA-MANCORA-02.jpg',
      title: 'Mancora',
      description: 'Esta es una playa'
    }
  ]
  return(
    <>
      <section style={{padding: '0% 0%', maxHeight:'700px'}}>
        <Carousel style={{ height: '550px'}} showThumbs={false} showArrows={true} onChange={() => console.log('change')} onClickItem={() => console.log('click')} onClickThumb={() => console.log('thumb')}>
          <div>
            <img style={{ objectFit: 'cover'}} width="100%" height="700px" src="https://www.peru.travel/Contenido/Atractivo/Imagen/en/128/1.1/Principal/cusco-historical-center.jpg" />
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>
      </section>
      <section style={{ marginTop: '20px', display: 'flex', padding: '0px 15%', flexWrap: 'wrap', marginBottom: '55px'}}>
        <h2 
        style={{
          fontFamily: 'Playfair Display',
          textAlign: 'center',
          width: '100%',
          marginBottom: '20px',
          marginTop: '10px',
          fontWeight: '500',
          fontStyle: 'normal',
          fontSize: '36px',
          color: '#a47449',
          letterSpacing: '0',
          lineeight: 'normal',
          textTransform: 'uppercase'
        }}
          >lugares turísticos mas conocidos</h2>
          <p style={{
            margin: 0,
            fontFamily: "Montserrat",
            fontWeight: '300',
            fontStyle: 'normal',
            fontSize: '24px',
            color: '#B7B4B4',
            letterSpacing: '0',
            lineHeight: 'normal',
            textTransform: 'none',
            width: '100%',
            textAlign: 'center',
            }}
          >Vive momentos de aventura y placer sin alejarte de la capital</p>
        <div style={{ display: 'flex', padding: '10px 15%', flexWrap: 'wrap', marginTop: '25px'}}>
          {
            attractions.map((el) => <CardTurist {...el} />)
          }
        </div>
      </section>
    </>
  )
}


const App = () => {

  return (
    <Router>
      <div className="App">
        <Menu />
        <div >
          <Routes>
            <Route path="/" exact element={<HomePage />}/>
            <Route path="/site/:id" element={<DetailSite />}/>
          </Routes>
        </div>
        <footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
