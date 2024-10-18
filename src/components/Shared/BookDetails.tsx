import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from '../../service/api';
import { Book } from '../../types';

const Details: React.FC = () => {
    const { id } = useParams<{ id?: string }>(); // id pode ser undefined
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getBookDetails = async () => {
            if (!id) {
                console.error('ID do livro não encontrado');
                setLoading(false);
                return; // Se o id for undefined, não faz a requisição
            }

            console.log('ID do livro:', id); // Verificando se o ID está correto

            try {
                const data = await fetchBookDetails(id);
                setBook(data); // Certifique-se de que a resposta está correta
            } catch (error) {
                console.error('Erro ao buscar detalhes do livro:', error);
            } finally {
                setLoading(false);
            }
        };

        getBookDetails();
    }, [id]);

    if (loading) {
        return <div>Carregando detalhes...</div>; // Mensagem de carregamento
    }

    if (!book) {
        return <div>Livro não encontrado.</div>; // Mensagem se o livro não for encontrado
    }

    return (
        <div>
            <h1>{book.Title}</h1>
            <p>Ano: {book.Year}</p>
            <p>Editora: {book.Publisher}</p>
            <p>ISBN: {book.ISBN}</p>
            <p>Páginas: {book.Pages}</p>
            <h2>Vilões:</h2>
            <ul>
                {book.villains.map((villain) => (
                    <li key={villain.name}>{villain.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Details;
