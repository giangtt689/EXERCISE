import logo from './logo.svg';
import './App.css';
import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";
import DataProvider from "./components/DataProvider";

function App() {
    return (
        <DataProvider>
            <div className="App">
                <h1>To do List</h1>
                <FormInput></FormInput>
                <List></List>
                <Footer></Footer>

            </div>
        </DataProvider>
    );
}

export default App;
