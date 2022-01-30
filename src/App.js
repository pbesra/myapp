
import './resources/css/main.css';
import Example from './components/Example/Example';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContextProvider from './components/ContextProvider/ContextProvider';


function App() {
    return (
        <div style={{ textAlign: 'center' }}>
            <ContextProvider>
                <div style={{ marginTop: 10 }}>

                </div>
            </ContextProvider>


        </div>
    );
}

export default App;
