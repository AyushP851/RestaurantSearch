import React, { useState, useEffect } from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/searchBar'
import ResultList from '../components/resultList'
import ApiCall from '../api/apiCall'

const SearchScreen = ({ navigation }) => {

    const [searchApi, results, error] = ApiCall()
    const [term, setTerm] = useState('')

    const filterResult = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <View style={styles.container }>
                <SearchBar 
                    term={term} 
                    onTermChange={(newTerm) => setTerm(newTerm)} 
                    onTermSubmit={() => searchApi({term})}    
                />
                { error ? <Text style={styles.error}>{error}</Text> : null }
                <ScrollView>
                    <ResultList 
                        result={ filterResult('$') } 
                        title='Cost Effective' 
                        navigation={ navigation }
                    />
                    <ResultList 
                        result={ filterResult('$$') } 
                        title='Bit Pricier' 
                        navigation={ navigation }
                    />
                    <ResultList 
                        result={ filterResult('$$$') } 
                        title='Big Spender' 
                        navigation={ navigation }
                    />
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    error: {
        color: 'red',
        alignSelf: 'flex-end',
        marginRight: 25,
    },
})

export default SearchScreen