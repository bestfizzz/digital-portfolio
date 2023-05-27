import MyCard from "./MyCard";
import { Box, Container, Typography } from "@mui/material";
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CloudIcon from '@mui/icons-material/Cloud';

const ProfileInfo = () => {
  return (
    <div className="container">
      <Container sx={{ mt: 8, mb: 2, height: { xs: '600px', md: '600px', sm: '550px' }, m: 'auto' }} Width="100%">
        <Container sx={{textAlign:'center',p:0}}>
          <Typography variant="h1" component="h1" gutterBottom>
            Hi, I'm Minh
          </Typography>
        </Container>
        <MyCard />
      </Container>
      <Container sx={{ backgroundColor: 'transparent', py: 16 }}>
        <Box sx={{ maxWidth: 'xl', mx: 'auto', px: { xs: 3, lg: 0 } }}>
          <Typography variant="h2" sx={{ fontSize: '3xl', fontWeight: 'bold', color: 'gray.800', mb: 8,ml:{md:'5%'} }}>
            Skills
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 8 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <CloudIcon size={'200%'} sx={{ color: 'indigo.500', mb: 4, fontSize: '10rem' }} />
              <Typography variant="h3" sx={{ fontSize: 'xl', fontWeight: 'bold', color: 'gray.800', mb: 2 }}>
                Cloud
              </Typography>
              <Typography variant="body1" sx={{ color: 'gray.600', textAlign: 'center' }}>
                Mastery at using database such as Firebase and AWS online hosting
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <HtmlIcon size={48} sx={{ color: 'indigo.500', mb: 4, fontSize: '10rem' }} />
              <Typography variant="h3" sx={{ fontSize: 'xl', fontWeight: 'bold', color: 'gray.800', mb: 2 }}>
                Customize
              </Typography>
              <Typography variant="body1" sx={{ color: 'gray.600', textAlign: 'center' }}>
                Versatile website design
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <CssIcon size={48} sx={{ color: 'indigo.500', mb: 4, fontSize: '10rem' }} />
              <Typography variant="h3" sx={{ fontSize: 'xl', fontWeight: 'bold', color: 'gray.800', mb: 2 }}>
                Modern Design
              </Typography>
              <Typography variant="body1" sx={{ color: 'gray.600', textAlign: 'center' }}>
                CSS, Tailwinds CSS, Material-ui, React Hooks
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <JavascriptIcon size={48} sx={{ color: 'indigo.500', mb: 4, fontSize: '10rem' }} />
              <Typography variant="h3" sx={{ fontSize: 'xl', fontWeight: 'bold', color: 'gray.800', mb: 2 }}>
                Node.js
              </Typography>
              <Typography variant="body1" sx={{ color: 'gray.600', textAlign: 'center' }}>
                Flexible at using differnet frameworks and libaries
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export default ProfileInfo