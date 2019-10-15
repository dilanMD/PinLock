import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { resetPin } from "../actions";

class ForgotPin extends Component {
  render() {
    return (
      <View style={styles.forgotPin}>
        <Text style={styles.forgotPinText}>Forgot PIN?</Text>
        <TouchableOpacity onPress={() => this.props.resetPin()}>
          <View>
            <Text>Press here to reset</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pin: state.pin,
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetPin: () => dispatch(resetPin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPin);

const styles = StyleSheet.create({
  forgotPin: {
    flex: 0.5,
    alignItems: 'center'
  },
  forgotPinText: {
    color: '#dc3545',
    fontSize: 12,
    paddingBottom: 5
  }
});