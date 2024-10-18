import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Agora usamos Routes e Route
import Home from './pages/Home';  // Página da lista de livros
import Details from './pages/Details';  // Página de detalhes do livro

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Página inicial com lista de livros */}
                <Route path="/" element={<Home />} />
                
                {/* Página de detalhes do livro */}
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </Router>
    );
};

export default App;
