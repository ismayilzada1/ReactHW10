import {  Text, TextInput, View,TouchableOpacity } from "react-native";
import styles from './styles';
import React, { useState } from 'react';
import Layout from "../../Layout";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const SignIn = async () => {
        if (email.trim() !== '' && password.trim() !== '') {
            try {
                await AsyncStorage.setItem('token', JSON.stringify('T1O2K3E4N'));
                navigation.navigate('Feed');
            } catch (error) {
                console.log(error);
            }
        }
    };



    return (
            <Layout children={
                <View style={styles.container}>


                    <View style={styles.form}>

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            placeholderTextColor="#BDBDBD"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor="#BDBDBD"
                            secureTextEntry={true}
                        />

                    </View>


                    <View style={styles.bottomContainer}>
                        <TouchableOpacity style={styles.signUpButton} onPress={SignIn}>
                            <Text style={styles.signUpButtonText}>Login</Text>
                        </TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot your password?</Text>
                    </View>


                </View>
            } title={"Sign In"}></Layout>
    );
};

export default SignInScreen;
