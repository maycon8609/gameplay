import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";

import { Load } from "../../components/Load";
import { ListDivider } from "../../components/ListDivider";
import { Guild, GuildProps } from "../../components/Guild";

import { api } from "../../services/api";

import styles from "./style";

type GuildsProps = {
  handleGuildSelect: (guildSelect: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const { data } = await api.get('/users/@me/guilds');

    setGuilds(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <Load /> : (
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
      )}
    </View>
  );
}
