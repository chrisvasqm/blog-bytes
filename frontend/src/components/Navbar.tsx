import { AppBar, Container, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position='static' sx={{ padding: 2 }}>
      <Container>
        <Typography fontSize={24} fontWeight={500}>Blog Bytes</Typography>
      </Container>
    </AppBar>
  )
}

export default Navbar;