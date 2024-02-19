import React from 'react';
import {View,StyleSheet} from "react-native";
import Header from "./components/Header/Header"

const Layout = ({children,title}) => {
    return (
        <View style={styles.container}>
            <Header title={title}/>
            {children}
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    }
})

export default Layout;