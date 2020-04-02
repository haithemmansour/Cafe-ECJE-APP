import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Linking,
    ImageBackground
} from "react-native";
import { Button } from 'react-native-paper';

class Contact extends Component {
    render() {
        return (
           <ImageBackground source={require('../assets/back.jpeg')} style={styles1.image}>
            
            <View style={styles.container}>
            
               <Text style={{ fontSize: 24, fontWeight: '700'}}>
                                Contact
                  </Text> 
                
            </View>
            <View style={styles.container}>
            <Text style={{ fontSize: 18,top:-110, textAlign: 'center', fontWeight: '200'}}>
                                <Text style={{fontWeight: "bold"}}> Location</Text>
                                 {'\n'} Cite Ons Sakiet Ezzit Sfax 3018
                                 {'\n'} <Text style={{fontWeight: "bold"}}>Numero de tel : </Text>
                                {'\n'}<Text onPress={()=>{Linking.openURL('tel:50000000');}} style={styles.funcNavText}>50 000 000</Text>
                  </Text> 
                  </View>
                  <View style={styles.container}>
                 <Image
                         style={{ flex: 1, top : -130, height: 400, width: 400, borderColor: '#ffffff' }}
                            source={require('../assets/map_junior.png')}
                                    />
                  <Button icon="camera" mode="contained" onPress={() =>{ Linking.openURL('https://maps.google.com')}}>
                            Itinéraire
                  </Button>
             </View>

             
              </ImageBackground>
        );
    }
}
export default Contact;
const styles1 = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: null,
    height: null
  },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignContent: 'stretch',
    }
 
});