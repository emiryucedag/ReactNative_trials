
import { Button } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import HomeScreen from './src/screens/home';
import UsersScreen from './src/screens/users';
import UserDetail from './src/screens/UserDetail';
import HeaderLogo from './src/components/HeaderLogo';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Users') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f4511e',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Users" component={UsersScreen} options={{tabBarBadge: 3}}/>
    </Tab.Navigator>
  );
}

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerStyle: { backgroundColor: '#f4511e' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' },
  },
  screens: {
    Tabs: {
      screen: HomeTabs,
      options: {
        title: 'Ana Sayfa',
        headerShown: true,
        headerRight: () => (
          <Button onPress={() => alert('This is a button!')} title="INFO" color={"white"}/>
        ),
        headerTitle: (props) => <HeaderLogo {...props} />,
      },
    },
    UserDetail: {
      screen: UserDetail,
    },
  },
  initialRouteName: 'Tabs',
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
