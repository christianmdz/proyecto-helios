import React from 'react'
import Card from 'react-bootstrap/Card';

export default function ShipCard({data}) {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Nombre: {data.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Flota: {data.afiliacion}</Card.Subtitle>
            <Card.Text>
              Motor: {data.motor}
            </Card.Text>
            <Card.Text>
              Tripulación: {data.tripulacion}
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      );
    }
