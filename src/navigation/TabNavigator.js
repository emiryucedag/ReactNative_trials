import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/home";
import UsersScreen from "../screens/users";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsersCount(data.length));
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "UsersTab") {
            iconName = focused ? "people" : "people-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#f4511e",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ title: "Home" }}
      />

      <Tab.Screen
        name="UsersTab"
        component={UsersScreen}
        options={{
          title: "Users",
          // Dinamik badge
          tabBarBadge: usersCount > 0 ? usersCount : undefined,
        }}
      />
    </Tab.Navigator>
  );
}