import React from 'react'
import {Map} from './Map.js'
import {useEffect, useState} from 'react'
import TowerInfo from './TowerInfo.js'

export default function MapContainerHooked(props) {
    
    const removeDuplicates=(array)=>{
        if(array !== undefined && array !== []){

        let _temp;
        let len = array.length
        let x = []

        _temp = {
            phone: 0
        }

        for(let i=0; i<len; i++){
            if(array[i].phone !== _temp.phone){
                x.push(array[i])
                _temp=array[i]
            }
        }
        console.log(x)
        return x
        }
    }

    const [readyArray, setReady] = useState()
    const [selectedTower, setSelectedTower] = useState(0)

    function nextTower(e){
        e.preventDefault()
        console.log(selectedTower)
        console.log(readyArray)
        if(selectedTower<readyArray.readyArray.length){
            setSelectedTower(selectedTower + 1)
        }
        
    }
    function prevTower(e){
        e.preventDefault()
        console.log(selectedTower)
        if(selectedTower >= 1){
            setSelectedTower(selectedTower - 1)
        }
        
    }

    

    useEffect(() => {
        let a = removeDuplicates(props.sortedResults)
        setReady({readyArray: a})
        
    }, [props.sortedResults])
   
    console.log(selectedTower)

    if(props.center && readyArray !== []){

        return (
        
            <div >
                 <div className="map">
                 
                 <Map center={props.center} readyArray={readyArray} selectedTower={selectedTower}/>
                 </div>
                 <div className="buttonsdiv">
                 <button onClick={e=>prevTower(e)}>{"<< Prev"}</button>
                 <button onClick={e=>nextTower(e)}>{"Next >>"}</button>
                </div>
                <TowerInfo readyArray={readyArray} selectedTower={selectedTower}/>
            </div>
        )
    }else{
        return(<h1>Map loading...</h1>)
    }
    
}