import Card from 'react-bootstrap/Card'
import Tags from '../Tags/Tags'
import './Style.css'

const MyCard = (props) => {
  return (
    <>
      <Card className='card'>
        <Card.Img className='img' src= {props.img} />
        <Card.Body> 
          <Card.Title className='cardtitle'>{props.title}</Card.Title>
          <Card.Text className='cardtext'>{props.text}</Card.Text>
          <Tags color={props.color} badge={props.badge}></ Tags>
        </Card.Body>
      </Card>
    </>
  )
}

export default MyCard