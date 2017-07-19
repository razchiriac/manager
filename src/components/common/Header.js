// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 60,
    backgroundColor: '#D5CDE5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'white'
  }
};

// Make the component available to other parts of the app
export { Header };
