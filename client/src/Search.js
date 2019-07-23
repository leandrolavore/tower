import React, { Component } from 'react'

import MapContainerHooked from './MapContainerHooked';
require('dotenv').config()

const key = process.env.REACT_APP_GOOLE_MAP_KEY

export default class Search extends Component {

    constructor(props){
        super(props)

        this.state = {
            loading: false,
            results: [],
            sortedResults:[]
           
        }
        this.fillResults = this.fillResults.bind(this)
    }
    fillResults(result){
        const{results} = this.state
      
        results.push(result)
        let resultsCopy = results.slice()
        let x = resultsCopy.sort(function compareFunction(a, b){
            return a.title > b.title
        })
     
        let y = x.sort(function compareFunction(a, b){
            return a.value - b.value
        })
        this.setState({sortedResults: y})
    }


    componentDidMount(){
       
        
        this.setState({loading: true})
        fetch('/towers',{mode: 'no-cors'})
        .then(res=>res.json())
        .then((data)=>{
            
            const cleanResults = data.data.filter(dir =>dir.address !== "no address available")
        
            cleanResults.map((result)=>{
            
            fetch("https://cors-anywhere.herokuapp.com/"+`https://maps.googleapis.com/maps/api/directions/json?origin=${this.props.center.lat},${this.props.center.lng}&destination=${result.title}+${result.address}&key=${key}`) 
                .then(res=>res.json())
                .then((data,x)=>{
                    if(data.routes[0] !== undefined){
                        x= data.routes[0].legs[0].distance.value
                        result = {
                            ...result,
                            value: x
                            }
                            this.fillResults(result)
                        }
                    })
                    
            })
            

        })
      
             
               
    }

    

    render() {
        
        return (
            <div>
            <MapContainerHooked center= {this.props.center} sortedResults={this.state.sortedResults}></MapContainerHooked>
            </div>
        )
    }
}