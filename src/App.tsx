
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import HomePage from './pages/HomePage';
import AddProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';
import UserManagement from './pages/UserManagement';
import AccountInfo from './pages/SignIn/AccountInfo';
import ErrorPage from './pages/ErrorPage';
import ProjectList from './pages/ProjectList/ProjectList';

function App() {
  return (
    <Router>
      <MenuBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/project' element={<AddProjectPage />} />
        <Route path='/project-list' element={<ProjectList />} />
        <Route path='/tasks' element={<TaskPage />} />
        <Route path='/task/:projectId' element={<TaskPage />} />
        <Route path='/user-management' element={<UserManagement />} />
        <Route path='/sign-in' element={<AccountInfo/>} />
        <Route path='/*' element={<ErrorPage/>} />
      </Routes>

      

    </Router>

    
  );
}

export default App;
