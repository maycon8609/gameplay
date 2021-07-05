import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Member } from "../../components/Member";
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListDivider } from "../../components/ListDivider";

import BannerImg from "../../assets/banner.png";
import styles from "./styles";

import { theme } from "../../global/styles/theme";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Maycon 01",
      avatar_url: "https://github.com/maycon8609.png",
      status: "online",
    },
    {
      id: "2",
      username: "Maycon 02",
      avatar_url: "https://github.com/maycon8609.png",
      status: "offline",
    },
    {
      id: "3",
      username: "Maycon 03",
      avatar_url: "https://github.com/maycon8609.png",
      status: "online",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar a challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
