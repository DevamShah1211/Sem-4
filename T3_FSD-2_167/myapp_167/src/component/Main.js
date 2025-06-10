import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NP from './Nopage'
function Main(){
    return(<div>
        <Router>
            <div>
                <ul type="none" style={{display:'flex',backgroundColor:'azure',height:"50px",align:'center'}}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to='/Contact'>Contact US</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="*" element={<NP/>}/>
            </Routes>
        </Router>
    </div>)
}
export default Main