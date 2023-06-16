import './Services.css'

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

function Service(props){
    return(
    <div className={"Service"+props.id}>
        <div className='text'>
            <div className='titleService'><strong>{capitalizeWords(props.title)}</strong></div>
            <div className='textService'>{props.text}</div>
        </div>
        <div className='symbole'>
            <i className={props.icon}></i>
        </div>
        
    </div>
    )
}
export default Service;