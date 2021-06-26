import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <>
     <Header/>
     <main>
       <Container>
         <h1>Welcome to Soicalizers</h1>
       </Container>
     </main>
     <Footer/>
    </>
  );
}

export default App;
