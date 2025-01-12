import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          title: "Nature Meditate",
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="flower-tulip" size={24} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          title: "Affirmations",
          tabBarLabel: "Affirmation",
          tabBarIcon: ({ color }) => {
            return (
              <Entypo name="open-book" size={24} color={color} />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
