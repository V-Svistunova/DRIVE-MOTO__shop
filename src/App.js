//styles
import s from './App.module.scss'

// components
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer"

//images
import productImg1 from './assets/images/product/img-1.png';
import productImg2 from './assets/images/product/img-2.png';
import productImg3 from './assets/images/product/img-3.png';
import productImg4 from './assets/images/product/img-4.png';
import productImg5 from './assets/images/product/img-5.png';
import productImg6 from './assets/images/product/img-6.png';


import { BrowserRouter } from 'react-router-dom';


function App() {
    

    return (
        <BrowserRouter>
            <div className={s.container}>
                <Header/>
                <Content/>
                <Footer/>                
            </div>
        </BrowserRouter>        
    );
}

export default App;
