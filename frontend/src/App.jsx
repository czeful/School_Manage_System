import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../src/components/Home';
import ChooseUser from '../src/components/ChooseUser';
import AdminRegister from '../src/components/AdminRegister';
import AdminSigIn from './components/AdminSignin';
import StudentSignIn from './components/StudentSignin';
import TeacherSignIn from './components/TeacherSignin';
function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/choose-user' element={<ChooseUser/>}></Route>
      <Route path='/admin-register' element={<AdminRegister/>}></Route>

      {/*Это роуты для входа в юзеров */}
      <Route exact path='/admin-signIn' element={<AdminSigIn/>}></Route>
      <Route exact path='/student-signIn' element={<StudentSignIn/>}></Route>
      <Route exact path='/teacher-signIn' element={<TeacherSignIn/>}></Route>
    </Routes>
   </Router>
  )
}

export default App
