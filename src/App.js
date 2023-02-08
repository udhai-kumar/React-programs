import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Prime } from './component/prime';
import { Fibanocci } from './component/fibanoci';
import { Sort } from './component/sort';
import Palindrome from './component/palindrome';
import Reverse from './component/reverseString';
import { Sum } from './component/sum';
import { Duplicates } from './component/duplicate';
import Character from './component/character';
import { Removestring } from './component/removechar';
import { Second } from './component/secondMax';
import { Routes, Route, Link } from 'react-router-dom'
import { Header } from './component/header';
import { Footer } from './component/Footer'
function App() {
  return (
    <div className='cont'>
      <Header />
      <div className='container-fluid mt-2 mb-2 bg-dark'>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
            <h2>Select</h2>
            <div className='d-flex flex-column my-3 justify-content-center align-items-center mx-3' >
              <button className='btn btn-info btn-sm mt-2 btns'><Link to='/prime' className='link'>Prime</Link></button>
              <button className='btn btn-info btn-sm mt-2 btns'><Link to='/palindrome' className='link'>Palindrome</Link></button>
              <button className='btn btn-info btn-sm mt-2 btns'><Link to='/arraysum' className='link'>Array Sum</Link></button>
              <button className='btn btn-info btn-sm mt-2 btns'><Link to='/fibbonaci'className='link'>Fibbonacci Series</Link></button>
              <button className='btn btn-info btn-sm mt-2 btns'><Link to='/duplicates'className='link'>Remove Duplicates</Link></button>
              <button className='btn btn-info btn-sm mt-2 btns'><Link to='/removestring'className='link'>Remove String</Link></button>
              <button className='btn btn-info btn-sm mt-2 btns'><Link to='/strreverse'className='link'>String Reverse</Link></button>
              <button className='btn btn-info btn-sm mt-2 btns'><Link to='/character'className='link'>Character Occurence</Link></button>
              <button className='btn btn-info btn-sm mt-2 btns'><Link to='/arraysort'className='link'>Array Sort</Link></button>
              <button className='btn btn-info btn-sm mt-2 btns'><Link to='/secondlarge'className='link'>Second largest </Link></button>
            </div>
          </div>
          <div className='col-lg-9 col-md-9 col-sm-6 col-xs-6 box my-2  py-2'>
            <div className=' my-auto'>
              <Routes>
                <Route path='/' element={<Prime />} />
                <Route path='/prime' element={<Prime />} />
                <Route path='/arraysum' element={<Sum />} />
                <Route path='/fibbonaci' element={<Fibanocci />} />
                <Route path='/duplicates' element={<Duplicates />} />
                <Route path='/removestring' element={<Removestring />} />
                <Route path='/strreverse' element={<Reverse />} />
                <Route path='/secondlarge' element={<Second />} />
                <Route path='/character' element={<Character />} />
                <Route path='/palindrome' element={<Palindrome />} />
                <Route path='/arraysort' element={<Sort />} />

              </Routes>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
