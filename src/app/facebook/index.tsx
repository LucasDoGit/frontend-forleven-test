import { Link } from 'expo-router';
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';

export default function Facebook() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.flexContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.idioma}>Português (Brasil)</Text>
          <Image
            source={require('../../assets/icons/logo-facebook.png')}
            resizeMode="contain"
            style={styles.logoFacebook}
            alt="Logo facebook"></Image>
          <View style={styles.containerForm}>
            <TextInput
              placeholder="Número do celular ou e-mail"
              style={styles.textInput}></TextInput>
            <TextInput placeholder="Senha" style={styles.textInput}></TextInput>
            <Pressable style={styles.submitButton}>
              <Text style={styles.textButton}>Entrar</Text>
            </Pressable>
            <Link href={'/'} style={styles.btnChangePws}>
              <Text style={styles.textBtnChangePsw}>Esqueceu a senha?</Text>
            </Link>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Pressable
            style={styles.btnCreate}
            onPress={() => Alert.alert('App em desenvolvimento')}>
            <Text style={styles.textBtnCreate}>Criar Nova Conta</Text>
          </Pressable>
          <Image
            source={require('../../assets/icons/logo-meta.png')}
            style={styles.logoMeta}
            alt="Logo Meta"></Image>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  flexContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  idioma: {
    fontSize: 17,
    color: '#696969',
    marginBottom: 10,
  },
  logoFacebook: {
    width: 108,
    height: 108,
    marginVertical: 20,
  },
  containerForm: {
    flexDirection: 'column',
    maxWidth: 390,
    padding: 10,
    gap: 10,
    width: '100%',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 8,
    padding: 10,
  },
  submitButton: {
    borderRadius: 28,
    backgroundColor: '#0866ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 8,
  },
  textButton: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  btnChangePws: {
    textAlign: 'center',
  },
  textBtnChangePsw: {
    fontSize: 16,
  },
  btnCreate: {
    width: '100%',
    padding: 10,
    backgroundColor: 'none',
    borderWidth: 1.5,
    borderColor: '#0866ff',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 28,
  },
  textBtnCreate: {
    fontSize: 16,
    color: '#0866ff',
    fontWeight: 'bold',
  },
  logoMeta: {
    width: 90,
    height: 35,
  },
  bottomContainer: {
    maxWidth: 390,
    width: '100%',
    padding: 10,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
