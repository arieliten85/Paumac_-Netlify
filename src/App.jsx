
import React from "react";

import Header from "./components/header/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemCardDetails from "./components/ItemCardDetails";
import Productos from "./components/NavBar/Productos";
import Galeria from "./components/NavBar/Galeria";
import Bienvenidos from "./components/NavBar/Bienvenidos";
import Contacto from "./components/NavBar/Contacto";
import ItemFullScreem from "./components/ItemFullScreem"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import CheckOut from "./components/CheckOut"
import Promociones from "./components/Promocion";
import ModuModoloSocial from "./components/ModuModoloSocial";
import { CustomProvider } from "./UseContext/CardContxt"
import Navegacion from "./components/NavBar/Navegacion";


export function App() {

  return (
    <Router>
      <CustomProvider>
        
        <Header />
        <Navegacion />
        <Switch>
          <Route path="/" exact> <Productos /> <ModuModoloSocial /> </Route>
          <Route path="/bienvenidos" > <Bienvenidos />   <ModuModoloSocial /> </Route>
          <Route path="/productos" > <Productos /> <Promociones /> </Route>
          <Route path="/contacto" ><Contacto /> </Route>
          <Route path="/galeria"> <Galeria /></Route>
          
          <Route path="/sesiones/:id"> <ItemCardDetails /> </Route>
          <Route path="/ImgMaxim/:id"> <ItemFullScreem /> </Route>
          <Route path="/cart"> <Cart /> </Route>
          <Route path="/CheckOut"> <CheckOut /> </Route>
        </Switch>
        <Footer />
       
       
      </CustomProvider>
    </Router>
  );
}
