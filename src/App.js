
import Header from "./components/header/Header";
import s from './App.module.css'
import Main from "./components/main/Main";
function App() {
    return (
        <div className={s.container}>
            <Header/>
            <Main/>
            <footer>

            </footer>
        </div>
    );
}

export default App;
