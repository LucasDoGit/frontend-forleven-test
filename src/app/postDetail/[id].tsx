import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { PostProps } from '@/src/contexts/PostsContexts';
import PostItem from '@/src/components/PostItem';

interface ComentProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function PostDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [post, setPost] = useState<PostProps>();
  const [coments, setComents] = useState<ComentProps[]>([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );

        if (!res.ok) {
          throw new Error('Post não encontrado');
        }

        const postData: PostProps = await res.json();
        setPost(postData);
      } catch (err) {
        console.log(err);
        router.push('/home');
      }
    };

    async function getComents() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        );

        if (!res.ok) {
          throw new Error('Post não encontrado');
        }

        const comentsData: ComentProps[] = await res.json();

        setComents(comentsData);
      } catch (err) {
        console.log(err);
        router.push('/home');
      }
    }

    getPost();
    getComents();
  }, [id]);

  if (!post) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.messageLoading}>Carregando detalhes...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <PostItem post={post} editable={false} />
      <Text style={styles.comentsTitle}>Comentários</Text>
      <View style={styles.comentsContainer}>
        {coments.map(coment => (
          <View key={coment.id} style={styles.coment}>
            <Text style={styles.comentName}>
              {coment.name}:{' '}
              <Text style={styles.comentBody}>{coment.body}</Text>
            </Text>
            <Text style={styles.comentEmail}>email: {coment.email}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 38,
    marginBottom: 20,
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  comentsTitle: {
    fontSize: 20,
    marginTop: 5,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
  comentsContainer: {
    gap: 10,
  },
  coment: {
    gap: 3,
  },
  comentHeader: {
    flexDirection: 'column',
  },
  comentName: {
    color: '#389A30',
    fontWeight: 'bold',
    fontSize: 15,
  },
  comentBody: {
    color: 'black',
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'justify',
  },
  comentEmail: {
    fontSize: 13,
    color: '#000',
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageLoading: {
    fontSize: 18,
  },
});
