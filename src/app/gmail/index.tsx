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

export default function Gmail() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.form}>
          <Image
            source={require('../../assets/icons/logo-google.png')}
            style={styles.logoGoogle}
            alt={'Logo Google'}
          />
          <Text style={styles.title}>Sign In</Text>
          <Text>With your Google Account</Text>
          <Link href={'/'} style={styles.Link}>
            Learn More about using your account
          </Link>
          <TextInput placeholder="Email or phone" style={styles.textInput} />
          <Link href={'/'} style={styles.forgotEmail}>
            Forgot email?
          </Link>
        </View>
        <View style={styles.containerBottom}>
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert('App em desenvolvimento')}>
            <Text style={styles.textCreate}>Create Account</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonNext]}
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
  form: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    maxWidth: 370,
    width: '100%',
    gap: 10,
  },
  logoGoogle: {
    width: 96,
    height: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
  },
  Link: {
    color: '#3976fa',
    marginBottom: 25,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  forgotEmail: {
    color: '#3976fa',
    marginBottom: 25,
    alignSelf: 'flex-start',
  },
  containerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textCreate: {
    color: '#3976fa',
  },
  buttonNext: {
    backgroundColor: '#3976fa',
    marginRight: 12,
  },
  textNext: {
    color: '#fff',
  },
});
