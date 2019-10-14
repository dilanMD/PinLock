import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert"

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      pin: "",
      correctPin: "0000",
      successAlertShow: false,
      warningAlertShow: false
    }
  }

  async handleInput(num) {
    var pinLength = this.state.pin.length;
    if(pinLength < 4) {
      await this.setState({
        pin: this.state.pin + num
      })
    }
    // alert(this.state.pin)
    if(pinLength == 3) {
      if(this.state.pin == this.state.correctPin) {
        this.setState({successAlertShow:true})
      } else {
        this.setState({warningAlertShow:true})
      }
    }
  }

  handleDelete() {
    this.setState({
      pin: ""
    })
  }

  handleCloseModal() {
    this.setState({
      successAlertShow: false,
      warningAlertShow: false,
      pin: ""
    })
  }

  async resetPin() {
    var randomNumber = Math.floor(Math.random()*9999) + 1000;
    await this.setState({
      correctPin: randomNumber
    })
    alert("Your new Pin is " + this.state.correctPin)
  }

  render() {
    return (
      <View style={styles.container}>

        <SCLAlert
          theme="success"
          show={this.state.successAlertShow}
          title="Success"
          subtitle="You've successfully Logged In"
        >
          <SCLAlertButton theme="success" onPress={()=>this.handleCloseModal()}>Close</SCLAlertButton>
        </SCLAlert>

        <SCLAlert
          theme="danger"
          show={this.state.warningAlertShow}
          title="Error"
          subtitle="Please enter the correct pin"
        >
          <SCLAlertButton theme="danger" onPress={()=>this.handleCloseModal()}>Close</SCLAlertButton>
        </SCLAlert>
        
        <View style={styles.display}>
          <Text style={styles.displayFont}>{this.state.pin}</Text>
        </View>

        <View style={styles.numbersGrid}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.column} onPress={()=>this.handleInput(1)}>
              <Text style={styles.font}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.column} onPress={()=>this.handleInput(2)}>
              <Text style={styles.font}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.column} onPress={()=>this.handleInput(3)}>
              <Text style={styles.font}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.column} onPress={()=>this.handleInput(4)}>
              <Text style={styles.font}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.column} onPress={()=>this.handleInput(5)}>
              <Text style={styles.font}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.column} onPress={()=>this.handleInput(6)}>
              <Text style={styles.font}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.column} onPress={()=>this.handleInput(7)}>
              <Text style={styles.font}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.column} onPress={()=>this.handleInput(8)}>
              <Text style={styles.font}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.column} onPress={()=>this.handleInput(9)}>
              <Text style={styles.font}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.column}>
              <Text style={styles.font}>{ "   " }</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.column} onPress={()=>this.handleInput(0)}>
              <Text style={styles.font}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.column} onPress={()=>this.handleDelete()}>
              <Text style={styles.deleteFont}>C</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.forgotPin}>
          <Text style={styles.forgotPinText}>Forgot PIN?</Text>
          <TouchableOpacity onPress={()=>this.resetPin()}>
            <View>
              <Text>Press here to reset</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: "row",
    paddingBottom: 50
  },
  column: {
    paddingHorizontal: 50
  },
  display: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numbersGrid: {
    flex: 1.5,
  },
  font: {
    fontSize: 22
  },
  displayFont: {
    fontSize: 28,
    letterSpacing: 25
  },
  deleteFont: {
    color: '#dc3545',
    fontSize: 22
  },
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
