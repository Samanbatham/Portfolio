import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Layout from "./components/main/layout";
import Resume from "./pages/resume";
import Ecommerce from "./pages/ecommerce";
import ChatApp from "./pages/chatapp";
import PageNotFound from "./pages/pagenotfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/main" replace />} />
        <Route path="main" element={<HomePage />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
        <Route path="ecommerce" element={<Ecommerce />} />
        <Route path="chatapp" element={<ChatApp />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
