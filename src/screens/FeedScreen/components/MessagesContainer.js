import React from 'react';
import {StyleSheet, View, ScrollView, Image,ImageBackground,FlatList} from 'react-native';
import MessageCard from "./MessageCard";
const MessagesContainer = () => {

    const messagesData = [
        {
            id:1,
            imageUrl: "https://drivesalez.site/assets/images/aboutUs/team-member2.jpg",
            header: "Ahmad Ahmadzada",
            date: "4m ago",
            text: "[DriveSalez CO-CEO & Co-Founder] Join Us",
        },
        {
            id:2,
            imageUrl: "https://drivesalez.site/assets/images/aboutUs/team-member1.jpeg",
            header: "Mahammad Ismayilzada",
            date: "9m ago",
            text: "[DriveSalez CO-CEO & Co-Founder] Join Us",
        },
        {
            id:3,
            imageUrl: "https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1713398400&v=beta&t=hZHC5A16SjIhx9ED0juSKXw25iVrfgPZevOtNsGfnaA",
            header: "Elvin Suleymanov",
            date: "4h ago",
            text: "Still working on chess project",
        },
        {
            id:4,
            imageUrl: "https://media.licdn.com/dms/image/D4E03AQHrt93lFtUE0g/profile-displayphoto-shrink_400_400/0/1676991664884?e=1712188800&v=beta&t=J241_SqVVXKJJx6v1JzFLW3kkXokvNtnneD23afoQ3E",
            header: "Mark Nikolov",
            date: "9h ago",
            text: "Come to Mark Restaurant",
        },
        {
            id:5,
            imageUrl: "https://fsx1.itstep.org/api/v1/files/PUXntlrTJL4l3MN3UFuopnUluWCYEpmw?inline=true&f=webp",
            header: "Little Elvin Suleymanov",
            date: "4y ago",
            text: "I just started working on my personal chess project",
        },
        ]

    const showMessageAlert = (header,message) => {
        setTimeout(() => {
            alert(`${header} \n${message}`);
        }, 100);
    };


    const Item = ({message}) => (
        <View>
            <MessageCard
                key={message?.id}
                imageUrl={message?.imageUrl}
                header={message?.header}
                date={message?.date}
                text={message?.text}
                onPress={() => showMessageAlert(message?.header,message?.text)}
            />
        </View>
    );

    return (
        <ImageBackground
            source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/190/503/desktop-wallpaper-tumblr-mountains-iphone-mountain-iphone-thumbnail.jpg' }}
            style={[styles.container,]}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.messagesContainer}>
                    <FlatList
                        data={messagesData}
                        renderItem={({item}) => <Item message={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>

            <View>
                <Image
                    style={styles.imageCard}
                    source={{ uri: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2022/Products/911-GT3-RS-Premiere/_BKOS6959_edit_V02_highres.jpeg/jcr:content/_BKOS6959_edit_V02_highres.jpeg" }}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    scrollContent: {
        flexGrow: 1,
    },
    messagesContainer: {
        flexDirection: 'column',
    },
    imageCard: {
        height: 170,
        backgroundColor: '#F0F0F0',
        margin: 10,
        borderRadius: 10,
    },
});

export default MessagesContainer;