import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter MOUNT edildi ✅");
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Counter UNMOUNT edildi ❌");
      clearInterval(interval);
    };
  }, []);

  return (
    <View>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});
