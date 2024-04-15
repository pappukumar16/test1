import './UseDate.css'

function UseDate(props){
    let day = props.day;
    let month = props.month;
    let year = props.year;
    
    return(
      <div className="para">
         <span>{day}</span>
         <span>{month}</span>
         <span>{year}</span>
      </div>
     
    )
}

export default UseDate