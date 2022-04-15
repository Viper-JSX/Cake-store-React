import './App.css';
import { dispatch } from './index.js';
import Layout from './components/Layout/Layout';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ADD_CAKE_TO_CART, ADD_CAKE_TO_STORE, CHANGE_SEARCH_TYPE, LOGIN, LOGOUT, REGISTER, SEARCH_BY_SEARCH_TERM, UPDATE_CAKE_IN_STORE } from './redux/actions/action_types';
import { addCakeToCartAction, checkout, removeCakeFromCartAction } from './redux/actions/cart_actions';
import { /*changeSearchType,*/ changeSortCriteriaAction, searchByCategoryAction, searchBySearchTermAction } from './redux/actions/search_actions';
import { changeSearchType, changeSortCriteria, searchByCategory, searchBySearchTerm } from './redux/thunks/search_thunk_actions';
import { emptyFieldsLeftAction } from './redux/actions/store_actions';
import { addCakeToStore, updateCakeInStore } from './redux/thunks/store_thunks';
import { changeProfileData, login, logout, register } from './redux/thunks/user_thunks';
import { addPostAction, changeProfileDataAction, logoutAction } from './redux/actions/user_actions';
import { ThemeContextProvider } from './Context/Theme_context';
import { switchThemeAction } from './redux/actions/theme_actions';
import { useSelector } from 'react-redux';
import { switchToNarrowScreenAction, switchToNarrowScreenModeAction, switchToWideScreenModeAction, toggleNavigationAction } from './redux/actions/screen_actions';

function App() {
    const theme = useSelector((state) => state.theme.themeName);
    const navigate = useNavigate();

    if(theme == "light"){
        console.log(document.body.classList)
        document.body.classList.remove("dark");
    }
    else{
        console.log(document.body.classList)
        document.body.classList.add("dark");
    }

    const handleScreenWidthChange = () => {
        console.log(document.body.clientWidth)
        if(document.body.clientWidth < 400){
            dispatch(switchToNarrowScreenModeAction());
        }
        else{
            dispatch(switchToWideScreenModeAction()); 
        }
    }

    const handleNavigationToggle = () => {
        dispatch(toggleNavigationAction());
        console.log("Toggling")
    }

    const handleThemeChange = () => {
        dispatch(switchThemeAction());
    }

    //you also need to chnage theme for body

    const handleAddToCart = (cake) => {
        dispatch(addCakeToCartAction(cake));
        navigate("/cart");
    }

    const handleRemoveFromCart = (cakeToRemove) => {
        dispatch(removeCakeFromCartAction(cakeToRemove));
    }




    const handleLogin = (loginData) => {
        dispatch(login(loginData));
    }

    const handleLogout = () => {
        dispatch(logoutAction());
    }

    const handleRegister = (registerData) => {
        dispatch(register(registerData));
    }

    const handleAddPost = (postText) => {
        dispatch(addPostAction(postText));
    }

    const handleProfileDataChange = ({ editedProfile, newPasswordData, oldProfile }) => {
        console.log(newPasswordData)
        dispatch(changeProfileData({ editedProfile, newPasswordData, oldProfile }));
    }

    const handleCakeCreate = (cake) => {
        dispatch(addCakeToStore(cake));
    }

    const handleCakeEdit = (cake) => {
        dispatch(updateCakeInStore(cake));
    }

    const handleCakeRemove = (cake) => {
        
    }

    const handleSearchTypeChange = (type) => {
        dispatch(changeSearchType({ searchType: type }));
    }

    const handleSearchBySearchTerm = (event) => {
        dispatch(searchBySearchTerm(({ searchTerm: event.target.value })));
    }

    const handleSearchByCategory = (event) => {
        dispatch(searchByCategory(({ searchCategory: event.target.value })));
    }

    const handleSortingCriteriaChange = (event) => {
        dispatch(changeSortCriteria(({ sortBy: event.target.value })));
    }

    const handleCheckout = () => {
        console.log("Checking out");
        dispatch(checkout());
        //handle chechout;
    }

    document.body.onresize = handleScreenWidthChange;

    //useEffect(() => {
    //});    

    return (
        <ThemeContextProvider value={theme}>
            <div className="App" >
                <Layout
                    handleThemeChange={handleThemeChange}
                    handleNavigationToggle={handleNavigationToggle}

                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                    handleRegister={handleRegister}
                    handleAddPost={handleAddPost}
                    handleProfileDataChange={handleProfileDataChange}
                    //handleLoginDataChange={handleLoginDataChange}

                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleCakeCreate={handleCakeCreate}
                    handleCakeEdit={handleCakeEdit}
                    handleCheckout={handleCheckout}

                    handleSearchTypeChange={handleSearchTypeChange}
                    handleSearchBySearchTerm={handleSearchBySearchTerm}
                    handleSearchByCategory={handleSearchByCategory}
                    handleSortingCriteriaChange={handleSortingCriteriaChange}
                />
            </div>
        </ThemeContextProvider>
    );
}

export default App;