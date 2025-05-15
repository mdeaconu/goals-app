import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./GoalItem.style";
import PropTypes from "prop-types";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

GoalItem.propTypes = {
  onDeleteItem: PropTypes.func,
  id: PropTypes.number,
  text: PropTypes.string,
};

export default GoalItem;
