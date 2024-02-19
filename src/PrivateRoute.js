import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const PrivateRoute = ({ children }) => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            try {
                const value = await AsyncStorage.getItem('token');
                if (value !== null) {
                    console.log(value);
                } else {
                    navigation.navigate('SignIn');
                }
            } catch (error) {
                console.log(error);
            }
        };

        checkToken();
    }, [navigation]);

    return children;
};

export default PrivateRoute;
