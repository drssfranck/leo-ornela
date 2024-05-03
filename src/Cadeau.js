import Figure from 'react-bootstrap/Figure';
import Badge from 'react-bootstrap/Badge';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { useRef } from 'react';

import { useState } from 'react';
var data = [
    {id:'0', name:'ROBOT MULTIFONCTION', prix:1000,shop:'santa Lucia',img:require('./img/image/27.jpeg')},
    {id:'1', name:'FER À REPASSER À VAPEUR ', prix:1000,shop:'santa Lucia',img:require('./img/image/1.jpeg')},
    {id:'2', name:' MARMITES CHAUFFANTES', prix:1000,shop:'santa Lucia',img:require('./img/image/2.jpeg')},
    {id:'3', name:' MARMITES CHAUFFANTES', prix:1000,shop:'santa Lucia',img:require('./img/image/3.jpeg')},
    {id:'4', name:' JEUX DE PLATEAUX', prix:1000,shop:'santa Lucia',img:require('./img/image/4.jpeg')},
    {id:'5', name:'PLANCHE À REPASSER', prix:1000,shop:'santa Lucia',img:require('./img/image/5.jpeg')},
    {id:'6', name:'VEILLEUSE', prix:1000,shop:'santa Lucia',img:require('./img/image/6.jpeg')},
    {id:'7', name:"02 JEUX D'ASSIETTES", prix:1000,shop:'santa Lucia',img:require('./img/image/7.jpeg')},
    {id:'8', name:'VERRE MESUREUR', prix:1000,shop:'santa Lucia',img:require('./img/image/8.jpeg')},
    {id:'9', name:' SALLE A MANGER', prix:1000,shop:'santa Lucia',img:require('./img/image/10.jpeg')},
    {id:'10', name:'KIT PETIT DÉJEUNER', prix:1000,shop:'santa Lucia',img:require('./img/image/11.jpeg')},
    {id:'11', name:' COUVERTS/ ENSEMBLE CUILLÈRE-FOURCHETTE-COUTEAU)', prix:1000,shop:'santa Lucia',img:require('./img/image/12.jpeg')},
    {id:'12', name:' MICRO ONDES AVEC FOUR', prix:1000,shop:'santa Lucia',img:require('./img/image/13.jpeg')},
    {id:'13', name:'06 FLÛTES À CHAMPAGNE', prix:1000,shop:'santa Lucia',img:require('./img/image/14.jpeg')},
    {id:'14', name:'EXTRACTEUR DE JUS DE FRUITS', prix:1000,shop:'santa Lucia',img:require('./img/image/15.jpeg')},
    {id:'15', name:'PLAQUE ÉLECTRIQUE CHAUFFANTE', prix:1000,shop:'santa Lucia',img:require('./img/image/16.jpeg')},
    {id:'16', name:'ENSEMBLE CASSEROLES + POÊLES', prix:1000,shop:'santa Lucia',img:require('./img/image/17.jpeg')},
    {id:'17', name:'FRITEUSE A 02 COMPARTIMENTS ', prix:1000,shop:'santa Lucia',img:require('./img/image/18.jpeg')},
    {id:'18', name:'MOULIN À SEC ( POUR EPICES)', prix:1000,shop:'santa Lucia',img:require('./img/image/19.jpeg')},
    {id:'19', name:'COUPE LÉGUMES', prix:1000,shop:'santa Lucia',img:require('./img/image/20.jpeg')},
    {id:'20', name:'DISTRIBUTEUR DE BOISSONS', prix:1000,shop:'santa Lucia',img:require('./img/image/21.jpeg')},
    {id:'21', name:'02 DISPOSITIFS APÉRO', prix:1000,shop:'santa Lucia',img:require('./img/image/22.jpeg')},
    {id:'22', name:'BOUILLOIRE ÉLECTRIQUE', prix:1000,shop:'santa Lucia',img:require('./img/image/23.jpeg')},
    {id:'23', name:'MOULES  A GATEAUX', prix:1000,shop:'santa Lucia',img:require('./img/image/24.jpeg')},
    {id:'24', name:'COUPE LÉGUMES/ MANDOLINE', prix:1000,shop:'santa Lucia',img:require('./img/image/26.jpeg')},
  
  ]
  
  
  
  
function Cadeau(){


        const [show, setShow] = useState(false);
        var [index, setIndex]= useState(0);
        const handleClose = () => {setShow(false);};
        const handleShow = () => {setShow(true);};
        const handleValidate = () =>{
          handleClose();
          const pconfir = window.confirm("Confirmer votre choix");
          if(pconfir){
            let para = itemE.current[index];
            let pc = itemEls.current[index];
            para.style.visibility = 'visible';
            pc.style.backgroundColor = "lime";
            pc.setAttribute("disabled", "");
            
          }
        }
        const itemEls = useRef({})
        const itemE = useRef({})
        const handleConfirm = (element) =>{
          setIndex(element);
          let x = itemEls.current[element];
          if (x) {
            handleShow()
          } else {
            handleClose();
          }
        };
        
          

        

    return(
      
      <div className=''>
        <h1 className='text-center'>Liste des cadeaux </h1>
        
        <div className='container'>
        {
          data.map(mbe=>(
          <Button variant="link" key={mbe.id}  id={mbe.id} onClick={() =>handleConfirm(mbe.id)} ref={(element) => itemEls.current[mbe.id] = element}>
            <Figure disabled className='maiva'>
              
              <Figure.Image className='image-cadeau'
                alt="171x180"
                src={mbe.img}
                
              />
               <Badge bg="warning" id={mbe.id+'mbe'} className='mbeselec' ref={(element) => itemE.current[mbe.id] = element}  text="dark"> Cadeau déjà selectioné</Badge>
              <Figure.Caption>
                  <p className='titre-cadeau'>
                    {mbe.name}
                  </p>
              </Figure.Caption>
            </Figure>
            </Button>
          ))
        }
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{data[index].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={data[index].img} className='phto-finale' />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                retour
              </Button>
              <Button variant="primary" className='btnsubmit' onClick={handleValidate}  >
                Offrir le cadeau
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    )
  }

  export default Cadeau;