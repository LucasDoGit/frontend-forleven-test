import React from 'react';
import {
  Image,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import { Href, Link } from 'expo-router';

interface LinkButtonProps {
  to: Href;
  imageSource: ImageSourcePropType;
}

const LinkButton = ({ to, imageSource }: LinkButtonProps) => {
  return (
    <Link href={to} asChild>
      <Pressable>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
});

export default LinkButton;
