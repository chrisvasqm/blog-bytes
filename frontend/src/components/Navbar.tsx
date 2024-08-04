import { AppBar, Container, Typography } from '@mui/material';

function Navbar() {
  return (
    <AppBar position='static' sx={{ padding: 2, marginBottom: 2 }}>
      <Container>
        <Typography fontSize={24} fontWeight={500}>Blog Bytes</Typography>
      </Container>
    </AppBar>
  )
}

export default Navbar;