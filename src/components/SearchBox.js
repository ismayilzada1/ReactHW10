import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleChangeText = (text) => {
        setSearchValue(text);
    };

    return (
        <TextInput
            style={styles.search}
            placeholder="Search"
            value={searchValue}
            onChangeText={handleChangeText}
        />
    );
};

const styles = StyleSheet.create({
    search: {
        backgroundColor: "#F6F6F6",
        width: 343,
        height: 50,
        minHeight:50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        paddingLeft: 25
    }
});

export default SearchBox;
