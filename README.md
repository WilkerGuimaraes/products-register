## Página inicial

![home_page](https://imgur.com/D9sRfjW.png)

## Demonstração

# Registro de produtos

## 📃 Descrição

Este é um projeto front-end onde foi desenvolvido uma página web de cadastro de produtos. Esta aplicação possui diversos conceitos e funcionalidades avançadas, bem populares em projetos front-end. Tais como: formulário de cadastro de um novo produto, conceitos de HTTP state, URL state para criar um sistema de filtragem e paginação.

## 🛠 Tecnologias

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## 🧰 Recursos

- `json-server`: Este projeto não possui uma API integrada, por isso utiliza o json-server para simular um servidor back-end para fins de teste para armazenar a lista de produtos. Os produtos ficam salvos no arquivo `server.json`.
- `react-hook-form`: é uma biblioteca React que utiliza React Hooks para gerenciar o estado dos campos de formulários. Neste projeto esta biblioteca esta sendo utilizada para lidar com a validação dos campos e controlar o envio do formulário.
- `zod`: é uma biblioteca de validação de esquemas em TypeScript. Nesta aplicação ela está sendo utilizada para definir o esquema de validação dos produtos do formulário.
- `react-query`: é uma biblioteca React que serve para o gerenciamento de estado assíncrono. Seu uso neste projeto é lidar com a mutação de produtos quando o formulário é enviado (criação de um novo produto), serve também para atualizar automaticamente os produtos da lista após a mutação ser concluída com sucesso atualizando o cache dos produtos no navegador.
- `react-router-dom`: é uma biblioteca muito útil para criar aplicações React com múltiplas páginas ou rotas. Foi usado neste projeto para permitir a navegação entre partes diferentes da lista de produtos sem a necessidade de recarregar a página novamente. E também foi usado para criar um sistema de filtragem de produtos.
- `shadcniu`: é uma biblioteca de componentes de interface do usuário (UI) para aplicações React, que combina a simplicidade e a flexibilidade de componentes estilizados com o poder e a personalização do Tailwind CSS. Neste projeto foi utilizado desta biblioteca os componentes: `button`, `dialog`, `input`, `label`, `pagination` e `table`.

## Funcionamento

- O usuário pode criar um novo produto através de um formulário.
- O usuário pode navegar na lista de produtos por meio da paginação presente no projeto.
- O usuário pode filtrar os produtos da lista definindo seu `id` e nome.

Este projeto aborda os conceitos de HTTP state através da bilioteca `react-query` para gerenciar automaticamente o cache de produtos no navegador. Ou seja, quando o usuário avança entre as páginas os produtos são salvos em cache permitindo assim uma melhor experiência do usuário. Pois quando o usuário retorna para as páginas aos quais ele já tenha carregado anteriormente, os produtos daquela página são atualizados instantaneamente.

Para compreender isso, este projeto possui um delay de 2 segundos para que o estado de uma página ao qual o usuário nunca tenha acessado antes seja carregada. Para que quando retornar à página anterior seja possível ver a mudança imediata do estado da lista.

Outro uso do HTTP state neste projeto é quando ocorre a mutação. Ou seja, sempre que um novo produto for cadastrado através do formulário, as informações da lista de produtos são atualizadas renderizando este novo produto em tela sem a necessidade de atualizar a página.

E mais um conceito abordado neste projeto foi o de URL State, usado para criar um sistema de filtragem de produtos através da alteração da URL aplicando as informações solicitadas. E isso foi feito utilizando a biblioteca de rotas chamada `react-router-dom`.

## 💻 Executando

1. Escolha um diretório na sua máquina, acesse-o pelo terminal e execute o seguinte comando para clonar este repositório:

```

git clone https://github.com/WilkerGuimaraes/products-register.git

```

2. Acesse este projeto através do seu editor de código e execute o seguinte comando para instalar todas as dependências:

```

npm install

```

3. Após instalar todas as dependências, execute o seguinte comando para executar o json-server:

```

npm run server

```

4. E por fim, execute o seguinte comando para executar o front-end:

```

npm run dev

```

Assim que o projeto estiver rodando, acesse o seu `http://localhost:5173/`

## 🙋‍♂️ Colaboradores

Este projeto foi desenvolvido por mim Wilker Guimarães, com o objetivo de desenvolver e aplicar os meus conhecimentos de desenvolvimento front-end e também aplicar boas práticas utilizando o react para construir interfaces mais funcionais, acessíveis e bonitas.
