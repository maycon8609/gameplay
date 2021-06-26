import React from "react";
import { View, FlatList } from "react-native";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { GuildProps } from "../../components/Appointment";

import styles from "./style";

type GuildsProps = {
  handleGuildSelect: (guildSelect: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
