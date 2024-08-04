import './App.css'
import Navbar from './components/Navbar'
import { Box, Container } from '@mui/material';
import PostsList from './components/PostsList';

function App() {
  return (
    <Box>
      <Navbar />
      <main>
        <Container>
          <PostsList />
        </Container>
      </main>
    </Box>
  )
}

export default App
