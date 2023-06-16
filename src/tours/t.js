import './tours.css'


function uppercaseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      // Capitalize the first letter of the word and concatenate with the remaining characters
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    // Join the capitalized words back into a string
    const capitalizedString = capitalizedWords.join(' ');
  
    return capitalizedString;
  }

function T(props){
    const { image, date, title, info, location, cost, duration } = props.tour;
    return(
    <div className='Tour'>
        <div className='imageTour' style={{ backgroundImage: 'url('+image+')'}}>
            <div className='dateTour'>{uppercaseFirstLetter(date)}</div>
        </div>
        <div className='legend'>
            <div className='titleLegend'><strong>{title}</strong></div>
            <div className='infoLegend'>{info}</div>
            <div className='bottomTours'>
                <div className='location'><i class='fas fa-map fa-fw'></i>{capitalizeWords(location)}</div>
                <div className='cost'>From ${cost}</div>
                <div className='duration'>{duration} Days</div>
            </div>
        </div>
    </div>
    )
}
export default T;