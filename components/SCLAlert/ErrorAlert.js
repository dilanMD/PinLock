import React, { Component } from "react";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert"

export default class ErrorAlert extends Component {

  render() {
    return (
      <SCLAlert
        theme="danger"
        show={false}
        title="Error"
        subtitle="Please enter the correct pin"
        onRequestClose={this.handleCloseModal}
      >
        <SCLAlertButton theme="danger" onPress={() => this.handleCloseModal()}>Close</SCLAlertButton>
      </SCLAlert>
    )
  }
}