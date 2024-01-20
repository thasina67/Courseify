import { HomeSignin } from './components/HomeSignin';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { HomeCourse } from './components/HomeCourse';
import './App.css';
import { PopularCourses } from './components/PopularCourses';
import { RoadMaps } from './components/RoadMaps';
import { AdminHome } from './Admin/admin_frontend/pages/admin_home'
import { CoursesContextProvider } from './Admin/admin_frontend/context/CourseContext';
import { AuthContextProvider } from './Admin/admin_frontend/context/AuthContext';
// import { SigninPages } from './components/signin_pages';
import { SigninPages } from './components/signin_pages';
import { SignUp } from './components/singn_up';
import { FindTutors } from './components/FindTutors';
import { JoinAsTutor } from './components/JoinAsTutor';
import About from './components/AboutUs';
import { ForgotPassword } from './components/ForgotPassword';
import Userprofile from './components/Userprofile';
import Login from './Admin/admin_frontend/pages/login';
import Signup from './Admin/admin_frontend/pages/signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Main/>}/>
        <Route path = "/home" element = {<HomeSignin/>}/>
        <Route path = "/courses" element = {<PopularCourses/>}/>
        <Route path = "/tutors" element = {<FindTutors/>}/>  
        <Route path = "/roadmaps" element = {<RoadMaps/>}/>
        <Route path = "/contact" element = {<About/>}/> 
        <Route path = "/courses_by_category" element = {<HomeCourse/>}/> 
        <Route path = "/join_as_tutor" element = {<JoinAsTutor/>}/>
        <Route path = "/forgot_password" element = {<ForgotPassword/>}/>
        <Route path = "/my_profile" element = {<Userprofile/>}/>
        <Route
          path="/admin"
          element={
            <AuthContextProvider>
              <CoursesContextProvider>
                <AdminHome />
              </CoursesContextProvider>
            </AuthContextProvider>
          }
        />
        <Route
          path="/admin/signup"
          element={
            <AuthContextProvider>
                <Signup/>
            </AuthContextProvider>
          }
        />
        <Route
          path="/admin/login"
          element={
            <AuthContextProvider>
                <Login/>
            </AuthContextProvider>
          }
        />
        <Route path = "/sign_in" element = {<SigninPages/>}/>
        <Route path="/create_account" element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default App;
