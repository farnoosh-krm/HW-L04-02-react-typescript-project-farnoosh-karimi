
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';
import UserManagement from './pages/UserManagement';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <MenuBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/tasks' element={<TaskPage />} />
        <Route path='/user-management' element={<UserManagement />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </Router>

    
  );
}

export default App;
