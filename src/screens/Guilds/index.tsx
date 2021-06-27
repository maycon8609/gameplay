import React from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

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
    {
      id: "2",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "3",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "4",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "5",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "6",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "7",
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
        ListHeaderComponent={() => <ListDivider isCentered />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 70, paddingTop: 70 }}
      />
    </View>
  );
}
