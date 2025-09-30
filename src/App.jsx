import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertiesPage from './components/pages/PropertiesPage';
import Sidebar from './components/layout/Sidebar';
import BgCover from './components/ui/BgCover';
import { RefContextProvider } from './context/RefContextProvider';

function App() {
  return (
    <RefContextProvider>
      <Router>
        <BgCover />
        <div className='h-screen flex xl:bg-gray-200'>
          <Sidebar />
          <main className='flex-1 p-2 xl:px-14 xl:py-8 overflow-y-auto overflow-x-hidden'>
            <Routes>
              <Route path='/' />
              <Route path='/propiedades' element={<PropertiesPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </RefContextProvider>
  );
}

export default App;
