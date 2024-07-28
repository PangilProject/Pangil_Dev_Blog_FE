import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {ThemeProvider} from 'styled-components';
import { theme } from './Theme';

function App() {
    return (
        <ThemeProvider theme = {theme}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
