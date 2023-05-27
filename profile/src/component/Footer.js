import { Box, Paper,Typography,Link,Container } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" textAlign={'center'}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Nguyen Hoang Minh
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer=()=> {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor:'white'
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default Footer