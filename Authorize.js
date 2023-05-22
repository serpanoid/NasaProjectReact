import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Linking } from 'react-native';
import { GlobalContext } from './GlobalContext';

const Authorize = ({ onSubmitted }) => {
  const [inputValue, setInputValue] = useState('');
  const { setGlobalVariable } = useContext(GlobalContext);

  const handleInputChange = (text) => {
    setInputValue(text);
    setGlobalVariable(text);
  };

  const handleSubmit = () => {
    if (inputValue !== '') {
      onSubmitted(true);
    }
    setInputValue('');
  };

  const handleOpenBrowser = () => {
    const url = 'https://api.nasa.gov/';
    Linking.openURL(url).catch((err) => console.error('Failed opening link:', err));
  };

  const handleLogout = () => {
    setInputValue('');
    onSubmitted(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Enter your API key"
        style={styles.textInput}
        placeholderTextColor="#999"
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Open in Browser" onPress={handleOpenBrowser} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#f1f1f1',
    width: '80%',
    textAlign: 'center',
    height: 50,
    color: '#666',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Authorize;
