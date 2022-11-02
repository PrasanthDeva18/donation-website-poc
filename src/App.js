import Main from './Components/Main';
import Login from './Components/auth/Login'
import Register from './Components/auth/Register';
import Contact from './Components/ContactUs/Contactus';
import ContributorName from './Components/Contributors/ContributorName';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contributors' element={<ContributorName/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
