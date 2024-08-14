import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../src/components/Home';
import ChooseUser from '../src/components/ChooseUser';
import AdminRegister from '../src/components/AdminRegister';
import AdminSigIn from './components/AdminSignin';
import StudentSignIn from './components/StudentSignin';
import TeacherSignIn from './components/TeacherSignin';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminAnnoucement from './pages/Admin/Annoucement';
import AdminAssignment from './pages/Admin/Assignment';
import AdminAttendance from './pages/Admin/Attendance';
import AdminClasses from './pages/Admin/Classes';
import AdminEventCalendar from './pages/Admin/EventCalender';
import AdminExams from './pages/Admin/Exam';
import AdminLibrary from './pages/Admin/Library';
import AdminPerformance from './pages/Admin/Performance';
import AdminSettings from './pages/Admin/SettingsProfile';
import AdminSidebar from './pages/Admin/Sidebar';
import AdminStudents from './pages/Admin/Students';
import AdminTeacher from './pages/Admin/Teachers';


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


      {/*Роуты для admin  */}
      <Route path='/admin-dashboard' element={<AdminDashboard/>}></Route>
      <Route path='/admin-annoucement' element={<AdminAnnoucement/>}></Route>
      <Route path='/admin-assignments' element={<AdminAssignment/>}></Route>
      <Route path='/admin-attendance' element={<AdminAttendance/>}></Route>
      <Route path='/admin-classes' element={<AdminClasses/>}></Route>
      <Route path='/admin-event' element={<AdminEventCalendar/>}></Route>
      <Route path='/admin-exams' element={<AdminExams/>}></Route>
      <Route path='/admin-library' element={<AdminLibrary/>}></Route>
      <Route path='/admin-performance' element={<AdminPerformance/>}></Route>
      <Route path='/admin-settings' element={<AdminSettings/>}></Route>
      <Route path='/admin-sidebar' element={<AdminSidebar/>}></Route>
      <Route path='/admin-students' element={<AdminStudents/>}></Route>
      <Route path='/admin-teachers' element={<AdminTeacher/>}></Route>

    </Routes>
   </Router>
  )
}

export default App
