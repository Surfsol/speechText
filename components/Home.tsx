import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';
import VoiceTest from './VoiceTest';

export default function Home() {
  const [speechText, setSpeechText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Speech Text</Text>
        <TextInput
          multiline
          style={styles.textInput}
          value={speechText}
          maxLength={500}
        />
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Pressable
            onPress={async () => {
              console.log('save');
            }}
            style={{
              backgroundColor: '#007AFF',
            }}
          >
            <Text>Saved</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#007AFF',
            }}
            onPress={() => {
              setSpeechText('');
            }}
          >
          <Text>'Clear'</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.voiceContainer}>
        <VoiceTest
          onSpeechEnd={(value) => {
            setSpeechText(value[0]);
          }}
          onSpeechStart={() => {
            setSpeechText('');
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  inputContainer: {
    height: '50%',
    width: '100%',
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  textInput: {
    padding: 10,
    borderColor: '#d1d5db',
    borderWidth: 1,
    height: 200,
    borderRadius: 5,
  },
  saveButton: {
    right: 0,
  },
  voiceContainer: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
