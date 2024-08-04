import AddIcon from '@mui/icons-material/Add';
import { Box, Container, Fab } from '@mui/material';
import { Toaster } from 'sonner';
import './App.css';
import Navbar from './components/Navbar';
import PostsList from './components/PostsList';

function App() {
  return (
    <Box>
      <Navbar />
      <main>
        <Container>
          <PostsList />
        </Container>
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16
          }}>
          <AddIcon />
        </Fab>
      </main>
      <Toaster />
    </Box>
  )
}

export default App
