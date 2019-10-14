import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class Display extends Component<Props> {
  render() {
    return (
      <View style={styles.green}>
          <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    display: {
        backgroundColor: "green"
    }
});
