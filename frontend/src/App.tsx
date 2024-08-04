import './App.css'
import Navbar from './components/Navbar'
import { Box, Container } from '@mui/material';
import PostsList from './components/PostsList';
import { Toaster } from 'sonner';

function App() {
  return (
    <Box>
      <Navbar />
      <main>
        <Container>
          <PostsList />
        </Container>
      </main>
      <Toaster />
    </Box>
  )
}

export default App
