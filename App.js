import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Counter from "./src/components/Counter";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      {isVisible && <Counter />} 
      <Button
        title={isVisible ? "Counter'ı Gizle" : "Counter'ı Göster"}
        onPress={() => setIsVisible(!isVisible)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
