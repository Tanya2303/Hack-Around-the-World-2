import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Explore from '../pages/Explore';
import TajMahal from '../pages/TajMahal';
import Colosseum from '../pages/Colosseum';
import Eiffeltwoer from '../pages/Eiffeltwoer';
import KukulcanPyramid from '../pages/KukulcanPyramid';
import Greatwall from '../pages/Greatwall'
import Translate from '../pages/Translate'

function Index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/explore/tajmahal" element={<TajMahal />} />
                <Route path="/explore/colosseum" element={<Colosseum />} />
                <Route path="/explore/eiffeltwoer" element={<Eiffeltwoer />} />
                <Route path="/explore/kukulcanpyramid" element={<KukulcanPyramid />} />
                <Route path="/explore/greatwall" element={<Greatwall />} />
                <Route path="/translate" element={<Translate />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
