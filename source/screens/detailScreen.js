import React, { useState, useEffect} from 'react'
import { Text, StyleSheet, Image, FlatList } from 'react-native'
import Yelp from '../api/yelp'

const DetailScreen = ({ navigation }) => {
    
    const [res, setRes] = useState(null)
    const id = navigation.getParam('id')
    const getResut = async (id) => {
        const Response = await Yelp.get(`/${id}`)  
        setRes(Response.data)
    }
    useEffect(() => { getResut(id) }, [])

    if(!res) {
        return null
    }

    return (
        <FlatList 
            data={ res.photos }
            keyExtractor={ photo => photo }
            renderItem={({ photo }) => {
                return(
                    <Image source={{ uri: photo }} style={{ width: 250, height: 120 }}/>
                )
            }}
        />
    )
}

const syles = StyleSheet.create({})

export default DetailScreen