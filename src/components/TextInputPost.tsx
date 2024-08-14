import { useContext, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
} from 'react-native';
import { PostsContext } from '@/src/contexts/PostsContexts';
import { NewPostProps } from '@/src/contexts/PostsContexts';

export default function TextInputPost() {
  const { addPost } = useContext(PostsContext);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [constHeight, setContentHeight] = useState(40);
  const userId: number = Math.floor(Math.random() * 1000000) + 1;

  function handlePost(post: NewPostProps) {
    addPost(post);

    Keyboard.dismiss();
    setTitle('');
    setContent('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Título:</Text>
        <TextInput
          placeholder="Dígite o titulo do post"
          value={title}
          onChangeText={text => setTitle(text)}
          style={styles.titleInput}
        />
      </View>
      <View style={styles.containerBody}>
        <Text style={styles.title}>O que está acontecendo?</Text>
        <TextInput
          placeholder="Digite o conteúdo da notícia..."
          value={content}
          multiline={true}
          onChangeText={text => setContent(text)}
          style={[styles.bodyInput, { height: Math.max(40, constHeight) }]}
          onContentSizeChange={e =>
            setContentHeight(e.nativeEvent.contentSize.height)
          }
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() =>
          handlePost({ title: title, body: content, userId: userId })
        }>
        <Text style={styles.buttonText}>Publicar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#389A30',
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 8,
  },
  containerTitle: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: '#389A30',
    marginRight: 5,
  },
  titleInput: {
    fontSize: 18,
    color: '#389A30',
    fontWeight: 'bold',
    width: '80%',
  },
  containerBody: {
    flexDirection: 'column',
    width: '100%',
  },
  bodyInput: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
  },
  button: {
    width: 100,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#389A30',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
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
});
