import React from 'react'

export default function TowerInfo(props) {
    const {readyArray} = props
    

    
    if(readyArray !== [] && readyArray !== undefined){
        if(readyArray.readyArray.length !== 0){
        return (
            <div className='infopanel'>
                <h2>Tower Details:</h2><img className="traffic-cone" src={process.env.PUBLIC_URL + '/traffic-cone.png'}/>
                <div className="labeled_data">
                <label>Title: </label><p>{readyArray.readyArray[props.selectedTower].title}</p>
                </div>
                <div className="labeled_data">
                <label>Adress: </label><p> {readyArray.readyArray[props.selectedTower].address}</p>
                </div>
                <div className="labeled_data">
               <p className="ph"> {readyArray.readyArray[props.selectedTower].phone}</p>
                </div>
            </div>
        )
    }
    return(
        <h3 className="loading">loading details...</h3>
    )
   
}else {
    return(
        <h3 className="loading">loading details...</h3>
    )
}
}