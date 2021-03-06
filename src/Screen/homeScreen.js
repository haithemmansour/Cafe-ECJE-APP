import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import { Header } from 'react-native-elements';

import Category from './Category';

const { height, width } = Dimensions.get('window');

export default class homeScreen extends Component {

   /// componentWillMount() {
     ///   this.startHeaderHeight = 80
     ///   if (Platform.OS == 'android') {
     ///       this.startHeaderHeight = 100 + StatusBar.currentHeight
     ///   }
  ///  }

    render() {
        return (
          
           <ImageBackground source={require('../assets/back.jpeg')} style={styles1.image}>
                    
                       <Header style={{ color: '#2A0F5B'} }
                        leftComponent={{ icon: 'menu', color: '#2A0F5B' }}
                        centerComponent={{ text: 'Café-Restaurant junior', style: { color: '#2A0F5B' } }}
                        rightComponent={{ icon: 'home', color: '#2A0F5B' }}
                      />
                        <View style={{ flex: 1, paddingTop: 20 ,alignContent :'center'}}>
                     

                            <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/1.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../assets/2.jpeg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../assets/3.jpeg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700', color: '#2A0F5B' }}>
                                    Visiter notre café 
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    Un lieu comfortable pour tous vos réunions

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/1.jpg')}
                                    />

                                </View>
                            </View>
                        </View>
                                       
            </ImageBackground>
            
        );
    }
}
 
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
        justifyContent: 'center'
    }
});