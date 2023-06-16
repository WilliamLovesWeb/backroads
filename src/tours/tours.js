import { tours } from '../data';
import T  from './t';
import './tours.css';

function Tours(){
    const toursStyle = {
        minHeight: '1000px',
        height: '120vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        scrollMarginTop: '13vh',
    }
    return(
    <div className="Tours" id='tours' style={toursStyle}>
        <div className="titleTours"><strong><span id='featured'>FEATURED</span> TOURS</strong></div>
        <div class='items'>
            <div className='itemsTours'>
                {tours.map((Tour) =>{
                    return <T tour={Tour} key={Tour.id} />
                })}
            </div>
        </div>
    </div>
    )
}
export default Tours;