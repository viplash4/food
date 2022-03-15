import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import searchScreen from "./src/screens/searchScreen";
import resultsScreen from "./src/screens/resultsScreen";


const navigator = createStackNavigator({
    Search: searchScreen,
    Result: resultsScreen
  },{
    initialRouteName: 'Search',
    defaultNavigationOptions:{
      title: 'Business search'
    }
  });


export default createAppContainer(navigator);