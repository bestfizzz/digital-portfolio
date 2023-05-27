import { Routes, Route, Link } from "react-router-dom";
import ProfileInfo from "./component/ProfileInfo.js";
import Skills from "./component/Skills.js";
import Projects from "./component/Projects.js";
import NavBar from './component/NavBar';
import Interests from './component/Interests';
import './App.css';
import { Container } from '@mui/material';
import StarSky from "react-star-sky";
import Footer from './component/Footer';
import { createTheme, ThemeProvider,responsiveFontSizes } from '@mui/material/styles';
let theme = createTheme();
theme = responsiveFontSizes(theme);
theme.typography.subtitle1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};
theme.typography.subtitle2 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },[theme.breakpoints.up('lg')]: {
    fontSize: '1.8rem',
  },
};
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters >
        <StarSky isPageBackground={true} backgroundColor={[6, 12, 20]} />
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<ProfileInfo />} />
            <Route path="interest" element={<Interests />} />
            <Route path="skill" element={<Skills skills={['React', 'JavaScript', 'HTML', 'CSS', 'Node.js']} />} />
            <Route path="project" element={<Projects/>} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
        <Footer />
      </Container>
      </ThemeProvider>
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;
