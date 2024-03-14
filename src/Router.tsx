 import { Routes, Route} from 'react-router-dom';

import { PageAlphabet } from './pages/PageAlphabet'
import { PageNotFound } from './pages/PageNotFound';

 export function Router(){
        return (
            <Routes>
                <Route path='/' element={<PageNotFound/>} />
                <Route path='/alphabet' element={<PageAlphabet/>} />
              
            </Routes>
        )

 }