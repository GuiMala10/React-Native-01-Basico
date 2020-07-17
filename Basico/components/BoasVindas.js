import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, Alert } from 'react-native';

const BoasVindas = ({ greeting }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [isGreetingVisible, setIsGreetingVisible] = useState(false);
    const platform = Platform.OS;

    const showGreeting = () => {
        if (!nome || !sobrenome) {
            platform === 'web' 
                ? alert('Informe seu nome e sobrenome')
                : Alert.alert('Erro', 'Informe os dois valores', [ { text: 'Voltar' } ])

            return;
        }

        setIsGreetingVisible(true);
    }

    const clearFields = () => {
        setIsGreetingVisible(false);
        setNome('');
        setSobrenome('');
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder="Nome" 
                placeholderTextColor="#fff" 
                onChangeText={setNome}
                value={nome}
            />

            <TextInput 
                style={styles.input}
                placeholder="Sobrenome" 
                placeholderTextColor="#fff" 
                value={sobrenome}
                onChangeText={setSobrenome}
            />

            {isGreetingVisible && (
                <Text style={styles.greeting}>Olá {nome} {sobrenome}, {greeting}. Seja bem vindo!</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={showGreeting}>
                <Text style={styles.buttonText}>Ok</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={clearFields}>
                <Text style={styles.buttonText}>Limpar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7159c1',
    width: 300,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#f8f8f8',
    padding: 10,
    margin: 10,
    elevation: 3,
  },
  input: {
    width: '100%',
    height: 36,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: '#7159c1',
    color: '#fff',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7159c1',
  },
  greeting: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '200',
    marginVertical: 10
  }
});

export default BoasVindas;