import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import ToDoList from "./components/ToDoList";
import { Container } from "reactstrap";

import "./App.css";
import { Provider } from "react-redux";

import store from "./store";
import ItemModal from "./components/ItemModal";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppNavbar />
                <Container>
                    <ItemModal />
                    <ToDoList />
                </Container>
            </div>
        </Provider>
    );
}

export default App;
