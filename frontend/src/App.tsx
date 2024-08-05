import { Box } from '@mui/material';
import { Toaster } from 'sonner';
import './App.css';
import Navbar from './components/Navbar';
import PostView from './components/PostView';

function App() {
  return (
    <Box>
      <Navbar />
      <main>
        <PostView />
      </main>
      <Toaster />
    </Box>
  )
}

export default App
