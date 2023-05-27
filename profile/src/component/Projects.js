import { Container, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
const projects=[
  { title: "Project 1", description: "Built a responsive web application using React and Redux." },
  { title: "Project 2", description: "Developed a RESTful API using Node.js and Express." },
  { title: "Project 3", description: "Implemented a responsive UI design using HTML, CSS, and JavaScript." },
  { title: "Project 1", description: "Built a responsive web application using React and Redux." },
  { title: "Project 2", description: "Developed a RESTful API using Node.js and Express." },
  { title: "Project 3", description: "Implemented a responsive UI design using HTML, CSS, and JavaScript." }
]
const Projects = () => {
  return (
    <div className="container">
      <Container sx={{ mt: 8, mb: 2}} Width="100%">
        <Typography variant="h2" component="h2" gutterBottom>
          Projects
        </Typography>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  );
};
export default Projects