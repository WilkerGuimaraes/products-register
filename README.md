# Registro de produtos

## 📃 Descrição

Este é um projeto full-stack onde foi desenvolvido uma página web de cadastro de produtos. Esta aplicação possui diversos conceitos e funcionalidades avançadas, bem populares em projetos de desenvolvimento web. Tais como: formulário de cadastro de um novo produto, conceitos de HTTP state, URL state para criar um sistema de filtragem e paginação, consumo de API REST e integração com um banco de dados postegreSQL.

## 🛠 Tecnologias - frontend

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## 🧰 Recursos

- `react-hook-form`: é uma biblioteca React que utiliza React Hooks para gerenciar o estado dos campos de formulários. Neste projeto esta biblioteca esta sendo utilizada para lidar com a validação dos campos e controlar o envio do formulário.
- `zod`: é uma biblioteca de validação de esquemas em TypeScript. Nesta aplicação ela está sendo utilizada para definir o esquema de validação dos produtos do formulário.
- `react-query`: é uma biblioteca React que serve para o gerenciamento de estado assíncrono. Seu uso neste projeto é lidar com a mutação de produtos quando o formulário é enviado (criação de um novo produto), serve também para atualizar automaticamente os produtos da lista após a mutação ser concluída com sucesso atualizando o cache dos produtos no navegador.
- `react-router-dom`: é uma biblioteca muito útil para criar aplicações React com múltiplas páginas ou rotas. Foi usado neste projeto para permitir a navegação entre partes diferentes da lista de produtos sem a necessidade de recarregar a página novamente. E também foi usado para criar um sistema de filtragem de produtos.
- `shadcniu`: é uma biblioteca de componentes de interface do usuário (UI) para aplicações React, que combina a simplicidade e a flexibilidade de componentes estilizados com o poder e a personalização do Tailwind CSS. Neste projeto foi utilizado desta biblioteca os componentes: `button`, `dialog`, `input`, `label`, `pagination` e `table`.

## Funcionamento

- [✔] O usuário pode criar um novo produto através de um formulário.
- [✔] O usuário pode navegar na lista de produtos por meio da paginação presente no projeto.
- [✔] O usuário pode filtrar os produtos da lista definindo seu `id`, `nome` ou ambos.
- [✔] O usuário pode deletar um produto.

Este projeto aborda os conceitos de HTTP state através da bilioteca `react-query` para gerenciar automaticamente o cache de produtos no navegador. Ou seja, quando o usuário avança entre as páginas os produtos são salvos em cache permitindo assim uma melhor experiência do usuário. Pois quando o usuário retorna para as páginas aos quais ele já tenha carregado anteriormente, os produtos daquela página são atualizados instantaneamente.

Outro uso do HTTP state neste projeto é quando ocorre a mutação. Ou seja, sempre que um novo produto for cadastrado através do formulário, as informações da lista de produtos são atualizadas renderizando este novo produto em tela sem a necessidade de atualizar a página.

E mais um conceito abordado neste projeto foi o de URL State, usado para criar um sistema de filtragem de produtos através da alteração da URL aplicando as informações solicitadas. E isso foi feito utilizando a biblioteca de rotas chamada `react-router-dom`.

Os dados dos produtos são resgatados através de uma API REST que realiza a integração do frontend com um banco de dados relacional postegreSQL.

Acesse este link para ter mais informações: https://github.com/WilkerGuimaraes/products-registration-backend

## 🙋‍♂️ Colaboradores

Este projeto foi desenvolvido por mim Wilker Guimarães, com o objetivo de desenvolver e aplicar os meus conhecimentos de desenvolvimento web criando uma aplicação fullstack. E também aplicar boas práticas utilizando o react para construir interfaces frontend oferecendo funcionalidades como: Visualização de produtos, criação de produtos, exclusão de produtos, filtro de pesquisa e paginação.
