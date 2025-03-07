import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import LocalVideos from '../src/screens/LocalVideos';
import OnlineVideos from '../src/screens/OnlineVideos';
import {RootStackParamList} from '../src/types/navigationTypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          const iconMap: Record<string, string> = {
            Videos: focused ? 'video' : 'video-outline',
            Live: focused ? 'movie-search' : 'movie-search-outline',
          };
          const iconName = iconMap[route.name] || 'help-circle';

          return (
            <Icon
              name={iconName}
              size={30}
              color={focused ? '#ea2379' : '#fff'}
            />
          );
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#888',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
          height: 60,
          paddingTop: 10,
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen name="Videos" component={LocalVideos} />
      <Tab.Screen name="Live" component={OnlineVideos} />
    </Tab.Navigator>
  );
};
