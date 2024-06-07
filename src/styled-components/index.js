import React from "react";
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
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Keyboard } from "react-native";

import Slider from "@react-native-community/slider";

const KEY_GPT = "";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [travel, setTravel] = useState("");
  const [city, setCity] = useState("");
  const [days, setDays] = useState(3);

  async function handleGenerate() {
    if (city === "") {
      Alert.alert("Atenção", "Preencha o nome da cidade");
      return;
    }

    //Mensagem "chumbada" no campo do roteiro de viagem apenas para mostrá-lo.
    setTravel("Aqui apareceria a resposta do chatGPT (roteiro de viagem)");
    setLoading(true);
    Keyboard.dismiss();

    const prompt = `Crie um roteiro para uma viagem de exatos ${days.toFixed(
      0
    )} dias na cidade de ${city}, busque por lugares turisticos, lugares mais visitados, seja preciso nos dias de estadia fornecidos e limite o roteiro apenas na cidade fornecida. Forneça apenas em tópicos com nome do local onde ir em cada dia.`;

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${KEY_GPT}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.2,
        max_tokens: 500,
        top_p: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.choices[0].message.content);
        setTravel(data.choices[0].message.content);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

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
        <SearchInput
          placeholder="Ex: São Paulo,  SP"
          value={city}
          onChangeText={(text) => setCity(text)}
        ></SearchInput>
        <FormLabel>
          Tempo de estadia: <StayingDays>{days.toFixed(0)}</StayingDays> dias
        </FormLabel>
        <Slider
          minimumValue={1}
          maximumValue={7} // Número de dias máximo de estadia
          minimumTrackTintColor="#009688"
          maximumTrackTintColor="#000000"
          value={days}
          onValueChange={(value) => setDays(value)}
        />
      </Form>
      <SubmitButton onPress={handleGenerate}>
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
        {loading && (
          <ContentScroll>
            <ContentTitle>Criando roteiro...</ContentTitle>
            <ActivityIndicator color="#000" size="large" />
          </ContentScroll>
        )}

        {travel && (
          <ContentScroll>
            <ContentTitle>Roteiro de viagem 👇</ContentTitle>
            <ItineraryText>{travel}</ItineraryText>
          </ContentScroll>
        )}
      </ContainerScroll>
    </PageContainer>
  );
}
