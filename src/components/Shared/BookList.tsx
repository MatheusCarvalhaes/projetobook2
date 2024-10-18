import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../../service/api'; // Importação correta
import { Book } from '../../types'; // Importar o tipo Book

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const data = await fetchBooks();
                console.log('Dados recebidos:', data); // Verifica os dados retornados
                if (data && Array.isArray(data)) {
                    setBooks(data);
                } else {
                    setError('Dados inválidos recebidos da API.');
                }
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar a lista de livros:', error);
                setError('Erro ao buscar a lista de livros.');
                setLoading(false);
            }
        };

        getBooks();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Lista de Livros</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <a href={`/books/${book.handle}`}>{book.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
