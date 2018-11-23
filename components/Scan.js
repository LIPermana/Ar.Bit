'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  BackHandler
} from 'react-native';
import {Header, Left, Body, Right, Icon, Title} from 'native-base';
import { RNCamera } from 'react-native-camera';

export default class Camera extends Component {

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

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#FF5757"
           barStyle="light-content"
           hidden={false}
         />
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes)
            }}
        />
        <View style={styles.button}>
        <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14, backgroundColor:'#FF5757', width: 60, height: 60, borderRadius: 50}}></Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button:{
    flex: 0,
    flexDirection: 'row',
    width:100,
    height:100,
    backgroundColor:'transparent',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  capture: {
    flex: 0,
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});
