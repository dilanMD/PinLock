import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { handleInput, deletePin } from "../actions";

class NumbersGrid extends Component {
  handleInput = num => {
    this.props.handleInput(num)
    var pin = this.props.store.pin
    if (pin == "0000") {
      alert("OK")
    }
  }

  render() {
    return (
      <View style={styles.numbersGrid}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.column} onPress={() => this.handleInput(1)}>
            <Text style={styles.font}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => this.handleInput(2)}>
            <Text style={styles.font}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => this.handleInput(3)}>
            <Text style={styles.font}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.column} onPress={() => this.handleInput(4)}>
            <Text style={styles.font}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => this.handleInput(5)}>
            <Text style={styles.font}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => this.handleInput(6)}>
            <Text style={styles.font}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.column} onPress={() => this.handleInput(7)}>
            <Text style={styles.font}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => this.handleInput(8)}>
            <Text style={styles.font}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => this.handleInput(9)}>
            <Text style={styles.font}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.column}>
            <Text style={styles.font}>{"   "}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => this.handleInput(0)}>
            <Text style={styles.font}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => this.props.deletePin()}>
            <Text style={styles.deleteFont}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(NumbersGrid);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingBottom: 50
  },
  column: {
    paddingHorizontal: 50
  },
  numbersGrid: {
    flex: 1.5,
  },
  font: {
    fontSize: 22
  },
  deleteFont: {
    color: '#dc3545',
    fontSize: 22
  },
});
