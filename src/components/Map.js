import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'

import MapView, { PROVIDER_GOOGLE,} from 'react-native-maps'; 

import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_API_KEY} from "@env";
import { mapStyle } from './globals/mapStyles';
import { colors } from './globals/styles';

export default class Map extends Component {

    constructor(){
      super()
      this.state = {
        destination: {
          coords: {
            lat: null,
            lng: null
          }
        },
        origin: {

          coords: {
            lat: null,
            lng: null
          }
        }
        }
      
        this._map = React.createRef(35)
    }
    
    componentDidUpdate(){
      setTimeout(()=>{
        if(this.props.destination.coords.lat !== null){
          this._map.current.fitToCoordinates(
            [{
              latitude: this_map.props.origin.coords.lat,
              latitude: this_map.props.origin.coords.lng

            }, {
              latitude: this_map.props.destination.coords.lat,
              latitude: this_map.props.destin.coords.lng
            }],{
              edgePadding:{top:450,right:50,left:50,bottom:350},
              animated:true
            }
          )
        }
      },500)
   }

    render() {
        return (
            <View>
                <MapView
                    provider ={PROVIDER_GOOGLE}
                    style = {styles.map}
                    customMapStyle ={mapStyle}
                    ref = {this._map}
                        >
                     { this.props.origin.coords.lat != null &&   
                        <MapView.Marker coordinate = {this.props.origin.coords} anchor = {{x:0.5,y:0.5}} >
                            <Image 
                                source ={require('../../assets/images/location.png')}
                                style ={styles.markerOrigin2}
                                resizeMode ="cover"
                            />
                        </MapView.Marker>
                     }
                     { this.props.destination.coords.lat != null &&   
                        <MapView.Marker coordinate = {this.props.destination.coords} anchor = {{x:0.5,y:0.5}} >
                            <Image 
                                source ={require('../../assets/images/location.png')}
                                style ={styles.markerDestination}
                                resizeMode ="cover"
                            />
                        </MapView.Marker>
                     }
                    {this.props.destination.coords.lat !== null &&
                        <MapViewDirections 
                          origin={this.props.origin.coords}
                          destination={this.props.destination.coords}
                          apikey={GOOGLE_MAP_API_KEY}
                          strokeWidth={4}
                          strokeColor={colors.black}
                        />
                    } 
                </MapView> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
   map: {
        height:"100%",
         width:"100%"
        },

        
          markerWrapOrigin: {
           //  alignItems: "center",
            // justifyContent: "center",
              width:40,
             height:20,
            // marginTop:0
            },
            markerOrigin: {
               width: 16,
               height: 16,
               borderRadius:8
            },
      
            destination: {
               width:20,
              height:20,
              backgroundColor:colors.black,
              alignItems:"center",
              justifyContent:"center"
             },
   
             view1: {
               width:7,
              height:7,
              backgroundColor:colors.white
             },
             markerDestination: {
              width: 16,
              height: 16,
              
             },
             
             markerOrigin2: {
               width: 20,
               height:20,
               borderRadius:10
              },
   
       car:{
           paddingTop:0,
           width: 40,
           height: 20,
          },
   
          view2:{
           position:"absolute",
           top:10,
           right:12,
           backgroundColor:colors.white,
           height:40,
           width:180,
           borderRadius:20,
           justifyContent:"center",
           alignItems:"center",
           marginTop:2, 
           zIndex: 8
           
         },    
    
   view3:{ flexDirection:"row",
   alignItems:"center",
   //marginRight:15,
   //backgroundColor:"white",
   //paddingHorizontal:2,
   paddingVertical:2,
   //borderRadius:20
   },
   
   view4:{
       position:"absolute",
       top:50,
       left:12,
       backgroundColor:colors.white,
       height:40,
       width:140,
       borderRadius:20,
       justifyContent:"center",
       alignItems:"center",
       marginTop:2, 
       zIndex: 8
       
     }, 
   
     location: {
       width: 20,
       height: 20,
       borderRadius:9,
       backgroundColor:colors.black,
       alignItems:"center",
       justifyContent:"center"
       
       }, 
       
   view9:{width:6,
     height:6,
     borderRadius:4,
     backgroundColor:"white"
   }     
})
