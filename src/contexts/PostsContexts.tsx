import React, { createContext, useState, ReactNode } from 'react';

interface PostsContextData {
  posts: PostProps[];
  loadAllPosts: () => void;
  addPost: (newPost: NewPostProps) => void;
  editPost: (post: PostProps) => void;
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface NewPostProps {
  title: string;
  body: string;
  userId: number;
}

interface PostProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContextData);

function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([]);

  async function loadAllPosts() {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
          const data = json.slice(0, 10);
          setPosts(data);
        });
    } catch (err) {
      console.log(`Erro ao buscar posts: ${err}`);
    }
  }

  async function addPost(newPost: NewPostProps) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: newPost.title,
        body: newPost.body,
        userId: newPost.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao adicionar post');
    }

    const postData: PostProps = await response.json();
    console.log(postData);
    setPosts([postData, ...posts]);
  }

  async function editPost(post: PostProps) {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        method: 'PUT',
        body: JSON.stringify({
          id: post.id,
          title: post.title,
          body: post.body,
          userId: post.userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Erro ao editar post');
    }

    const postData: PostProps = await response.json();
    console.log(postData);

    const indexItem = posts.findIndex(item => item.id === postData.id);

    if (indexItem === -1) {
      return;
    }

    let postsList = posts;

    postsList[indexItem].title = postData.title;
    postsList[indexItem].body = postData.body;

    setPosts(postsList);
  }

  return (
    <PostsContext.Provider value={{ posts, loadAllPosts, addPost, editPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostProvider;
