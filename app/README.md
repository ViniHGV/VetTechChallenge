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
![image](https://github.com/user-attachments/assets/8d34dab6-4ef3-4795-b479-28d0fc90b133)

-   **Detalhes do Cliente:** `Rota: /`
![image](https://github.com/user-attachments/assets/63b46dd0-5427-45c7-b18e-b48bd6813895)

-   **Deleção do Cliente:** `Rota: /`
![image](https://github.com/user-attachments/assets/43300f87-88dc-4144-bc50-72b738e445df)

-   **Cadastro de Clientes:** `Rota: /customer/create`
![image](https://github.com/user-attachments/assets/c715f799-ecbf-40d7-8fec-5b8292311582)

-   **Edição de Clientes:** `Rota: /customer/edit/${id}`
![image](https://github.com/user-attachments/assets/c703d740-08c1-4426-a519-68228844ca2f)



### Estrutura do Projeto

-   **interfaces/Dtos:** DTOs para comunicação com a API.
-   **services:** Serviços para chamadas HTTP.
-   **pages:** Páginas da aplicação.
-   **components:** Componentes reutilizáveis.
-   **schemas:** Validação de formulários.
-   **utils:** Funções utilitárias e máscaras.
-   **lib/Api:** Configuração do Axios.
