import { Link } from 'expo-router';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  Alert,
} from 'react-native';

export default function Twiter() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Link href={'/'} style={styles.buttonReturn} asChild>
          <Pressable>
            <Image
              source={require('../../assets/icons/return-icon.png')}
              style={styles.returnIcon}
            />
          </Pressable>
        </Link>
        <View style={styles.form}>
          <Image
            source={require('../../assets/icons/x-logo.png')}
            style={styles.logoX}
            alt={'Logo X'}
          />
          <Text style={styles.title}>
            To get started, first enter your phone, email, or @username
          </Text>
          <TextInput
            placeholder="Phone, email or username"
            style={styles.textInput}
          />
        </View>
        <View style={styles.containerBottom}>
          <Link href={'/'} style={styles.forgotPassword}>
            Forgot password?
          </Link>
          <Pressable
            style={styles.buttonNext}
            onPress={() => Alert.alert('App em desenvolvimento')}>
            <Text style={styles.textNext}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flexContainer: {
    marginTop: 25,
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonReturn: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  returnIcon: {
    width: 26,
    height: 26,
  },
  form: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    maxWidth: 370,
    width: '100%',
    gap: 10,
  },
  logoX: {
    width: 26,
    height: 26,
    marginBottom: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  containerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    borderWidth: 1,
    borderColor: '#b9cad3',
    borderRadius: 20,
  },
  buttonNext: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#666666',
    marginRight: 12,
  },
  textNext: {
    color: '#c2c2c2',
  },
});
