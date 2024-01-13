import './Style.css'
const Header = (props) => {
    return(
        <>
            <header>
                <h1 className='header-title' >{props.title}</h1>
            </header>
        </>
    )
}

export default Header