import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class NumbersGrid extends Component<Props> {
  render() {
    return (
      <View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.column}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column}>
            <Text>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.column}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column}>
            <Text>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.column}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column}>
            <Text>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.column}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.column}>
            <Text>D</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingBottom: 35
  },
  column: {
    paddingHorizontal: 35
  }
});
