import Button from '../button/Button'
import './About.css'

function About(){
    const buttonStyle = {
        marginLeft: '3%',
        color: 'white',
        backgroundColor: 'rgb(69, 168, 179)',
        fontSize: '15px',
        letterSpacing: '3px',
        cursor: 'pointer',
        width: '145px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const aboutStyle= {
        height: '80vh',
        width: '100%',
        overflowY: 'hidden',
        position: 'relative',
        scrollMarginTop: '13vh',
    }

    return(
        <div className="About" id='about' style={aboutStyle}>
            <div className="title"><strong><span id='aboutFont'>ABOUT</span> US</strong></div>
            <div className='bottom'>
                <div className='left'>
                    <div className='square'>
                        <div className='divPictureBeach'></div>
                    </div>
                </div>
                <div className='right'>
                    <div className='titleRight'><strong>Explore The Difference</strong></div>
                    <div className='paragraph'>
                        <div className='line1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam</div>
                        <div className='line2'>harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</div>
                    </div>
                    <div className='paragraph'>
                        <div className='line1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam</div>
                        <div className='line2'>harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</div>
                    </div>
                    <Button style= {buttonStyle} content='READ MORE' />
                </div>
            </div>
        </div>
    );
}
export default About;