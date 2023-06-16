import './Head.css'
import logo from '../images/logo.svg'
import { pageLinks } from '../data.js'
import { socialLinks } from '../data.js';


function uppercaseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Head(){
    return (
        <div className='all'>                
            <div className='overcoatHead'>
                <div className='logo'>
                    <img src={logo} className='logoItem' alt='logo'/>
                </div> 
                <div className='pageLinksHead'>
                    {pageLinks.map((pageLink) => {
                        return <a className='pageLink' href={pageLink.href}>{uppercaseFirstLetter(pageLink.text)}</a> 
                    })}
                </div>
                <div className='classSocialLinksHead'>
                    {socialLinks.map((socialLink) => {
                        return <a className='socialLinkHead' href={socialLink.href}><i className={socialLink.icon}></i></a> 
                    })}
                </div>
            </div>
            <div className='undercoat'></div>
        </div> 
    );
}
export default Head;
