import React, {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Header } from 'react-native-elements';


import Component1 from './app/components/Component1/Component1';


export default class myapp extends Component{ 
    render () {
      return (
        <View>
              <Component1 message="hello world" />

   
          </View>
      );
    }

 
}

AppRegistry.registerComponent('myapp', ()=> myapp);