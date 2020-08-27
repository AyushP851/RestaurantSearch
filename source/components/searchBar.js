//npm install react-native-vector-icons --save

import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return (
        <View style={ styles.background }>
            <Icon name='search' size={40} color='#888' style={{ alignSelf: 'center' }}/>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search' 
                style={ styles.input }
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 15,
    },
    input: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 10,
    },
})

export default SearchBar