
import './resources/css/main.css';
import Example from './components/Example/Example';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Parent from './components/Parent/Parent';

function App() {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ marginTop: 10 }}>
                <Parent />
            </div>
        </div>
    );
}

export default App;
