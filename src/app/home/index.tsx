import { useContext, useEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { PostsContext } from '@/src/contexts/PostsContexts';
import TextInputPost from '@/src/components/TextInputPost';
import PostItem from '@/src/components/PostItem';

export default function Home() {
  const { posts, loadAllPosts } = useContext(PostsContext);

  useEffect(() => {
    loadAllPosts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/icons/clock.png')}
            style={styles.clock}
            resizeMode="contain"
          />
          <Text style={styles.title}>New Time</Text>
        </View>
        <Link href={'/'} style={styles.link}>
          Página Inicial
        </Link>
      </View>
      <View style={{ marginBottom: 10 }}>
        <TextInputPost />
      </View>
      {posts.length <= 0 ? (
        <View style={styles.containerLoading}>
          <Text style={styles.messageLoading}>Carregando posts...</Text>
        </View>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <PostItem post={item} editable={true} />}
          contentContainerStyle={styles.postContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 28,
    paddingHorizontal: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 20,
    color: '#389A30',
    fontWeight: 'bold',
  },
  clock: {
    width: 60,
    height: 60,
  },
  link: {
    fontSize: 16,
    color: '#389A30',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  containerTitle: {
    flexDirection: 'row',
  },
  titleInput1: {
    fontSize: 18,
    color: '#389A30',
  },
  titleInput: {
    fontSize: 18,
    color: '#389A30',
    fontWeight: 'bold',
  },
  postContainer: {
    gap: 10,
    paddingBottom: 10,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageLoading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
