import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons'
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import UploadVideoScreen from './screens/UploadVideoScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import LibraryScreen from './screens/LibraryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            bottom: 20,
            // left:10,
            marginHorizontal: 10,
            borderRadius: 10,
            elevation: 6,
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons  name="explore" color={color} size={size} />
            ),
            tabBarItemStyle: {
              borderBottomColor: 'red',
              borderBottomWidth: 2,
            }
          }}
        />
        <Tab.Screen
          name="Upload Video"
          component={UploadVideoScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons style={styles.icon} name="add" color={color} size={size} />
            ),
            tabBarItemStyle: {
              bottom:30,
              
            },
          }}
        />
        <Tab.Screen
          name="Subcriptions"
          component={SubscriptionScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="subscriptions" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="video-library" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: 'white',
    padding:6,
    borderRadius: 50,
    elevation:4
  }
});
