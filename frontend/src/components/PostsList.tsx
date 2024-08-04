import { useEffect, useState } from 'react';
import Post from '../models/Post';
import axios, { AxiosError } from 'axios';
import { CircularProgress, Stack } from '@mui/material';

function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchPosts() {
      try {
        const response = await axios.get('http://localhost:3000/api/posts');
        setPosts(response.data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) console.log(error.stack);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (isLoading) return <Stack justifyContent={'center'} alignItems={'center'} height={'90vh'}>
    <CircularProgress />
  </Stack>

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  )
}

export default PostsList;