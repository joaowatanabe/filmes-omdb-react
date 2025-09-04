# Filmes OMDb React

Aplicação desenvolvida como desafio do programa **+praTi**.
O objetivo é consumir a API **OMDb** para buscar filmes, visualizar detalhes e gerenciar uma lista de favoritos.

---

## 📌 Funcionalidades

**Busca de filmes** pelo título
Exibição de resultados com **pôster, título e ano**
**Paginação** entre os resultados da busca
**Página de detalhes** com informações completas (diretor, elenco, gênero, sinopse, avaliação etc.)
**Favoritos**:

- Adicionar ou remover filmes da lista de favoritos
- Persistência no **localStorage**
  Tratamento de **erros e carregamento** (loading spinner e mensagens de erro)

---

## 🛠 Tecnologias Utilizadas

- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/) para chamadas HTTP
- [OMDb API](https://www.omdbapi.com/)

---

## 📂 Estrutura do Projeto

```
src/
  ├── components/
  │   ├── MovieCard.js       # Card de filme com botão de favoritos
  │   ├── MovieList.js       # Lista de filmes
  │   └── SearchBar.js       # Campo de busca
  │
  ├── pages/
  │   ├── Home.js            # Página inicial com busca + paginação
  │   ├── MovieDetails.js    # Página com detalhes do filme
  │   └── Favorites.js       # Lista de filmes favoritos
  │
  ├── services/
  │   └── api.js             # Configuração do Axios
  │
  ├── App.jsx                # Rotas principais
  ├── App.css
  ├── index.js
  └── index.css
```

---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/joaowatanabe/filmes-omdb-react.git
cd filmes-omdb-react
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Criar arquivo `.env`

Na raiz do projeto, crie um arquivo **.env** com sua chave da [OMDb API](https://www.omdbapi.com/apikey.aspx):

```
REACT_APP_OMDB_KEY=SUA_CHAVE_AQUI
```

### 4️⃣ Rodar a aplicação

```bash
npm start
```

Acesse no navegador: **[http://localhost:3000](http://localhost:3000)**

---

## 🎯 Como Usar

1. Na página inicial, digite o título de um filme no campo de busca.
2. Navegue pelos resultados usando os botões de paginação.
3. Clique em um filme para ver seus **detalhes completos**.
4. Use o botão para **adicionar ou remover dos favoritos**.
5. Acesse a página ⭐ **Favoritos** no menu para visualizar seus filmes salvos.

---

## 📸 Demonstração (prints simulados)

- Página inicial com busca
- Resultados com pôster e título
- Página de detalhes com botão de favoritos
- Lista de favoritos persistida no localStorage

---

## 👨‍💻 Autor

Desenvolvido por **João Vicente Watanabe**
📌 [LinkedIn](https://www.linkedin.com/in/joaowatanabe) | [GitHub](https://github.com/joaowatanabe)
