import React, {Component} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {Container, Header, Left, Body, Right, Title, Content, Button, Text, Icon, Card, CardItem} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Siti extends Component {

  static navigationOptions = {
   header: null
  }

  render(){
    return(
      <Card style={forstyle.card}>
        <CardItem header>
          <Text>Siti</Text>
        </CardItem>
        <CardItem>
          <Body style={{alignItems: 'center'}}>
            <Text>
              as
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>UI/UX Designer</Text>
        </CardItem>
      </Card>
    )
  }
}

const forstyle = {
  card:{
    width: 280,
    height: 150,
    borderRadius: 5,
    alignItems: 'center'
  }
}
