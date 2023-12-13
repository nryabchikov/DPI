import React from "react";
import Header from "./components/Home/Header/Header";
import Body from "./components/Home/Body/Body";
import developersInfo from "./data/developersInfo";
import List from "./components/List/List";
import Figure from "./components/Figure/Figure";
import {HashRouter, Route, BrowserRouter, Routes} from "react-router-dom";
import figuresDatabase from "./data/personsDatabase";
import "./App.css";

const App = () => {
    let today = Date.now() / 1000 / 60 / 60 / 24;
    today = Math.floor(today);
    let personIndex = (today - 1) % figuresDatabase.length;
    let randomPerson = figuresDatabase[personIndex];
    return (
        <div className="App">
            <div className="gradient__bg">
                <BrowserRouter>
                    <div>
                        <Header />
                        <div>
                            <Routes>
                                <Route
                                    path="/*"
                                    element={
                                        <Body
                                            mainPerson={randomPerson}
                                            developers_info={developersInfo}
                                        />
                                    }
                                />
                                <Route
                                    path="/list"
                                    element={<List info={figuresDatabase} />}
                                />
                                {figuresDatabase.map((figure) => (
                                    <Route
                                        path={figure.url}
                                        element={<Figure info={figure} />}
                                    />
                                ))}
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
