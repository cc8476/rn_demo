import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,Image,Text,Dimensions,StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={

            //data:require("./data.json")
        }

        


    }



    render() {


        const { width } = Dimensions.get('window');


        const styles = StyleSheet.create({
            container: {
              height: 200,
              width:width
            },
            wrapper: {
            
            },
            slide: {
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'transparent'
            },
            text: {
                color: '#fff',
                fontSize: 30,
                fontWeight: 'bold',
            },
            image: {
              width,
              height: 120,
              flex: 1
              }
          });


        return (

        
            <>
            <StatusBar />
            <SafeAreaView>



            <View style={styles.container}>
        <Swiper style={styles.wrapper} height={140}
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
          activeDot={<View style={{ backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
          paginationStyle={{
            bottom: -23, left: null, right: 10
          }} 
          autoplay = {true}
      >
          <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./assets/big.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./assets/big.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./assets/big.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./assets/big.jpg')} />
          </View>
        </Swiper>
      </View>

            </SafeAreaView>
          </>

            );
    }

    




}

export default App;

