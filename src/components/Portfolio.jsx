function Portfolio(props) {

  const projects = [
    {
      Name: "To-Do-List",
      TechStack: "React",
      Description: "A simple To-Do-List with CRUD operations",
      GitHub: "https://github.com/BinduBalla/react-to-do-list"
    },
    {
      Name: "Car Rental Website",
      TechStack: "Bootstrap",
      Description: "A responsive car rental website",
      GitHub: "https://github.com/BinduBalla/car-rental-website"
    }
  ]

  return (
    <div className="projects">
      <h1 className="heading1">Portfolio</h1>
      <div className="project">
          {
            projects.map((project) => 
              <ul key={Math.random().toString()}>
                <li>{props.name}: {project.Name}</li>
                <li>{props.techstack}: {project.TechStack}</li>
                <li>{props.description}: {project.Description}</li>
                <li>{props.github}: {project.GitHub}</li>
              </ul>
            )
          }
      </div>
    </div>
  )
}

export default Portfolio