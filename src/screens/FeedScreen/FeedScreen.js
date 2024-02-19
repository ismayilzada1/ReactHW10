import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import SearchBox from "../../components/SearchBox"
import MessagesContainer from "./components/MessagesContainer"
import Layout from "../../Layout";
import PrivateRoute from "../../PrivateRoute";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from "@react-navigation/native";

const FeedScreen=() => {

    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            navigation.navigate('SignIn');
            const value = await AsyncStorage.getItem('token');
            console.log(value);
        } catch (error) {
            console.error('Error logging out:', error);
        }

    };


    return (
        <PrivateRoute children={
            <Layout children={
                <View style={styles.container}>


                    <View style={styles.SearchContainer}>
                        <SearchBox/>
                    </View>

                    <View style={styles.MessagesContainer}>
                        <MessagesContainer/>
                    </View>

                    <View style={styles.logoutButtonContainer}>
                       <TouchableOpacity  style={styles.logoutButton} onPress={handleLogout}>Logout</TouchableOpacity>
                    </View>

                </View>
            } title={"Feed"}></Layout>
        }>
        </PrivateRoute>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    flex1Container:{
        flex:1
    },
    SearchContainer:{
        flex:1,
        alignItems:"center"
    },
    MessagesContainer:{
        flex:8,
    },
    logoutButton:{
      backgroundColor:"green",
        borderRadius:4,
        color:"white",
        fontSize:18,
        fontFamily:"sans-serif",
        fontWeight:"600",
        padding:8

    },
    logoutButtonContainer: {
        justifyContent:"center",
        alignItems: 'flex-end',
        margin:5
    }

});

export default FeedScreen;