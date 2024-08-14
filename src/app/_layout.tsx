import { Stack } from 'expo-router';
import PostProvider from '../contexts/PostsContexts';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <PostProvider>
        <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
          <Stack.Screen name="index" />
          <Stack.Screen name="home/index" />
          <Stack.Screen name="postDetail/[id]" />
          <Stack.Screen name="facebook/index" />
          <Stack.Screen name="gmail/index" />
          <Stack.Screen name="twiter/index" />
        </Stack>
      </PostProvider>
    </GestureHandlerRootView>
  );
}
