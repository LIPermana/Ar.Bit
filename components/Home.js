import React, {Component} from 'react';
import {View, Image, StatusBar, BackHandler, Alert} from 'react-native';
import {Container, Header, Content, Button, Text} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class start extends Component {

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
        this.exit();
        return true;
      } else {
        return false;
      }
  }

exit = () => {
  Alert.alert(
    'Exit',
    'Ingin menutup aplikasi ini ?',
    [
      {text: 'Batal', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => BackHandler.exitApp()},
    ],
    { cancelable: false }
  )
  return true;
}

  render(){
    return(
      <Container style={forstyle.container}>
        <StatusBar
           backgroundColor="#FF5757"
           barStyle="light-content"
           hidden={false}
         />
        <Content style={forstyle.content}>
          <Grid>
            <Row style={[forstyle.centered,{marginTop: 30}]}>
              <Col>
                <Button
                  style={forstyle.button}
                  onPress={()=>this.props.navigation.navigate('Scan')}
                >
                  <Image
                    source={require('../source/img/Scan.png')}
                    style={forstyle.bttnimg}
                  />
                  <Text>Scan</Text>
                </Button>
              </Col>
              <Col>
                <Button
                  style={forstyle.button}
                  onPress={()=>this.props.navigation.navigate('How')}
                >
                  <Image
                    source={require('../source/img/How.png')}
                    style={forstyle.bttnimg}
                  />
                  <Text>How To Use</Text>
                </Button>
              </Col>
            </Row>
            <Row style={forstyle.centered}>
              <Col>
                <Button
                  style={forstyle.button}
                  onPress={()=>this.props.navigation.navigate('About')}
                >
                  <Image
                    source={require('../source/img/About.png')}
                    style={forstyle.bttnimg}
                  />
                  <Text>About</Text>
                </Button>
              </Col>
              <Col>
                <Button
                  style={forstyle.button}
                  onPress={this.exit}
                >
                  <Image
                    source={require('../source/img/Exit.png')}
                    style={forstyle.bttnimg}
                  />
                  <Text>Exit</Text>
                </Button>
              </Col>
            </Row>
            <Row style={forstyle.centered}>
              <Image
                source={require('../source/img/Home.png')}
                style={forstyle.illustration}
              />
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 15,
    marginLeft: 15,
  },
  button:{
    width: 145,
    height: 190,
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ff5757'
  },
  bttnimg:{
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  illustration:{
    width: 250,
    height: 150
  }
}
