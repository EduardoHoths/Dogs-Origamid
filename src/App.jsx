import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/LoginComponents/Login/Login";
import User from "./Components/UserComponents/User/User";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import { UserStorage } from "./UserContext";
import Photo from "./Components/PhotoComponents/Photo/Photo";
import UserProfile from "./Components/UserComponents/UserProfile/UserProfile";
import NotFound from "./Components/NotFound/NotFound";
import { ContainerApp, MainApp } from "./StyleApp";

const App = () => {
    return (
        <ContainerApp>
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <MainApp>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="login/*" element={<Login />} />
                            <Route
                                path="conta/*"
                                element={
                                    <ProtectedRoute>
                                        <User />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="foto/:id" element={<Photo />} />
                            <Route
                                path="perfil/:user"
                                element={<UserProfile />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </MainApp>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
            <GlobalStyle />
        </ContainerApp>
    );
};

export default App;
