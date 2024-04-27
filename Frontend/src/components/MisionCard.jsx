import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/card.css';

export default function MisionCard({data}) {
    return (
        <Card className='cards'>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{data.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Flota: {data.destino}</Card.Subtitle>
            <Card.Text>
              {data.descripcion}
            </Card.Text>
            <Card.Text>
              {data.duración}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      );
}
    
