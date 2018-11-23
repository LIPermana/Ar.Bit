import React, {Component} from 'react';
import {View, Image, StatusBar, BackHandler} from 'react-native';
import {Container, Header, Left, Body, Right, Title, Content, Button, Text, Icon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class How extends Component {

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
      <Container style={forstyle.container}>
        <Header noShadow style={{backgroundColor: '#fff'}}>
          <Left>
            <Icon
              style={{color: '#000'}}
              name='arrow-back'
              onPress={()=>this.props.navigation.navigate('Home')}
            />
          </Left>
          <Body>
            <Title style={{color: '#000'}}>How To Use</Title>
          </Body>
          <Right/>
        </Header>
        <StatusBar
           backgroundColor="#FF5757"
           barStyle="light-content"
           hidden={false}
         />
        <Content style={forstyle.content}>
          <Grid>
            <Row style={forstyle.row}>
              <Text>1. Tekan Tombol "Scan"</Text>
            </Row>
            <Row style={[forstyle.centered,forstyle.row]}>
              <Button
                style={forstyle.button}
              >
                <Image
                  source={require('../source/img/Scan.png')}
                  style={forstyle.bttnimg}
                />
                <Text>Scan</Text>
              </Button>
            </Row>
            <Row style={forstyle.row}>
              <Text>2. Deteksi Marker</Text>
            </Row>
            <Row style={[forstyle.centered,forstyle.row]}>
                <Image
                  source={require('../source/img/Deteksi.png')}
                  style={forstyle.deteksi}
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
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  row: {
    margin: 5,
    marginLeft: 20
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
  deteksi:{
    width: 150,
    height: 225
  }
}
