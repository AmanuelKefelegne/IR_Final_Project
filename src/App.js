import { Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './Components/Search';
import { SearchHome } from './Components/SearchHome';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/search/:query' element={<Search />} />
        <Route index element={<SearchHome />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
