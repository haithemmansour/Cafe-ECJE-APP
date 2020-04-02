import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView
} from "react-native";

 import Category from './Category'

 
class Menu extends React.Component {
  render() {
    
    return (
       <ImageBackground source={require('../assets/back.jpeg')} style={styles1.image}>
      <View>
       <View style={styles.container}>
            
               <Text style={{ fontSize: 24, fontWeight: '700'}}>
                                Menu
                  </Text> 
                
            </View>
       <View style={{ height: 400, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/express.jpeg')}
                                        name="Express : 1 DT "
                                    />
                                    <Category imageUri={require('../assets/capucin.jpeg')}
                                        name="Capucin : 1.5 DT"
                                    />
                                    <Category imageUri={require('../assets/orange.jpeg')}
                                        name="Jus d'orange : 3 DT"
                                    />
                                </ScrollView>
                            </View>
                            </View>
      </ImageBackground>
    );
  }
}
export default Menu;
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
