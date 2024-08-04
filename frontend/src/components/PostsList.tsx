import { useEffect, useState } from 'react';
import Post from '../models/Post';
import axios, { AxiosError } from 'axios';

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

  if (isLoading) return <p>Loading...</p>

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  )
}

export default PostsList;