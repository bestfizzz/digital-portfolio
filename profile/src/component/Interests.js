import { Typography, Container, Box } from "@mui/material";
const Interests = () => {
  return (
    <div className="container">
      <Container sx={{ mt: 8, mb: 2, height: '100%' }} Width="100%">
        <Typography variant="h2" component="h2" gutterBottom>
          Interests
        </Typography>
        <Box sx={{ mb: '32px' }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Sleep
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Programming takes a toll from the body. So resting is not only important, but also refreshing.
          </Typography>
          <Box className='container-iframe' sx={{ justifyContent: 'center' }} display={'flex'}>
          <iframe className="responsive-iframe" src="https://www.youtube.com/embed/gedoSfZvBgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Box>
        </Box>
        <Box sx={{ mb: '32px' }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Kittens
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Why not?
          </Typography>
          <Box sx={{ justifyContent: 'center' }} display={'flex'}>
            <img src={require('../kitten.png')} />
          </Box>
        </Box>
      </Container>
    </div>
  );
}
export default Interests