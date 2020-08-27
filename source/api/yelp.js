//npm install axios
import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer VihV3Bubmc9B2J89XqGONc-76HS7jkeCqn8IZVlDupIieYovGCYHiwTk9-LMhG9vkDLJcoQj43lPNyEu4MSyJpdOsQ2-o6cIJ5JWd92ldnwFNFSgPUSFnvWFI9TcXnYx'
    }
})