 import { Card } from '../../components/Card/Card';
 import { ModalCard } from '../../components/Modal/Modal';
 import Row from 'react-bootstrap/Row';
 import Container from 'react-bootstrap/Container';
 import Col from 'react-bootstrap/Col';


export const HomePage = () => {
  return(
    <div >
      <ModalCard  
      open={true} 
      title="Salvar Pin"
      controls={[
        {
          label: 'Criar pasta',
          variant: 'primary',
          OnClick: () => {
            console.log('Clicou!!!!!!!')
          }
          
        },
        {
          label: 'Fechar',
          variant: 'secondary',
          OnClick: () => {
            console.log('Clicou!!!!!!!')
          }
          
        }

      ]}
      >
        <p>Curtiu os gatos ao ar livre?</p>
      </ModalCard>
    <Container fluid>
      <Row>
        <Col xs={10} md={3}> <Card title="Gata ao ar livre"
        image="https://i.pinimg.com/564x/07/29/a1/0729a1978ac9dd0810a98b4c017c10ef.jpg"
         total={0}
         />
        </Col>
        <Col xs={12} md={3}> <Card title="Gato ao ar livre"
         image="https://i.pinimg.com/564x/cc/f5/af/ccf5af11219a174ea5a0acd54615716a.jpg"
         total={0}
         />
        </Col>
        <Col xs={10} md={3}> <Card title="Gato ao ar livre"
        image="https://i.pinimg.com/564x/aa/4f/bb/aa4fbba6af9ea73a99c7967fe0b02677.jpg"
         total={0}
         />
        </Col>
        <Col xs={10} md={3}> <Card title="Gato ao ar livre"
        image="https://i.pinimg.com/564x/20/37/17/2037176b77aff0e9dd2671a0944cbf33.jpg"
         total={0}
         />
        </Col>
        
      </Row>
    </Container>
    </div>
  )
}