
import Header from "./components/header/Header";
import s from './App.module.css'
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
function App() {
    return (
        <div className={s.container}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
