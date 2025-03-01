import AddIcon from '@mui/icons-material/Add';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Grid, Stack, TextField } from '@mui/material';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Post from '../models/Post';
import PostCard from './PostCard';
import RichEditor from './RichEditor';

function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleSavePost = async () => {
    setLoading(true);
    try {
      const data = { title, content };
      const response = await axios.post('http://localhost:3000/api/posts', data);
      setPosts([response.data, ...posts]);
      setTitle('');
      setContent('');
    } catch (error: unknown) {
      if (error instanceof AxiosError) toast(error.message)
    } finally {
      setLoading(false);
      handleClose();
    }
  }

  if (isLoading) return <Stack justifyContent={'center'} alignItems={'center'} height={'90vh'}>
    <CircularProgress />
  </Stack>

  return (
    <>
      <Stack gap={2} alignItems={'center'} minWidth={300} paddingBottom={2} position="relative">
        {posts.map(post => <Grid key={post.id} item>
          <PostCard post={post} />
        </Grid>)}

        <Fab
          color="primary"
          aria-label="add"
          onClick={handleOpen}
          sx={{
            position: 'sticky',
            bottom: 16,
            right: 16,
            alignSelf: 'flex-end',
            marginRight: 2,
          }}>
          <AddIcon />
        </Fab>
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>What's on your mind?</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            fullWidth
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="text"
            variant="outlined"
            sx={{marginBottom: 2}}
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <RichEditor value={content} onChange={newValue => setContent(newValue)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSavePost}>Post</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default PostsList;
