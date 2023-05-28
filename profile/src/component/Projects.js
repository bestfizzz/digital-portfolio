import { Container, Grid, Card, CardMedia, CardContent, Typography, Modal, Box, CardActions, Button, CardHeader, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const projects = [
  { title: "Stopwatch - beginner", description: "Codepen vanilla JavaScrip stop watch.", longDescription: "Author:Cathy Dutton \nDate:AUGUST 21, 2021", ogLink: 'https://codepen.io/cathydutton/pen/xxpOOw', pLink: 'https://stopwatch-10587.firebaseapp.com/' },
  { title: "Fireworks Brush - beginner", description: "Codepen Fireworks Brush.", longDescription: "Author:Juan Fuentes  \nDate:MAY 18, 2023", ogLink: 'https://codepen.io/JuanFuentes/pen/vYVVxpV', pLink: 'https://firework-brush.web.app/' },
  { title: "Calculator - beginner", description: "Javascript calculator", longDescription: "Author:Akhil Mahesh \nDate:MAY 12, 2023", ogLink: 'https://codepen.io/Akhil-Mahesh/pen/ExdRvVL', pLink: 'https://adswadsa.web.app/' },
  { title: "Not so smart cursor - imtermediate", description: "This pen shows you how to make a custom cursor. You can use it to follow your mouse cursor, or replace it, and show on your website what the user is hovering  ", longDescription: "Author:Yan \nDate:MAY 13, 2023\nchanges:\n   -button color to blue\n   -background-color to black\n   - button content : Next to Up Arrow\n   -Link: link-icon to home-icon\n   -Home: home-icon to up-arrow\n   - Next: up-arrow to link-icon\n   -Link button on click now show 'Link' onscreen\n   -Next button on click now show 'Next' onscreen\n   -Home button on click now show 'Home' onscreen", ogLink: 'https://codepen.io/Ukitsu/pen/NWOzZpV', pLink: 'https://not-so-smart-cursor.web.app/' },
  { title: "Greetings", description: "Very simple JavaScript example that displays a 'Hello, Name' message after user enters a name in the text field.", longDescription: "Author:HowToSolutions \nDate:OCTOBER 8, 2016\n-changes:\n  background color to red\n   -added What do you do,how old are you texts and inputs\n   -new button color\n   - New How you are you? on submit will return a sentence\n   -New what do you do? on submit will return a sentence\n   - If the input is empty no sentence will be generated.\n   - Get all information button which show all sentences created.", ogLink: 'https://codepen.io/HowToSolutions/pen/ozbWKN', pLink: 'https://asdasda-b4e08.web.app/' },
  { title: "Nextjs ecommerce admin", ogLink: 'https://nextjs-ecomerce-front.vercel.app/', pLink: 'https://nextjs-ecomerce-admin.vercel.app/', description: "Implemented a responsive UI design using HTML, CSS, and JavaScript for an user friendly ecommerce management interface. Example ecommerce website is included.", longDescription: "Functions:\n-Order tracking\n-Invenmentory management\n-Categories management\nInstructions:\nThe mock ecommerce front can be used to create paid orders. Use this fake credit card for payment:\n-Bank:	NCB\n-Card number:	9704198526191432198\n-Card holder:	NGUYEN VAN A\n-Issuing date:	07/15\n-OTP:	123456 \nThe ecommerce admin app is secured and only accessible when login with an authorized google account. Use the account provided below:\n-Email:authorizedworker@gmail.com\n-Password:authorized\n*Properties are pairs of key and value that belong to a category. Value is list of attributes seperated with commas. The product with the category can select one attribute in value list for each key. Check out this example if you are still confused:\n-Mobile is a category\n-Mobile has a property called size, size could be 'small','medium' or 'large'.\n-In the application, it should look like 'size(key)\t|\t small,medium,large(value)'\n-Now we have an Iphone14(a product) which is from the mobile category. the Iphone14 has a property called size and can select one of the three attributes ( 'small', 'medium' or 'large' ) as value. \n*Category has a special mechanic which can be called inheritance, each child can only have 1 parent category .Categories which have a parent category will have their parent properites. \nExample:\n-Mobile is category with properties like weight and height.\n-Iphone has Mobile as its parent category.\n=>Iphone has weight and height properties plus its own."}
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '300px', sm: '80%', md: "90%" },
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflow: 'visible',
};
const Projects = () => {
  const [open, setOpen] = useState(false)
  const [projectData, setProjectData] = useState(null)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="container">
      <Container sx={{ mt: 8, mb: 2 }} Width="100%">
        <Typography variant="h2" component="h2" gutterBottom>
          Projects
        </Typography>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <>
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  onClick={() => {
                    handleOpen()
                    setProjectData(project)
                  }}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: "pointer" }}
                >
                  <CardMedia
                    component="img"
                    image={project.image || "https://source.unsplash.com/random"}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
      {projectData &&
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Card sx={{ height: '100%', width: '100%', border: "hidden", overflow: 'auto' }}>
              <CardHeader
                action={
                  <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                }
                title={projectData.title}
                subheader="Last modified at May 18, 2023"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  {projectData.description}
                </Typography>
                <Typography >
                  Project link: <a href={projectData.pLink}>{projectData.pLink}</a>
                </Typography>
                <Typography >
                  Website: <a href={projectData.ogLink}>{projectData.ogLink}</a>
                </Typography>
                <Typography>
                  {projectData.longDescription.split("\n").map((i, key) => {
                    return <p key={key}>{i}</p>;
                  })}
                </Typography>

              </CardContent>
              <CardMedia
                component="img"
                style={{ height: { xs: '200px', sm: '300px' } }}
                image={projectData.image || "https://source.unsplash.com/random"}
                alt="Project"
              />
            </Card>
          </Box>
        </Modal>}
    </div>
  );
};

export default Projects