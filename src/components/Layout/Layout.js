import { useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';

import Header from "./Header/Header";
import Store from "./Store/Store";
import Cart from "./Cart/Cart";
import Navigation from "./Header/Navigation/Navigation";
import Cake from "../Cake/Cake";

import UserProfile from "./User_profile/User_profile";
import AuthForm from "./Auth_form/Auth_form";
import Login from "./Auth_form/Login";
import Register from "./Auth_form/Register";
import CakeEditor from "./Cake_editor/Cake_editor";
import HomePage from "./Home_page/Home_page";
import Search from "./Search/Search";
import ErrorWindow from "../Error/Error_window";
import Footer from "./Footer/Footer";

function Layout({ handleThemeChange, handleNavigationToggle, handleLogin, handleLogout, handleRegister, handleAddPost, handlePostDelete, handleProfileDataChange, handleAddToCart, handleRemoveFromCart, handleCakeCreate, handleCakeEdit, handleCheckout, handleSearchTypeChange, handleSearchBySearchTerm, handleSearchByCategory, handleSortingCriteriaChange }){
    const cakes = useSelector((state) => state.cakeStore.cakes);
    const error = useSelector((state) => state.error.errorText);
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <div id="layout" className={theme}>
            <Header 
                handleThemeChange={handleThemeChange} 
                handleNavigationToggle={handleNavigationToggle}
            />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} index />

                <Route path="/store" element={
                    <>
                        <Search 
                            handleSearchTypeChange={handleSearchTypeChange}
                            handleSearchBySearchTerm={handleSearchBySearchTerm}
                            handleSearchByCategory={handleSearchByCategory}
                            handleSortingCriteriaChange={handleSortingCriteriaChange}
                        />
                        <Store />
                    </>
                }>                 
                </Route>

                {
                    cakes.map((cake) => {   
                        return (
                            <Route path={`store/${cake.title.replace(" ", "-").toLowerCase()}`} element={<Cake cake={cake} handleAddToCart={handleAddToCart} key={cake.title} />} key={cake.title} />
                        );
                    })
                } 

                {/*<Route path="/store/:cake_name" element />  To dispay cake separately*/}
                <Route path="/store/:cake_name/edit" element={<CakeEditor mode="edit" handleCakeEdit={handleCakeEdit} /*cake={cake}*/ />} />
                <Route path="/store/create-cake" element={<CakeEditor mode="create" handleCakeCreate={handleCakeCreate} />} />
                <Route path="/cart" element={<Cart handleRemoveFromCart={handleRemoveFromCart} handleCheckout={handleCheckout} />} />
                <Route path="/user" element={<UserProfile handleLogout={handleLogout} handleAddPost={handleAddPost} handlePostDelete={handlePostDelete} handleProfileDataChange={handleProfileDataChange} />} />
                <Route path="/authorization" element={<AuthForm />}>
                    <Route path="login" element={<Login handleLogin={handleLogin}/>} />
                    <Route path="register" element={<Register handleRegister={handleRegister} />} />
                </Route>
            </Routes>

            <ErrorWindow errorMessage={error} />
            <Footer />
        </div>
    );
}

export default Layout;