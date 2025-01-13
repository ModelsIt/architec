import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { AppRouts } from "./routes/AppRoutes";
import { Footer } from "./UI/footer/footer.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <AppRouts />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
