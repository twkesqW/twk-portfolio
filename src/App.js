import {Routes,Route} from 'react-router-dom'
import About from './routes/About';
import Contact from './routes/Contact';
import MySkills from './routes/MySkills';
import Projects from './routes/Projects';
import Home from "./routes/Home"

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/my_skills' element={<MySkills/>}/>
            <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
