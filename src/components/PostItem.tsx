import { Link, Href } from 'expo-router';
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useContext, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { PostProps, PostsContext } from '../contexts/PostsContexts';

interface PostItemProps {
  post: PostProps;
  editable: boolean;
}

export default function PostItem({ post, editable }: PostItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const { editPost } = useContext(PostsContext);

  async function handleEdit() {
    setTitle(title);
    setBody(body);

    editPost({
      id: post.id,
      title: title,
      body: body,
      userId: post.userId,
    });

    setIsEditing(false);
    Keyboard.dismiss();
  }

  function handleCancelEditing() {
    setTitle(post.title);
    setBody(post.body);
    setIsEditing(false);
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={handleCancelEditing}>
      {isEditing ? (
        <View style={styles.postItem}>
          <Text style={styles.buttonEditTitle}>Editando...</Text>
          <TextInput
            placeholder="Digite o conteúdo da notícia..."
            value={title}
            multiline={true}
            onChangeText={text => setTitle(text)}
            style={styles.title}
          />
          <TextInput
            placeholder="Digite o conteúdo da notícia..."
            value={body}
            multiline={true}
            onChangeText={text => setBody(text)}
            style={styles.body}
          />
          <View style={styles.containerButtons}>
            <Pressable style={styles.button} onPress={handleEdit}>
              <Text style={styles.buttonText}>Salvar</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleCancelEditing}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <Pressable>
          <Link
            href={`postDetail/${post.id}` as Href}
            style={styles.postItem}
            asChild>
            <Pressable>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.body}>{body}</Text>
              {editable && (
                <Pressable
                  style={styles.buttonContainer}
                  onPress={() => setIsEditing(true)}>
                  <Text style={styles.buttonEditTitle}>Editar</Text>
                  <Image
                    style={styles.buttonImage}
                    source={require('../assets/icons/button-edit.png')}
                  />
                </Pressable>
              )}
            </Pressable>
          </Link>
        </Pressable>
      )}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  postItem: {
    borderWidth: 1,
    borderColor: '#389A30',
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 8,
    position: 'relative',
  },
  title: {
    fontSize: 15,
    color: '#389A30',
    fontWeight: 'bold',
    maxWidth: 300,
    textTransform: 'uppercase',
  },
  body: {
    width: '100%',
    fontSize: 15,
    color: '#737373',
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    right: 10,
    gap: 5,
  },
  containerButtons: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    gap: 5,
  },
  button: {
    width: 100,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#389A30',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonEditTitle: {
    color: '#389A30',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonImage: {
    width: 16,
    height: 16,
  },
});
