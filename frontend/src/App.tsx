import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Create } from './pages/Create';
import { HomePage } from './pages/HomePage';
import { AllContacts } from './pages/AllContacts';
import { Contact } from './pages/Contact';
import { UpdateContact } from './pages/UpdateContact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/all" element={<AllContacts />} />
          <Route path="/update/:id" element={<UpdateContact />} />
          <Route path="/contact/:id" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;