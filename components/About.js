import React, {Component} from 'react';
import {View, Image, StatusBar, Slider, StyleSheet, BackHandler} from 'react-native';
import {Container, Header, Left, Body, Right, Title, Content, Button, Text, Icon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';

import Bhas from './About/Bhas';
import Lul from './About/Lulu';
import Rityo from './About/Rityo';
import Siti from './About/Siti';

var styles = {
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default class About extends Component {

  static navigationOptions = {
   header: null
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    if (this.props.navigation.state) {
        this.props.navigation.navigate('Home');
       return true;
      } else {
        return false;
      }
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Header noShadow style={{backgroundColor: '#fff'}}>
          <Left>
            <Icon
              style={{color: '#000'}}
              name='arrow-back'
              onPress={()=>this.props.navigation.navigate('Home')}
            />
          </Left>
          <Body>
            <Title style={{color: '#000'}}>About</Title>
          </Body>
          <Right/>
        </Header>
        <StatusBar
           backgroundColor="#FF5757"
           barStyle="light-content"
           hidden={false}
         />
        <Swiper
          style={styles.wrapper}
          showsButtons
          dot={<View style={{backgroundColor: '#E6E6E6', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 5}} />}
          activeDot={<View style={{backgroundColor: '#FF5757', width: 14, height: 14, borderRadius: 7, marginLeft: 7, marginRight: 5}} />}
          loop={false}
          showsButtons={false}
        >

          <View style={styles.slide}>
            <Bhas/>
          </View>
          <View style={styles.slide}>
            <Lul/>
          </View>
          <View style={styles.slide}>
            <Rityo/>
          </View>
          <View style={styles.slide}>
            <Siti/>
          </View>
      </Swiper>
    </View>
    )
  }
}
