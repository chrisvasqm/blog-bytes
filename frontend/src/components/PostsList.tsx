import { CircularProgress, Stack } from '@mui/material';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Post from '../models/Post';

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
        if (error instanceof AxiosError) toast(error.message)
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