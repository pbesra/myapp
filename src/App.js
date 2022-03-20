
import './resources/css/main.css';
import Example from './components/Example/Example';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContextProvider from './components/ContextProvider/ContextProvider';
import Demo from './components/Demo/Demo';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import Overlay from './components/Overlay/Overlay';
import FormHandle from './components/FormHandle/FormHandle';

function App() {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ margin: 50, }}>
                <FormHandle />
            </div>
        </div>
    );
}

export default App;
