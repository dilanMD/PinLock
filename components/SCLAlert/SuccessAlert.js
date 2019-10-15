import React, { Component } from "react";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert"
import { connect } from "react-redux";
import { handleInput, deletePin } from "../../actions";

class SuccessAlert extends Component {
  async componentDidMount() {
    var pin = await this.props.store.pin
    var correctPin = await this.props.store.correctPin
    var pinLength = await pin.length
    if (await pinLength == 3) {
      if (await pin == correctPin) {
        await alert("OK")
      }
    }
  }

  render() {
    return (
      <SCLAlert
        theme="success"
        show={this.props.store.successAlertShow}
        title="Success"
        subtitle="You've successfully Logged In"
        onRequestClose={this.handleCloseModal}
      >
        <SCLAlertButton theme="success" onPress={() => this.handleCloseModal()}>Close</SCLAlertButton>
      </SCLAlert>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    store: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (payload) => dispatch(handleInput(payload)),
    deletePin: () => dispatch(deletePin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessAlert)