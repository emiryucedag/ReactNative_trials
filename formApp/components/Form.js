import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: ""
  });

  const handleChange = (text, input) => {
    setForm((prev) => ({ ...prev, [input]: text }));
  };

  const handleSubmit = () => {
    if (form.username == "") return false;
    if (form.password == "") return false;
    if (form.passwordConfirm == "" || form.password != form.passwordConfirm)
      return false;
    if (form.email == "") return false;

    console.log({ form });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.preview}>{JSON.stringify(form, null, 2)}</Text>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          value={form.username}
          placeholder="Username"
          onChangeText={(text) => handleChange(text, "username")}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          placeholder="E-mail"
          onChangeText={(text) => handleChange(text, "email")}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          value={form.password}
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => handleChange(text, "password")}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          value={form.passwordConfirm}
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => handleChange(text, "passwordConfirm")}
        />
      </View>

      <View style={styles.button}>
        <Button title="Register" onPress={handleSubmit} color="#f4511e" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  preview: {
    fontSize: 14,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    width: "100%",
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  item: {
    marginVertical: 8,
    width: "100%",
  },
  button: {
    marginTop: 20,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default Form;