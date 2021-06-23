import React from "react";
import { View, Text } from "react-native";

import { Avatar } from "../Avatar";

import styles from "./styles";

type ProfileProps = {};

export function Profile({}: ProfileProps) {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/maycon8609.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Ola</Text>

          <Text style={styles.username}>Maycon</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
