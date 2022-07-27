import React, { useEffect, useState, Suspense } from "react";
// import { getPost, deletePost } from "./Redux/features/postSlice";
// import { useDispatch, useSelector } from "react-redux";
// import Three from "./THREE-FIBER/ThreeDemo";
// import susView from "./THREE-FIBER/suspend";
// import { UserContextProvider } from "./Context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ShowUser from "./Components/User/ShowUser";
// import AddUser from "./Components/User/AddUser";
import ProductList from "./Components/ShoppingCart/ProductList";
import CartPage from "./Components/ShoppingCart/CartPage";
import Header from "./Components/ShoppingCart/Header";
import PageNotFound from "./Components/ShoppingCart/PageNotFound";
import "./style.css";
function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/cart" exact element={<CartPage />} />
				<Route path="*" element={<PageNotFound />} />
				<Route path="/" exact element={<ProductList />} />
			</Routes>
		</Router>
	);
}

export default App;
