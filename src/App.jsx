import './App.css';
import { TabBar } from './components';
import GoodTab1 from './pages/goodTab1';
import GoodTab2 from './pages/goodTab2';
import GoodTab3 from './pages/goodTab3';

function App() {
    return (
        <div className="App">
            {/* <TabBar /> */}
            {/* <GoodTab3 /> */}
            {/* <GoodTab1 /> */}
            <GoodTab2 />
        </div>
    );
}

export default App;
