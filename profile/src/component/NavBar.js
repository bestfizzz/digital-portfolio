import { Button, Stack, Toolbar, AppBar, Box, Divider } from "@mui/material"
import { Outlet, Link } from 'react-router-dom';
const MyDivider = () => (
  <Divider style={{ backgroundColor: 'white' }} orientation="vertical" flexItem />
);
function NavBar() {
  return (
    <div className="nav">
      <AppBar elevation={0} color="transparent" >
        <Toolbar sx={{ justifyContent: 'center'}}>
          <Box backgroundColor='rgb(6, 12, 20)' padding={'10px'} paddingX={'20px'} borderRadius={10}>
          <Stack spacing={1} direction="row">
            <Link to="/" >
              Home
            </Link>
            <MyDivider />
            <Link to="/interest" >
              Interests
            </Link>
            <MyDivider />
            <Link to="/skill" >
              Field
            </Link>
            <MyDivider />
            <Link to="/project" >
              Projects
            </Link>
          </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
}
export default NavBar