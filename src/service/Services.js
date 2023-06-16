import { services } from '../data';
import Service from './Service';
import './Services.css'

function Services(){
    return(
    <div className="Services" id='services'>
        <div className="titleServices"><strong><span id='our'>OUR</span> SERVICES</strong></div>
        <div className='itemsService'>
            {services.map((service)=>{
                return <Service icon={service.icon} id={service.id} text={service.text} title={service.title} />
            })}
        </div>
    </div>
    );
}
export default Services;