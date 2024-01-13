import Badge from 'react-bootstrap/Badge'

const Tags = (props) => {
    return(
        <>
            <Badge className='TagsBadge' bg={props.color}>{props.badge}</Badge>
        </>
    )
}
export default Tags