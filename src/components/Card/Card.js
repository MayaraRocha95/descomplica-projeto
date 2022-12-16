import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'


export const Card = ({image, title, total}) => {
  return (
    <CardBS className="bg-dark text-white">
      <CardBS.Img src={image} alt="Card image" />
      <CardBS.ImgOverlay>
        <Button variant="primary">
        Salvar <Badge bg="segundary">{total}</Badge>
        </Button>
        <CardBS.Text>Last updated 3 mins ago</CardBS.Text>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title>{title}</CardBS.Title>
      </CardBS.Body>
    </CardBS>
  );
}

