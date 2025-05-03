import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import HomePage from './pages/HomePage';
import AddProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';
import UserManagement from './pages/UserManagement';
import AccountInfo from './pages/SignIn/AccountInfo';
import ErrorPage from './pages/ErrorPage';
import ProjectList from './pages/ProjectList/ProjectList';
import { useSelector } from 'react-redux';
import { RootState } from './features/store';
import ProtectRouts from './components/ProtectRouts/ProtectRouts';
import ProfileInfo from './pages/ProfileInfo/ProfileInfo';

function AppContent() {
  const location = useLocation();
  const projects = useSelector((state: RootState) => state.projects);

  return (
    <>
      {location.pathname !== '/' && <MenuBar />}

      <Routes>
        <Route path='/home' element={<ProtectRouts><HomePage /></ProtectRouts>} />
        <Route path='/project' element={<ProtectRouts><AddProjectPage /></ProtectRouts>} />
        <Route path='/project-list' element={<ProtectRouts><ProjectList /></ProtectRouts>} />
        <Route path='/tasks' element={<ProtectRouts><TaskPage /></ProtectRouts>} />


        <Route path='/task/:projectId' element={<ProtectRouts><TaskPage /></ProtectRouts>} />

        <Route path='/user-management' element={<ProtectRouts><UserManagement /></ProtectRouts>} />
        <Route path='/profile' element={<ProtectRouts><ProfileInfo /></ProtectRouts>} />
        <Route path='/' element={<AccountInfo />} />
        <Route path='/*' element={<ProtectRouts><ErrorPage /></ProtectRouts>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
