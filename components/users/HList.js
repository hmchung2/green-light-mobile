import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import VUser from "./VUser";

const ListContainer = styled.View`
  margin-bottom: 40px;
`;

export const HListSeparator = styled.View`
  width: 20px;
`;

const ListTitle = styled.Text`
  color: ${(props) => props.theme.fontColor};
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 20px;
`;

export default function HList({ title, data, hLoadMore }) {
  const renderItem = ({ item: user }) => <VUser {...user} />;

  if (data.length === 0) {
    return null;
  }

  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <FlatList
        onEndReached={hLoadMore}
        onEndReachedThreshold={1}
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={HListSeparator}
        contentContainerStyle={{ paddingHorizontal: 30 }}
        keyExtractor={(item) => item.id + ""}
        renderItem={renderItem}
      />
    </ListContainer>
  );
}
