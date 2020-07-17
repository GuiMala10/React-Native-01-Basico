import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';

const Calculos = () => {
    const [result, setResult] = useState('');
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const platform = Platform.OS;

    const handleCalculate = useCallback(() => {
        if (!firstNumber || !secondNumber) {
            platform === 'web' 
                ? alert('Informe os dois numeros')
                : Alert.alert('Erro', 'Informe os dois valores', [ { text: 'Voltar' } ])

            return;
        }

        setIsResultVisible(true);
        setResult(Number(firstNumber) + Number(secondNumber));
    }, [platform, firstNumber, secondNumber]);

    const handleClearInputs = useCallback(() => {
        setFirstNumber('');
        setSecondNumber('');
        setResult('');
        setIsResultVisible(false);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Somar</Text>
            <TextInput
                style={styles.input} 
                placeholder="Primeiro numero" 
                placeholderTextColor="#fff" 
                value={firstNumber}
                onChangeText={setFirstNumber}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input} 
                placeholder="Segundo numero" 
                placeholderTextColor="#fff" 
                value={secondNumber}
                onChangeText={setSecondNumber}
                keyboardType="numeric"
            />

            {isResultVisible && ( 
                <Text style={styles.result}>{result}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleCalculate}>
                <Text style={styles.buttonText}>Somar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleClearInputs}>
                <Text style={styles.buttonText}>Limpar</Text>
            </TouchableOpacity>
        </View>
    );
};

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
    title: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
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
    result: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
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
});

export default Calculos;