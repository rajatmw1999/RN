import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail title="GOT" imageSource={require('../../assets/got.jpg')}/>
            <ImageDetail title="Friends" imageSource={require('../../assets/friends.jpg')}/>
            <ImageDetail title="Office" imageSource={require('../../assets/office.jpg')}/>
            <ImageDetail title="Lucifer" imageSource={require('../../assets/lucifer.jpg')}/>
        </View>
    )
};

export default ImageScreen;