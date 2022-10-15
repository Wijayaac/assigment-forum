import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Template } from "./pages/Root";
import { AddThread, DetailThread, HomeThread } from "./pages/Thread";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Template />}>
            <Route index element={<HomeThread />} />
            <Route path='/add-thread' element={<AddThread />} />
            <Route path='/thread/:id' element={<DetailThread />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
