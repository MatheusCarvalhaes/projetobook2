import axios from 'axios';
import { Book } from '../types'; // Corrija a importação aqui, se necessário

const API_BASE_URL = 'https://stephen-king-api.onrender.com/api/books';

// Função para buscar a lista de livros
export const fetchBooks = async (): Promise<Book[]> => {
    const response = await axios.get(API_BASE_URL);
    return response.data.data; // Ajuste se a estrutura dos dados da resposta for diferente
};

// Função para buscar os detalhes de um livro
export const fetchBookDetails = async (id: string): Promise<Book> => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    const data = response.data;

    return {
        id: data.id,
        year: data.Year,
        title: data.Title,
        handle: data.handle,
        publisher: data.Publisher,
        isbn: data.ISBN,
        pages: data.Pages,
        notes: data.Notes || [],
        villains: data.villains || [],
    } as Book;
};
