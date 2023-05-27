import { Card, CardContent, Avatar, Typography, Box,Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarIcon from '@mui/icons-material/Star';

const MyCard = () => {
  // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  // const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const handleDirect = (url) => {
    window.location.href = `${url}`
  }
  return (
    <Card sx={{ bgcolor: { xs: 'white', md: 'transparent' }, boxShadow:{xs:9,md:0}, display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, maxWidth: { xs: '300px', sm: '550px', md: '900px', lg: '1200px' }, ml: '1rem', mr: '1rem', maxHeight: { xs: '600px', sm: '450px', md: '1200px' }, margin: 'auto', color: 'white', border: {xs:'solid 3px #9f9fa6',md:'none'} }}>
      <Avatar sx={{ width: { xs: 125, md: 175, lg: 250 }, height: { xs: 125,  md: 175, lg: 250 }, alignSelf: { xs: 'center', sm: 'self-start' }, ml: { sm: '16px', md: '32px', lg: '64px' }, mt: { xs: '16px'}, mr: { xs: '0px', md: '16px', lg: '48px' } }} alt="Me" src={require('../minh.jpg')} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', pb: '8px', pr: { xs: '15px', sm: '16px', lg: '32' }, color: { xs: 'text.primary', md: 'white' } }}>
          <Box display={isMediumScreen ? 'flex' : 'none'} sx={{ justifyContent: 'space-between' }}>
            <Typography component="div" variant="h4" color="#0f0fbe">
              Nguyen Hoang Minh
            </Typography> 
            <StarIcon style={{ color: 'yellow' }} sx={{ visibility: { xs: 'hidden', sm: 'visible' } }} />
          </Box>
          {isMediumScreen ?
            <Box>
              <Typography variant="subtitle1" sx={{ textDecoration: { xs: 'underline', md: 'none' }, fontWeight: 'bold' }} component="div">
                Software Developer
              </Typography>
              <Typography variant="subtitle2" component="div">
                <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold' }} display='inline'>Specialize: </Typography>
                JavaScript, Reactjs, HTML, Firebase
              </Typography>
            </Box>
            :
            <Typography variant="h3" sx={{ textDecoration: { xs: 'underline', md: 'none' }, fontWeight: 'bold' }} component="div">
              I'm a Full-Stack developer with a passion for creating impactful software solutions.
            </Typography>
          }
          <Box display={{ sm: 'none', md: 'block' }}><br /></Box>
          <Typography sx={{my:'3px'}} variant="subtitle2" component="div">
            I've worked on various areas of software development for over 4 years, including front-end/back-end, mobile app development, hosting management, and app UI/UX. I'm versatile and enjoy tackling different challenges.
          </Typography>
          <Box display={{ sm: 'none', md: 'block' }}><br /></Box>
          <Typography  sx={{ fontWeight: 'bold' }} variant="subtitle2" component="div">
            Contact me:
          </Typography>
          <Box display={'inline-flex'} sx={{ pt: '1px' }}>
            <PhoneIcon />
            <Typography variant="subtitle2" component="div">
              : 0782433679
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', pl: 2, pb: 1, justifyContent: 'left', gap: '0px' }}>
          <Button sx={{p:0}} aria-label="my facebook" onClick={() => handleDirect('https://www.facebook.com')}>
            <FacebookIcon sx={{ color: {xs:'blue',md:'white'}, fontSize: { xs: 24, sm: 30 } }} color='blue' />
          </Button>
          <Button sx={{p:0}} aria-label="Email me" onClick={() => handleDirect('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=minhhoangnguyen19122004@gmail.com')}>
            <EmailIcon sx={{ color: {xs:'#0077b5',md:'white'}, fontSize: { xs: 24, sm: 30 } }} />
          </Button>
          <Button sx={{p:0}} aria-label="my LinkedIn" onClick={() => handleDirect('https://www.linkedin.com/in/minh-hoang-nguyen-045149273')}>
            <LinkedInIcon sx={{ color: {xs:'#0077b5',md:'white'}, fontSize: { xs: 24, sm: 30 } }} />
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default MyCard;
