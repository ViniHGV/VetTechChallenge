
# Gestão de Clientes

## Backend

### Visão Geral

API RESTful desenvolvida em ASP.NET Core 8 para gerenciar uma lista de clientes. Utiliza uma arquitetura de três camadas (Application, Core e Infrastructure) e adota boas práticas como o padrão de repositório genérico, DTOs, injeção de dependências, logger de endpoints e tratamento de exceções personalizadas. Segue os princípios SOLID para modularidade e manutenção.

### Tecnologias Utilizadas

-   **ASP.NET Core 8:** Framework para APIs web.
-   **Entity Framework Core:** ORM para manipulação do banco de dados.
-   **Docker:** Containerização do banco de dados SQL Server.
-   **SQL Server:** Banco de dados relacional.
-   **SQLite:** Banco de dados em memória para fallback.
-   **Padrão Repository Genérico:** Abstração para dados.
-   **DTOs:** Objetos para transferência de dados.
-   **Exceptions Personalizadas:** Tratamento específico de erros.
-   **ILogger:** Registro de logs.
-   **Swagger/OpenAPI:** Documentação da API.
-   **CORS:** Configuração para comunicação com o frontend.

### Endpoints

1.  **Listar Todos os Clientes:** `GET /api/cliente`
2.  **Criar um Novo Cliente:** `POST /api/cliente`
3.  **Obter Detalhes de um Cliente:** `GET /api/cliente/{id}`
4.  **Atualizar um Cliente:** `PUT /api/cliente/{id}`
5.  **Excluir um Cliente:** `DELETE /api/cliente/{id}`

### Estrutura do Projeto

-   **Core:** Entidades, DTOs, interfaces e exceções personalizadas.
-   **Application:** Serviços e regras de negócios.
-   **Infrastructure:** Repositórios, contexto do banco de dados e configuração do EF Core.
-   **Api:** Controladores e configurações da API.

### Configuração

-   **Swagger:** Documentação da API configurada no `Program.cs`.
-   **CORS:** Permitindo requisições do frontend configuradas no `Program.cs`.
-   **Logger:** Configuração de logging com `ILogger`.
-   **Injeção de Dependências:** Registrando serviços e repositórios.

----------

## Frontend

### Visão Geral

Aplicação web em React para gerenciar clientes, incluindo funcionalidades de listagem, criação, edição e exclusão. Utiliza TypeScript, Vite, e várias bibliotecas para gestão de estado e formulários.

### Tecnologias Utilizadas

-   **React:** Biblioteca para construção de interfaces de usuário.
-   **TypeScript:** Superset do JavaScript para tipagem estática.
-   **Vite:** Ferramenta de construção rápida.
-   **React Router DOM:** Gerenciamento de rotas.
-   **Axios:** Cliente HTTP para requisições à API.
-   **React Query:** Gerenciamento de estado e caching de dados.
-   **React Hook Form:** Manipulação de formulários.
-   **React Toastify:** Exibição de notificações.
-   **Shadcn/UI:** Componentes de interface de usuário.
-   **Tailwind CSS:** Framework CSS utilitário para estilização.

### Páginas

-   **Lista de Clientes:** `Rota: /`
-   **Detalhes do Cliente:** `Rota: /`
-   **Cadastro de Clientes:** `Rota: /customer/create`
-   **Edição de Clientes:** `Rota: /customer/edit/${id}`

### Estrutura do Projeto

-   **interfaces/Dtos:** DTOs para comunicação com a API.
-   **services:** Serviços para chamadas HTTP.
-   **pages:** Páginas da aplicação.
-   **components:** Componentes reutilizáveis.
-   **schemas:** Validação de formulários.
-   **utils:** Funções utilitárias e máscaras.
-   **lib/Api:** Configuração do Axios.

----------

Este resumo cobre os principais aspectos do backend e frontend do projeto, destacando as tecnologias utilizadas, estrutura do projeto e principais funcionalidades.
