import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CrewCard({tripulante}) {
    return (
        <Card className='cards'>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Nombre: {tripulante.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Rango: {tripulante.rol}</Card.Subtitle>
            <Card.Text>
              Campo: {tripulante.campo}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      );
    }
    
