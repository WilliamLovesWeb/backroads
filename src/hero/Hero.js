import Button from '../button/Button'
import './Hero.css'

function Hero(){
    const overcoatStyle = {
        height: '87vh',
        width: '100%',
        position: 'absolute',
        color: 'white',
        background: 'linear-gradient(to bottom, rgba(0, 247, 255, 0.4) , rgba(0, 0, 0, 0.9))',
        zIndex: 2,
        top: 0,
        left: 0,
    }

    const heroStyle= {
        height: '87vh',
        width: '100%',
        position : 'relative',
        scrollMarginTop: '13vh',
    }
    
    const fontStyle ={
        width: '100%',
        height: '100%',   
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
    }

    const fontH1Style = {
        fontSize: '8vh',
        marginBottom: 0,  
    }

    const fontPStyle = {
        fontSize: '3vh',
        marginBottom: 0,
    }
    
    const secondLine = {
        fontSize: '3vh',
        marginBottom: 0,
        marginTop: 0,
    }
    
    const buttonStyle = {
        margin: 0,
        marginTop: '3vh',
        padding: '15px',
        color: 'rgb(69, 168, 179)',
        backgroundColor: 'white',
        fontSize: '2.5vh',
        letterSpacing: '3px',
        paddingRight: '1vw',
        paddingLeft: '1vw',
        cursor: 'pointer',
    }
    
    return(
        <div className='Hero' style={heroStyle} id='home'>
            <div className='image'>
            </div>
            <div className='overcoat' style={overcoatStyle}>
                <div className='font' style={fontStyle}>
                    <h1 style={fontH1Style}>CONTINUE EXPLORING</h1>
                    <p style={fontPStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. vitae</p>
                    <p className='secondLine' style={secondLine}>explicabo debitis est autem dicta.</p>
                    <Button style={buttonStyle} content='EXPLORE TOURS' />
                </div>
            </div>
        </div>
    );
}
export default Hero;    
