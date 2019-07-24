import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PropTypes from "prop-types";

const SearchInput = props => {
  const [text, setText] = useState("");
  const { placeholder, onSubmit } = props;

  const handleChangeText = text => {
    setText(text);
  };

  const handleSubmitEditing = () => {
    if (!text) return;

    onSubmit(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        value={text}
        placeholder={placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 300,
    marginTop: 20,
    backgroundColor: "#666",
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textInput: {
    flex: 1,
    color: "#fff"
  }
});

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

SearchInput.defaultProps = {
  placeholder: ""
};

export default SearchInput;
