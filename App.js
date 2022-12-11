import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons'
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import UploadVideoScreen from './screens/UploadVideoScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import LibraryScreen from './screens/LibraryScreen';
import { Colors } from './constants/color';

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
            backgroundColor: Colors.black,
          },
          tabBarActiveTintColor: Colors.red,
          title: (
            <View style={styles.homeHeader}>
              <MaterialCommunityIcons
                name="youtube"
                size={30}
                color={Colors.red}
              />
              <Text
                style={{
                  marginHorizontal: 4,
                  fontSize: 20,
                }}
              >
                Youtube
              </Text>
            </View>
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                style={focused && styles.iconBorder}
                name="home"
                color={color}
                size={size}
              />
            ),

          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons
                style={focused && styles.iconBorder}
                name="explore"
                color={color}
                size={size}
              />
            ),
            // tabBarItemStyle: {
            //   borderBottomColor: "red",
            //   borderBottomWidth: 2,
            // },
          }}
        />
        <Tab.Screen
          name="Upload Video"
          component={UploadVideoScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                style={focused ? styles.roundIconFocussed : styles.icon}
                name="add"
                color={color}
                size={size}
              />
            ),
            tabBarItemStyle: {
              bottom: 30,
            },
          }}
        />
        <Tab.Screen
          name="Subcriptions"
          component={SubscriptionScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons
                style={focused && styles.iconBorder}
                name="subscriptions"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons
                style={focused && styles.iconBorder}
                name="video-library"
                color={color}
                size={size}
              />
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 50,
    elevation: 4,
  },
  iconBorder: {
    // borderBottomColor: Colors.red,
    borderBottomWidth: 2,
    padding: 4,
  },
  roundIconFocussed: {
    backgroundColor: Colors.red,
    color: Colors.white,
    padding: 8,
    borderRadius: 50,
    elevation: 4,
  },
  homeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
