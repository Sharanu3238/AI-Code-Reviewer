import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import CodeReview from "./pages/CodeReview";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/review" element={<CodeReview />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;