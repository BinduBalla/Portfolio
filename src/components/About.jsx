function About() {

  const skills = ["HTML", "CSS", "JavaScript", "React", "MySql", "User experience", "Responsive design"];

  return (
    <div className="about">
      <div>
        <h1 className="heading1">About Myself</h1>
        <h2>
          I have completed my b.tech in computer science. I want to build my career in web development so I am seeking
          a position so that i can improve and grow in web development.
        </h2>
      </div>
      <hr />
      <div className="list">
        <ul>
          {
            skills.map(item => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default About