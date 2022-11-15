import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';

function Cards(props) {

  // console.log(data);

  return (

    <>

      <Card style={{ width: '18rem', margin: '10px', height: '35rem' }} className="d-inline-flex">
        <Card.Img className="card-img-top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text style={{ minHeight: '30%' }}>
            {props.description}
          </Card.Text>
          
            <a href={props.lien}> <Button variant="primary" style={{margin:'10px'}}>En savoir plus</Button></a>
        </Card.Body>

      </Card>

    </>
  );
}



export default Cards;
