import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const MessageCard = (props) => {
    const { imageUrl, header, date, text,onPress } = props;

    return (
        <>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.messageCard}>
                <View style={styles.avatar}>
                    <Image source={{ uri: imageUrl }} style={styles.messageAvatar} />
                </View>
                <View style={styles.messageContainer}>
                    <View style={styles.messageHeaderAndTime}>
                        <Text style={styles.messageHeader}>{header}</Text>
                        <Text style={styles.messageDate}>{date}</Text>
                    </View>
                    <View style={styles.messageText}>{text}</View>
                </View>
            </View>
                </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    messageCard: {
        flex: 1,
        minHeight: 77,
        maxHeight: 77,
        marginHorizontal: 10,
        marginVertical: 4,
        flexDirection: "row",
    },
    avatar: {
        flex: 1,
    },
    messageContainer: {
        flex: 4,
        flexDirection: "column",
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    messageAvatar: {
        flex: 1,
        borderRadius: 15,
        height: 50,
        margin:5
    },
    messageText: {
        styleName: "UI - 14 Regular",
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "17px",
        letterSpacing: "0em",
        textAlign: "left",
        marginTop: 5
    },
    messageHeaderAndTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    messageHeader: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 19,
        letterSpacing: 0,
        textAlign: "left"
    },
    messageDate: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 17,
        letterSpacing: 0,
        color: "#BDBDBD"
    }
});

export default MessageCard;
