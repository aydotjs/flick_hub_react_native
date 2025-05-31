import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

// TabIcon component for customizing each tab button
const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    // When tab is active, show highlighted background with icon and title
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }
  // When tab is inactive, show just the icon in a minimal style
  return (
    <View className="size-full  justify-center items-center rounded-full mt-4">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};

// Main layout component for setting up the bottom tab navigation
const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Hide default labels
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23", // Custom dark background
          borderRadius: 50, // Rounded tab bar
          marginHorizontal: 20, // Space on left and right
          marginBottom: 20, // Move tab bar up from bottom
          height: 52, // Height of tab bar
          position: "absolute", // Floating style
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.home} title="Home" />
            </>
          ),
        }}
      />

      {/* Search Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.search} title="Search" />
            </>
          ),
        }}
      />

      {/* Saved Tab */}
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.save} title="Saved" />
            </>
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.person} title="Profile" />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
