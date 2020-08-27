import React from 'react' 
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import ResultDetail from '../components/resultDetail'

const ResultList = ({ title, result, navigation }) => {

    if(!result.length) {
        return null
    }

    return (
        <View style={ styles.container }>
            <Text style={ styles.title } >{ title }</Text>
            <FlatList 
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                data={ result }
                keyExtractor={(result) => result.id }
                renderItem={({ item }) => 
                    <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id }) }>
                        <ResultDetail item={ item } />
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
})

export default ResultList