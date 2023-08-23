import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { TabBar } from './components';
import GoodTab1 from './pages/goodTab1';
import GoodTab2 from './pages/goodTab2';
import GoodTab3 from './pages/goodTab3';
import { Fragment } from 'react';

function App() {
    const location = useLocation();
    return (
        <Fragment>
            <div className="App">
                <Routes location={location} key={location.pathname}>
                    {/* <TabBar /> */}
                    <Route path="/goodTab1" element={<GoodTab1 />} />
                    <Route path="/goodTab2" element={<GoodTab2 />} />
                    <Route path="/goodTab3" element={<GoodTab3 />} />
                </Routes>
            </div>
        </Fragment>
    );
}

export default App;
