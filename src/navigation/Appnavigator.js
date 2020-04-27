import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Filters from '../screens/Filters';

const Stack = createStackNavigator({
  Home: Home,
  Filters: Filters
});

export default NavigationContainer(Stack);