import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Views/Home';
import Contact from './Views/Contact';

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='Contact' element={<Contact/>} />
                
            </Routes>
        </BrowserRouter>
    );
}