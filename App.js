
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import First from './src/screens/First'

const navigator = createStackNavigator(
  {
    First : {
      screen : First,
      navigationOptions :{
        header : null
    }},
  },
  {
    initialRouteName: 'First', 
  }
);


export default createAppContainer(navigator);
 