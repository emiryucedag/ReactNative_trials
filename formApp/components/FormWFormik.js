import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useFormik } from 'formik';
import validationSchema from './validations';

const FormWFormik = () => {
  const {
    values, errors, touched, isSubmitting,
    handleChange, handleSubmit, handleBlur
  } = useFormik({
    initialValues: { username: '', password: '', passwordConfirm: '', email: '' },
    onSubmit: async (vals, bag) => {
      await new Promise(r => setTimeout(r, 2000));
      if (vals.email === 'test@test.com') return bag.setErrors({ email: 'This email is already using!' });
      bag.resetForm();
      console.log(vals);
    },
    validationSchema
  });

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>React Trail App</Text>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          value={values.username}
          placeholder="userName"
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          editable={!isSubmitting}
        />
        {touched.username && errors.username ? <Text style={styles.error}>{errors.username}</Text> : null}
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          value={values.email}
          placeholder="e-mail"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          editable={!isSubmitting}
        />
        {touched.email && errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          value={values.password}
          secureTextEntry
          placeholder="password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          editable={!isSubmitting}
        />
        {touched.password && errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          value={values.passwordConfirm}
          secureTextEntry
          placeholder="confirm password"
          onChangeText={handleChange('passwordConfirm')}
          onBlur={handleBlur('passwordConfirm')}
          editable={!isSubmitting}
        />
        {touched.passwordConfirm && errors.passwordConfirm ? (
          <Text style={styles.error}>Passwords are not matching!</Text>
        ) : null}
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, isSubmitting && { opacity: 0.6 }]}
        onPress={handleSubmit}
        disabled={isSubmitting}
      >
        <Text style={styles.buttonText}>{isSubmitting ? 'Submitting…' : 'Register'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex:1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f8541c'  },

  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 16,
    color: 'purple',
  },

  item: {
    backgroundColor: '#f5f7fb',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 15,
    shadowColor: 'purple',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  input: {
    height: 48,
    fontSize: 16,
    color: 'purple',
  },

  error: {
    marginTop: 6,
    color: '#dc2626',
    fontSize: 12.5,
  },

  button: {
    marginTop: 12,
    backgroundColor: 'purple',
    borderRadius: 12,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  buttonText: {
    color: '#f5f7fb',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
});

export default FormWFormik;