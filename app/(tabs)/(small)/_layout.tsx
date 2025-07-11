import { Stack } from "expo-router";

import React from "react";
import { TouchableOpacity } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Small",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => console.log("Small header button pressed")}
            >
              <IconSymbol
                size={24}
                name="star.fill"
                color={Colors[colorScheme ?? "light"].text}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
