import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
     <Header/>
     <main>
       <Container>
         <HomePage/>
       </Container>
     </main>
     <Footer/>
    </>
  );
}

export default App;
