import React, { Component } from 'react'
import './style/Tow.css'
import Search from './Search.js'


export default class App extends Component {

  constructor(){
    super();

    this.state = {
      current_location: null,
      loadingMap: true
    }
   
  }

  
  componentDidMount(){
    
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.setState({
          current_location: [position.coords.latitude, position.coords.longitude],
          loadingMap: false
        });
     })
    }else{
      console.log("geo-location was not allowed")
    }

  }


  render() {
   

    if(this.state.current_location){

    return (
      
      <div className="app">
       <div className="titlediv">

         <div className="title">
        <img className="conesimg" src={process.env.PUBLIC_URL + '/cone.png'} alt={"there was suposed to be a traffic cone here"} />
        <h1>Tower Helper</h1>
        <img className="conesimg" src={process.env.PUBLIC_URL + '/cone.png'} alt={"there was suposed to be a traffic cone here"}/>
        </div>
        <div className="gitlinks"> 
        <a><img style={{height: "40px", width: "40px"}} src={process.env.PUBLIC_URL +"../git-white.png"}/></a>
        <a><img style={{height: "40px", width: "40px"}} src={process.env.PUBLIC_URL +"../linkedin.ico"}/></a>
        </div>

        </div>
        <div className="commands">
        <Search className="searchpanel" center={{lat: this.state.current_location[0], lng: this.state.current_location[1]}}/>
          </div>
       
        <img className="barrier" src={process.env.PUBLIC_URL + '/barrier.png'}/>

        
      </div> 
     
    )}else{
      return(<div>No map</div>)
    }
  }
}