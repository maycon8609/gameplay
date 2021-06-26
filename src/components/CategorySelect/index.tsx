import React from "react";
import { ScrollView } from "react-native";

import { Category } from "../Category";
import { categories } from "../../utils/categories";

import styles from "./styles";

type CategorySelectProps = {
  categorySelected: string;
  hasCheckBox?: boolean;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({
  categorySelected,
  hasCheckBox = false,
  setCategory,
}: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
}
