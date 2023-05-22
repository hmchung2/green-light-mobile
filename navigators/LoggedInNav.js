import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNav from "./TabsNav";
import MessagesNav from "./MessagesNav";
import { createStackNavigator } from "@react-navigation/stack";

const Nav = createStackNavigator();

export default function LoggedInNav() {
  return (
    <Nav.Navigator>
      <Nav.Screen
        name="Tabs"
        options={{ headerShown: false }}
        // Pass MyTheme object as a prop to TabsNav component
        component={TabsNav}
      />
      <Nav.Screen
        name="Messages"
        options={{ headerShown: false }}
        component={MessagesNav}
      />
    </Nav.Navigator>
  );
}
