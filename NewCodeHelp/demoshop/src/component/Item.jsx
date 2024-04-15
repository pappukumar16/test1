import './Item'

function Item(props){

    let itemNiram = props.name;
    
    return(
        
       <div>
         <h1 className='nirma'>{itemNiram}</h1>
        {props.children}
       </div>
    )
}

export default Item;