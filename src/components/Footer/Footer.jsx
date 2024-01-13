import './Style.css'
const Footer = (props) =>{
    return(
        <>
            <footer>
                <h4 className='myfooter'>{props.description}</h4>
            </footer>
        </>
    )
}

export default Footer