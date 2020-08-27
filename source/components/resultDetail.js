import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultDetail = ({ item }) => {
    return (
        <View>
            <Image source={{uri: item.image_url}} style={ styles.image } />
            <Text style={ styles.name }>{ item.name }</Text>
            <Text style={ styles.detail }>{ item.rating } Stars, { item.review_count } Reviews </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 8,
        marginLeft: 15,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        marginLeft: 15,
    },
    detail: {
        marginLeft: 15,
    },
})

export default ResultDetail