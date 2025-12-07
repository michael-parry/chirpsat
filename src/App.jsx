import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/home/Home";
import About from "./components/about/About";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}
