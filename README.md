# frontend-forleven-test

<!-- 1405x425 -->

![Foto de Capa](src/assets/images/capa-projeto.png)

## Sumário

- [\[frontend-forleven-test\]](#frontend-forleven-test)
  - [Sumário](#sumário)
  - [Introdução](#introdução)
  - [Tecnologias Usadas](#tecnologias-usadas)
  - [Snapshots](#snapshots)
  - [Ambiente de desenvolvimento](#ambiente-de-desenvolvimento)
  - [Requisitos](#requisitos)
  - [Informações Técnicas](#informações-técnicas)
  - [Como Executar o Projeto](#como-executar-o-projeto)
  - [Contato](#contato)

## Introdução

Este projeto é um teste aplicado pela forleven para comprovar habilidades básicas com desenvolvimento de software em react native. O objetivo é criar uma listagem de itens e a opção de visualizar detalhes desses itens, onde traria mais informações sobre o item selecionado. Este aplicativo tem o funcionamento integrado com uma API, [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Tecnologias Usadas

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp;
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;

## Ambiente de desenvolvimento

- Virtual Studio Code - Version 1.92.1
- GitHub Desktop - Version 3.4.3
- Node.js - Version 20.12.2
- Android - 12.0 ("S") | x86_64 - API 31 (Emulador)

## Requisitos

- [x] Requisito 1: Fazer uma requisição de **GET** exibindo uma lista de posts de ao menos 10 objetos.
- [x] Requisito 2: Fazer uma requisição de **GET** para exibir comentários do post selecionado da lista anterior.
- [x] Bonus 1: Fazer um formulário contendo as informações necessárias para fazer uma requisição **POST**
- [x] Bonus 1: Fazer uma requisição de **PUT** ou **PATCH** para alterar um item da listagem de posts

## Informações técnicas

- Utilizado React Native;
- Feito as requisições na API https://jsonplaceholder.typicode.com/;
- Utilizado TypeScript;
- Utilizado React Context para estado dos posts
- Utilizado regras e padrões do Prettier;

## Snapshots

### Tela Login

**Importante**: o recurso não será realmente atualizado no servidor da API, mas será falsificado como se fosse.

<img src="./src/assets/snapshots/login.png" alt="Tela Login" width="300" />

### Tela Home - Get

<img src="./src/assets/snapshots/home-post.png" alt="Tela Home" width="300" />

### Tela Home - Post

<img src="./src/assets/snapshots/home-post.png" alt="Tela Home acionando post" width="300" />

### Tela Home - Put

<img src="./src/assets/snapshots/home-put.png" alt="Tela Home editando post" width="300" />

### Tela Home - Resultado

<img src="./src/assets/snapshots/home-put2.png" alt="Tela Home resultado do post e put" width="300" />

### Tela Comentários

<img src="./src/assets/snapshots/postDetails.png" alt="Tela dos cometários do post" width="300" />

### Resultado das requisições

Após fazer as requisições **POST** e **PUT** para a API é retornado no console o json do post.
</br>
<img src="./src/assets/snapshots/requsicoes.png" alt="resultado das requisições console" width="600" />

### Telas redes sociais

<img src="./src/assets/snapshots/facebook.png" alt="Tela dos cometários do post" width="300" />
<img src="./src/assets/snapshots/gmail.png" alt="Tela dos cometários do post" width="300" />
<img src="./src/assets/snapshots/x.png" alt="Tela dos cometários do post" width="300" />

## Como Executar o Projeto

Para executar o projeto siga as instruções:

1. Clone o repositório:

```bash
git clone https://github.com/LucasDoGit/facetime
cd facetime
```

2. Instale as dependências:

```bash
npm install
```

3. use o comando abaixo para iniciar o projeto e aguarde.

```bash
npm start
```

4. Usando o [Expo Go](https://expo.dev/go) e leia o QR code em um dispositivo móvel, ou execute um emulador de smartphone como o [Android Studio](https://developer.android.com/studio)

5. Feito! O projeto deve ser iniciado em um aparelho ou emulador.

## Contato

Para obter mais informações, entre em contato comigo em:

- Email: lucas.saiz19@gmail.com
- GitHub: https://github.com/LucasDoGit
