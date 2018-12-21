import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ActivityInicator} from 'react-native';
import Weather from './components/Weather';

class App extends Component{
  state = {
    isLoaded: false
  };
  
  //로딩 뷰 15번 줄
  //  {isLoaded ? null : (  ---- 참이면 null, 거짓이면 : 뒤 실행
  render(){
    const {isLoaded} = this.state;
    return(
        <View style={styles.container}>
          {isLoaded ? null : ( 
          <Weather/>
          )}
        </View>
    )
  }
}

const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:"skyblue", 
      },
      loading: {
        flex:1,
        backgroundColor:"#c8c8c8",
        justifyContent:"flex-end",
        paddingLeft: 25,
      },
      loadingText:{
        fontSize: 38,
        marginBottom: 100,
      },
      
  
    })

export default App;