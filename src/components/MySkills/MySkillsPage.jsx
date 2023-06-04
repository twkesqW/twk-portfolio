import "./mySkillsStyles.css"

const MySkillsPage = () => {
  return (
    <div className="my_skills_page hero">
        <div className="mask">
        </div>

        <div className="skills_content">
          <div className="frontend_skills skills_container">
            <h1>I'm know:</h1>
              <ul className="skills_list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Bootstrap4,5</li>
                <li>Tailwind.css</li>
                <li>React.js</li>
                <li>Redux</li>
                <li>JQuery</li>
                <li>Git and GitHub</li>
                <li>RestAPI</li>
                <li>SASS and Less</li>
                <li>TypeScript</li>

              </ul>
          </div>

          {/* <div className="backend_skills skills_container">
              <h1>Backend</h1>
                <ul className="skills_list">
                  <li>Django</li>
                  <li>Node.js</li>
                  <li>Flask</li>
                  <li>Express</li>
                </ul>
            </div> */}
        </div>
    </div>
  )
}

export default MySkillsPage