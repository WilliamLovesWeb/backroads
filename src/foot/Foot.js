import { pageLinks } from '../data.js'
import { socialLinks } from '../data.js';
import './Foot.css'


function uppercaseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Foot(){
    return(
    <div className='Foot'>
        <div className='parentClassFoot'>
            <div className='classPageLinksFoot'>
                {pageLinks.map((pageLink) => {
                    return <a className='pageLinkFoot' href={pageLink.href}>{uppercaseFirstLetter(pageLink.text)}</a> 
                })}
            </div>
            <div className='classSocialLinksFoot'>
                {socialLinks.map((socialLink) => {
                    return <a className='socialLinkFoot' href={socialLink.href}><i className={socialLink.icon}></i></a> 
                })}
            </div>
            <div className='Sentence'>Copyright © BackRoads Travel Tours Company 2022. All Right Reserved</div>
        </div>
    </div>
    )
}
export default Foot;