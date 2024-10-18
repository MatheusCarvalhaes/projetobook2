export interface Book {
    id: number;         // ID do livro
    year: number;      // Ano de publicação
    title: string;     // Título do livro
    handle: string;    // Manipulação ou slug do livro
    publisher: string; // Editora do livro
    isbn: string;      // ISBN do livro
    pages: number;     // Número de páginas
    notes: string[];   // Notas do livro
    villains: { name: string; url: string }[]; // Vilões associados ao livro
}
