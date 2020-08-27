//npm install react-navigation
//npm install react-navigation-stack
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from '../screens/searchScreen'
import DetailScreen from '../screens/detailScreen'


const Navigator = createStackNavigator({
  Search: SearchScreen,
  Detail: DetailScreen,
},
{
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Header Here',
    }
}
)

export default createAppContainer(Navigator)