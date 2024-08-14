import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import LinkButton from '../components/LinkButton';

export default function Index() {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <Image
          source={require('../assets/icons/clock.png')}
          style={styles.clock}
        />
        <Text style={styles.title}>New Time</Text>
        <Link href={'/home'} style={styles.button}>
          Publicações
        </Link>
      </View>
      <View style={styles.social}>
        <LinkButton
          to={'/facebook'}
          imageSource={require('../assets/icons/facebook-icon.png')}
        />
        <LinkButton
          to={'/gmail'}
          imageSource={require('../assets/icons/gmail-icon.png')}
        />
        <LinkButton
          to={'/twiter'}
          imageSource={require('../assets/icons/twiter-icon.png')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingTop: 30,
    flex: 0.8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  social: {
    flex: 0.2,
    height: 100,
    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 48,
    gap: 15,
  },
  clock: {
    width: 140,
    height: 116,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    color: '#389A30',
    fontWeight: 'bold',
    marginBottom: 80,
  },
  button: {
    display: 'flex',
    width: 339,
    height: 55,
    backgroundColor: '#71D523',
    borderRadius: 5,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
});
