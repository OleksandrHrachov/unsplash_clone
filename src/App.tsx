import './App.scss'
import {Routes, Route} from 'react-router-dom';
import { Layout } from './components/Layout';
import { Gallery } from './components/Gallery';
import { ImagePage } from './components/ImagePage';

function App() {
  return (
    <div className='app-wrapper'>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Gallery />} />
        <Route path='/photo/:id' element={<ImagePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
