import './index.css';

import leoornella from './img/leo-ornel.jpeg';
import Image from 'react-bootstrap/Image';
import Confirm from './Confirm';
import Cadeau from './Cadeau';

import ListGroup from 'react-bootstrap/ListGroup';

import React from 'react';

function App() {
  return (
    <div>
      <>

        <NavBar />
        <Carousel/>
        <Cadeau/>
      </>
    </div>
  );
}


const NavBar = () => (
  <header className='navbar'>
      <div className='navbar__title navbar__item'>CEDRIC & ORNELLA</div>
      <div className='navbar__item'><a href='#story'>Programme</a></div>
      <div className='navbar__item'><a href='#cadeau'>Cadeaux</a></div>        
  </header>
);

const Carousel = () =>(
  <div className='row'>
     <div className='col-lg-6'>
        <Image thumbnail height={300} className='w-100 shadow cedric-ornel' src={leoornella} alt='leo et ornella'/>
    </div>

    <div className="col-lg-6">
      <div className="p-5 mt-4">
          <h2 className='titr'>Programme du Mariage </h2>
          <br/><br/>
          <ListGroup>
             <ListGroup.Item><b>10h30 : </b>Mariage civile à la Mairie d'Efoulan</ListGroup.Item><br/><br/>
             <ListGroup.Item><b>13h30 : </b>Eglise au Centre Catholique Universitaire à l'Emia</ListGroup.Item><br/><br/>
             <ListGroup.Item><b>16h00 : </b>Réception au foyer Balatchi à la montée chapelle obili<br/></ListGroup.Item>

          </ListGroup>

          
          
        </div>
    </div>
    </div>
);
export default App;
