import './App.css';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductDetails from './components/Product/ProductDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container container-fluid">
                    <Route path="/" component={Home} exact />
                    <Route path="/product/:id" exact component={ProductDetails} />
                </div>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
