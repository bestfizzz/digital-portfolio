import { Container, Box, Typography } from "@mui/material";
const SkillsData = [
  {
    title:'Nodejs',
    description:'I have experience working with popular web development frameworks such as Express, React/React Native, and Next.js, using Node.js to build high-performance web applications. I also have experience deploying Node.js applications on AWS services to ensure reliability and scalability.'
},{
  title:'Firebase',
  description:"I have expertise in Firebase, which is a powerful mobile and web application development platform. It provides an extensive set of backend services and tools, allowing me to build reliable and scalable applications with ease."
},{
  title:'Styling',
  description:"I have experience in creating visually appealing web interfaces using various styling frameworks and techniques, including CSS, Tailwind CSS, Material-UI, and React Hooks.With my knowledge in responsive design, I'm able to create interfaces that adapt seamlessly to different devices and screen sizes, ensuring a smooth and consistent user experience."
},{
  title:'API Integration',
  description:"Experienced in integrating third-party APIs and services for various functionalities like geolocation, and social media. Also created custom APIs using Node.js and Express.js."
},
]
const Skills = () => {
  return (
    <div className="container">
      <Container sx={{ mt: 8, mb: 2 }} Width="100%">
        <Typography variant="h2" component="h2" gutterBottom>
          Field
        </Typography>
      </Container>
      <Container sx={{ backgroundColor: 'transparent', pb: 16 }}>
        <Box sx={{ maxWidth: 'xl', mx: 'auto', px: 0, borderRadius: '20px',backgroundColor:'gray' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 8, p: {xs:'32px',md:'64px'} }}>
            {SkillsData.map((skill, index) => {
              return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start', justifyContent: 'flex-start', }}>
                  <Typography variant="h1" sx={{ fontSize: 'xl', fontWeight: 'bold', color: 'gray.800', mb: 2 }}>
                    {index+1}
                  </Typography>
                  <Typography variant="h3" sx={{ fontSize: 'xl', fontWeight: 'bold', color: 'gray.800', mb: 2 }}>
                    {skill.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'gray.600', textAlign: 'left' }}>
                    {skill.description}
                  </Typography>
                </Box>
              )
            })
            }
          </Box>
        </Box>
      </Container>
    </div>
  );
}
export default Skills