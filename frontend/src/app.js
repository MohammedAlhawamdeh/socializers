import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage";
import CoursePage from './pages/CoursePage'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/course/:id" component={CoursePage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
