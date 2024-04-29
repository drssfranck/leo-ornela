import './index.css';

import Figure from 'react-bootstrap/Figure';
import leoornella from './img/leoetornella.jpg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

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
      <div className='navbar__title navbar__item'>CEDRIC & ORNELA</div>
      <div className='navbar__item'><a href='#story'>Notre Histoire</a></div>
      <div className='navbar__item'><a href='#story'>Programme</a></div>
      <div className='navbar__item'><a href='#cadeau'>Cadeaux</a></div>        
  </header>
);

const Carousel = () =>(
  <div className='row'>
    <div className='col-lg-6'>
        <img className='w-100 shadow' src={leoornella} alt='leo et ornella'/>
    </div>

  <div className="col-lg-6">
      <div className="p-5 mt-4">
          <h1 className="display-4">Bienvenu à notre mariage</h1>
          <p className="lead">Le mariage est une union conjugale contractuelle et/ou rituelle, à durée illimitée, déterminée ou indéterminée, reconnue et encadrée par une institution ...</p>
          <h3>Notre histoire</h3>
          <p className='lead'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod leo ac nulla rutrum, vitae semper diam tempus. Donec ut libero leo. Sed eget ligula vitae lorem aliquam tincidunt at quis risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit. Donec dui nulla, mattis eget aliquam vitae, vulputate eu magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean euismod bibendum laoreet.

Nulla vitae elit libero. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </p>
        </div>
    </div>
  </div>
);
var data = [
  {id:0, name:'ROBOT MULTIFONCTION', prix:1000,shop:'santa Lucia',img:require('./img/image/27.jpeg')},
  {id:1, name:'FER À REPASSER À VAPEUR ', prix:1000,shop:'santa Lucia',img:require('./img/image/1.jpeg')},
  {id:2, name:' MARMITES CHAUFFANTES', prix:1000,shop:'santa Lucia',img:require('./img/image/2.jpeg')},
  {id:3, name:' MARMITES CHAUFFANTES', prix:1000,shop:'santa Lucia',img:require('./img/image/3.jpeg')},
  {id:4, name:' JEUX DE PLATEAUX', prix:1000,shop:'santa Lucia',img:require('./img/image/4.jpeg')},
  {id:5, name:'PLANCHE À REPASSER', prix:1000,shop:'santa Lucia',img:require('./img/image/5.jpeg')},
  {id:6, name:'VEILLEUSE', prix:1000,shop:'santa Lucia',img:require('./img/image/6.jpeg')},
  {id:7, name:"02 JEUX D'ASSIETTES", prix:1000,shop:'santa Lucia',img:require('./img/image/7.jpeg')},
  {id:8, name:'VERRE MESUREUR', prix:1000,shop:'santa Lucia',img:require('./img/image/8.jpeg')},
  {id:9, name:' SALLE A MANGER', prix:1000,shop:'santa Lucia',img:require('./img/image/10.jpeg')},
  {id:10, name:'KIT PETIT DÉJEUNER', prix:1000,shop:'santa Lucia',img:require('./img/image/11.jpeg')},
  {id:11, name:' COUVERTS/ ENSEMBLE CUILLÈRE-FOURCHETTE-COUTEAU)', prix:1000,shop:'santa Lucia',img:require('./img/image/12.jpeg')},
  {id:12, name:' MICRO ONDES AVEC FOUR', prix:1000,shop:'santa Lucia',img:require('./img/image/13.jpeg')},
  {id:13, name:'06 FLÛTES À CHAMPAGNE', prix:1000,shop:'santa Lucia',img:require('./img/image/14.jpeg')},
  {id:14, name:'EXTRACTEUR DE JUS DE FRUITS', prix:1000,shop:'santa Lucia',img:require('./img/image/15.jpeg')},
  {id:15, name:'PLAQUE ÉLECTRIQUE CHAUFFANTE', prix:1000,shop:'santa Lucia',img:require('./img/image/16.jpeg')},
  {id:16, name:'ENSEMBLE CASSEROLES + POÊLES', prix:1000,shop:'santa Lucia',img:require('./img/image/17.jpeg')},
  {id:17, name:'FRITEUSE A 02 COMPARTIMENTS ', prix:1000,shop:'santa Lucia',img:require('./img/image/18.jpeg')},
  {id:18, name:'MOULIN À SEC ( POUR EPICES)', prix:1000,shop:'santa Lucia',img:require('./img/image/19.jpeg')},
  {id:19, name:'COUPE LÉGUMES', prix:1000,shop:'santa Lucia',img:require('./img/image/20.jpeg')},
  {id:20, name:'DISTRIBUTEUR DE BOISSONS', prix:1000,shop:'santa Lucia',img:require('./img/image/21.jpeg')},
  {id:21, name:'02 DISPOSITIFS APÉRO', prix:1000,shop:'santa Lucia',img:require('./img/image/22.jpeg')},
  {id:22, name:'BOUILLOIRE ÉLECTRIQUE', prix:1000,shop:'santa Lucia',img:require('./img/image/23.jpeg')},
  {id:23, name:'MOULES  A GATEAUX', prix:1000,shop:'santa Lucia',img:require('./img/image/24.jpeg')},
  {id:24, name:'COUPE LÉGUMES/ MANDOLINE', prix:1000,shop:'santa Lucia',img:require('./img/image/26.jpeg')},

]

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {data[props.cadeau].name}
          {data[props.cadeau].id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={data[props.cadeau].img} alt='' width={300} height={300}/>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function Cadeau(){
  const [modalShow, setModalShow] = React.useState(false)
  return(
    <div className='' id="cadeau">
      {
        data.map(mbe=>(
          <Button variant='text' onClick={() => setModalShow(true)}>
          <Figure className=''>
            <Figure.Image className='image-cadeau'
              alt="171x180"
              src={mbe.img}
              
            />
            <Figure.Caption>
                <p className='titre-cadeau'>
                  {mbe.name}
                </p>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    cadeau={mbe.id}
                  />
                
            </Figure.Caption>
          </Figure>
          </Button>
        ))
      }
    </div>
  )
}

export default App;
