import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ListScreen = function(){

    const myFemaleFriends = [
        "Vibhuti",
        "Aradhna",
        "Sakshi",
        "Arushi",
        "Vipra"
    ];

    const myMaleFriends = [
        {
            name: "Pratyush",
            key:"1"
        },
        {
            name: "Sarthak",
            key:"2"
        },
        {
            name: "Nishant",
            key:"3"
        },
        {
            name: "Priyank",
            key:"4"
        }
    ];

    return(
        <View>
            <Text>My List Component</Text>

            <FlatList
            horizontal
            data={myMaleFriends} renderItem={({item, index}) => {
                return <Text>{index + 1}) {item.name}</Text>
            }}  />

            <FlatList
            keyExtractor={(friend) => {
                return friend;
            }}
            data={myFemaleFriends} renderItem={({item, index}) => {
                return <Text style={myStyle.myText}>{index + 1}. {item}</Text>
            }}  />
            
        </View>
    );
};

const myStyle = StyleSheet.create({
    myText:{
        marginVertical: 100 
    }
})

export default ListScreen;