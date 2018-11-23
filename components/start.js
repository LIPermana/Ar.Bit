import React, {Component} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {Container, Header, Content, Button, Text} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class start extends Component {

  static navigationOptions = {
   header: null
  }

  render(){
    return(
      <Container style={forstyle.container}>
        <StatusBar
           backgroundColor="#ff5757"
           barStyle="light-content"
           hidden={true}
         />
        <Content style={forstyle.content}>
          <Grid>
            <Row style={forstyle.centered}>
              <Text style={forstyle.title}>Ar.<Text style={{color: '#FB7676', fontSize: 50}}>Bit</Text></Text>
            </Row>
            <Row style={forstyle.centered}>
              <Image source={require('../source/img/start.png')} style={forstyle.image}/>
            </Row>
            <Row style={forstyle.centered}>
              <Button
                style={forstyle.button}
                onPress={()=>this.props.navigation.navigate('Home')}
              >
                <Text>Get Started</Text>
              </Button>
            </Row>
          </Grid>
        </Content>
      </Container>
    )
  }
}

const forstyle = {
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  centered:{
    marginTop: 60,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title:{
    fontSize: 50,
    fontWeight: 'bold'
  },
  image:{
    width: 395,
    height: 285
  },
  button:{
    borderRadius: 5,
    padding: 85,
    width: 300,
    height: 55,
    backgroundColor: '#ff5757'
  }
}
