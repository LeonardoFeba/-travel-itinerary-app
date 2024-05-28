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
  ContentView,
  ContainerScroll,
  ContentTitle,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Modal, StatusBar, ScrollView, View, Text } from "react-native";

import Slider from "@react-native-community/slider";

export default function Home() {
  // const [modalVisbile, setModalVisibile] = useState(false)

  // function onModal() {
  // 	return setModalVisibile(true)
  // }

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

      <ContentView>
        <ContainerScroll>
          <ContentTitle>Roteiro da sua viagem</ContentTitle>
        </ContainerScroll>
      </ContentView>

      {/* <Modal visible={modalVisbile}>
				<Text>OIIII</Text>
			</Modal> */}
    </PageContainer>
  );
}
