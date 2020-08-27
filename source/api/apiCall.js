import { useEffect, useState } from 'react'
import Yelp from './yelp'

export default () => {

    const [results, setResults] = useState([])
    const [error, setError] = useState('')

    const searchApi = async (toSearch) => {
        try {
            const Response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: toSearch,
                    location: 'san jose',
                }
            })
            setResults(Response.data.businesses)
            setError('')
        } catch(err) {
            setResults([])
            setError('Something Went Wrong !!!')
        }
    }

    useEffect(() => {
        searchApi('pizza')
    },[])
 
    return [searchApi, results, error]

}