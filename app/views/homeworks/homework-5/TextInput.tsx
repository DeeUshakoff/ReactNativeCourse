import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import Button from '@components/Button.tsx';

export const TextInputExample1 = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.exampleContainer}>
      <Text style={{marginVertical: 16, textAlign: 'center'}}>{name}</Text>
      <TextInput
        textAlign={'center'}
        style={styles.outlineContainer}
        onChangeText={text => setName(text)}
      />
    </View>
  );
};

export const TextInputExample2 = () => {
  const [name, setName] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  return (
    <View style={styles.exampleContainer}>
      <Text style={{textAlign: 'center'}}>{displayValue}</Text>
      <TextInput
        textAlign={'center'}
        style={styles.outlineContainer}
        onChangeText={text => setName(text)}
      />
      <Button
        onPress={() => {
          setDisplayValue(name);
        }}
        title={'Press'}
      />
    </View>
  );
};

export const TextInputExample3 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <View style={[styles.container]}>
      {isLoggedIn ? (
        <Text style={styles.welcomeText}>Welcome</Text>
      ) : (
        <>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TextInput
            style={styles.outlineContainer}
            placeholder="Login - admin"
            textAlign={'center'}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.outlineContainer}
            placeholder="Password - password"
            textAlign={'center'}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Войти" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  outlineContainer: {
    padding: 8,
    width: '100%',
    alignContent: 'center',
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'gray',
  },
  exampleContainer: {
    gap: 8,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
});
