import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import PriorityInbox from "./pages/PriorityInbox";
import AllNotifications from "./pages/AllNotifications";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<PriorityInbox />} />

        <Route path="/all" element={<AllNotifications />} />
      </Routes>
    </>
  );
}

export default App;