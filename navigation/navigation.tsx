import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/HomeScreen';
import VideosScreen from '../src/VideosScreen';
import OnlineVideos from '../src/OnlineVideos';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Videos"
          component={VideosScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Live"
          component={OnlineVideos}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
