import {GoogleMap, withScriptjs, withGoogleMap, DirectionsRenderer} from 'react-google-maps'
import React from 'react'
import { compose, withProps, lifecycle } from "recompose"


const key = process.env.REACT_APP_GOOGLE_MAP_KEY


export const Map = compose(withProps({
googleMapURL :`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&q=&key=${key}`,
loadingElement:<div className="mapprops"></div>,
containerElement:<div className="mapprops"></div>,
mapElement:<div className="mapprops"></div>,
}),
withScriptjs,
withGoogleMap,
lifecycle({
  componentWillUpdate(prevProps){
    console.log(this.props)
    if(prevProps !== this.props && this.props.readyArray.readyArray.length>0){
      const google = window.google;
      const DirectionsService = new google.maps.DirectionsService();
      
      DirectionsService.route({
        origin: this.props.center,
        destination: this.props.readyArray.readyArray[this.props.selectedTower].address,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  
  }
})
)((props)=>
<div>
<GoogleMap defaultZoom ={14} defaultCenter={props.center}>
{props.directions && <DirectionsRenderer directions={props.directions} />}
 
</GoogleMap>
 
 </div>
)