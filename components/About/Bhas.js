import React, {Component} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {Container, Header, Left, Body, Right, Title, Content, Button, Text, Icon, Card, CardItem} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Bhas extends Component {

  static navigationOptions = {
   header: null
  }

  render(){
    return(
      <View>
        <Image
          source={require('../../source/img/Foto/Bhas.png')}
          style={forstyle.foto}
        />
        <Card style={forstyle.card}>
          <CardItem header>
            <Text>Bhaswara</Text>
          </CardItem>
          <CardItem>
            <Body style={{alignItems: 'center'}}>
              <Text>
                as
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>Illustrator</Text>
          </CardItem>
        </Card>
      </View>
    )
  }
}

const forstyle = {
  card:{
    width: 280,
    height: 150,
    borderRadius: 5,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30
  },
  foto:{
    width: 330,
    height: 410,
    borderRadius: 5
  }
}
