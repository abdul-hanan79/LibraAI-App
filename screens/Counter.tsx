import { useState } from "react";
import { Button, Input } from "tamagui";
import styled from "styled-components/native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  console.log("🚀 ~ Counter ~ value:", value);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter + 1);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Wrapper>
          <Text>value {counter}</Text>
          <Input
            keyboardType="numeric"
            onChangeText={(text) => setCounter(parseInt(text))}
          />
          <ButtonWrapper>
            <Button onPress={handleIncrement}>+</Button>
            <Button onPress={handleDecrement}>-</Button>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Counter;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: purple;
`;
const Wrapper = styled.View`
  width: 100%;
  gap: 20;
`;
const Text = styled.Text`
  text-align: center;
  color: white;
  font-size: 14px;
`;
const ButtonWrapper = styled.View`
  display: flex;
  gap: 20;
  flex-direction: row;
  justify-content: center;
`;
