import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";

class Display extends Component {
  render() {
    return (
      <View style={styles.display}>
        <Text style={styles.displayFont}>{this.props.store.pin}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    store: state
  };
};

export default connect(mapStateToProps)(Display);

const styles = StyleSheet.create({
  display: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayFont: {
    fontSize: 28,
    letterSpacing: 25
  },
});
