import React, { useState } from "react";
import {
  FormLabel,
  PageContainer,
  SearchInput,
  StayingDays,
  Title,
  Form,
  ButtonText,
  SubmitButton,
  ContainerScroll,
  ContentTitle,
  ItineraryText,
  ContentScroll,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

import Slider from "@react-native-community/slider";

export default function Home() {
  return (
    <PageContainer>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="#F1F1F1"
      />
      <Title>Roteiro fácil</Title>
      <Form>
        <FormLabel>Cidade destino</FormLabel>
        <SearchInput placeholder="Ex: São Paulo,  SP"></SearchInput>
        <FormLabel>
          Tempo de estadia: <StayingDays>10</StayingDays> dias
        </FormLabel>
        <Slider
          minimumValue={1}
          maximumValue={7} // Número de dias máximo de estadia
          minimumTrackTintColor="#009688"
          maximumTrackTintColor="#000000"
        />
      </Form>
      <SubmitButton>
        <ButtonText> Gerar roteiro</ButtonText>
        <MaterialIcons
          name="travel-explore"
          size={24}
          color="#FFF"
        ></MaterialIcons>
      </SubmitButton>

      <ContainerScroll
        contentContainerStyle={{ paddingBottom: 24, marginTop: 4 }}
        showsVerticalScrollIndicator={false}
      >
        <ContentScroll>
          <ContentTitle>Roteiro de viagem 👇</ContentTitle>
          <ItineraryText>texto do roteiro</ItineraryText>
        </ContentScroll>
      </ContainerScroll>
    </PageContainer>
  );
}
