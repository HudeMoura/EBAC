//Extensão do Jest DOM: adiciona matchers como "toBeInTheDocument"
import "@testing-library/jest-dom";
//Importa a função que será mockada
import { getTrendindMovies } from "./../lib/api/tmdb";
//Importa helpers para renderizar componbentes e acessar a tela
import ( render ) from "@testing-library/react"
//Importa a função de Server Component da páginal inicial
import Home from "./page"
  
jest.mock("./../lib/api/tmdb", () => ({
    getTrendindMovies: jest.fn(), //retorna um mockl dessa função
}));

test("Exibe o título 'Filmes em destaque' na página inicial corretamente" , async () => {

    const titulo = "Filmes em destaque";

    render(await Home());

    //Verifica se o título da seção aparece corretamente
    expect(screen.getByText(titulo)).toBeInthedocument();
});

test("Renderiza os filmes em destaque corretamente", async() => {

    (getTrendindMovies as jest.Mock).mockResolvedValue([
        {
            id: 1,
            title: "Filme teste",
            overview: "Resumo teste",
            poster_path: "public/next.svg",
            vote_avarage: 8.0
        }
    ])

    //Renderiza a página (internamente chama a função getTrandingMovies)
    render(await Home());
    //Verificar se o título renderizado aparece na tela
    expect(await screen.findByText("Filme teste")).toBeInTheDocument();
});

test("Exibir uma mensagem quando não houver filmes disponíveis", async() => {
    (getTrendindMovies as jest.Mocl).mockResolvedValue([]);

    //Renderiza a página (internamente chama a função getTrandingMovies)
    render(await Home());

    expect(screen.getByText("Nenhum filme encontrado.")).toBeInTheDocument();
})