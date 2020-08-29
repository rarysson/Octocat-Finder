# Octocat Finder

O Octocat Finder é um projeto que tem como objetivo de permitir a busca de usuários do GitHub e mostrar suas atividades.

Esse projeto foi desenvolvido baseado no desafio da [Bitwise](https://github.com/bitwise-technology). Para saber mais sobre o desafio acesse a pasta [doc](doc).

## Tecnologias utilizadas

-   [Vue](https://vuejs.org/)
-   [Axios](https://github.com/axios/axios)
-   [API do GitHub](https://docs.github.com/en/graphql) (versão GraphQL)

## Rodando o APP

Para usar localmente, clone o repositório, vá na pasta criada e execute os comandos:

```
npm install
npm run serve
```

Dentro do pasta criada crie um arquivo chamado `.env.local`. Dentro desse arquivo coloque o seguinte valor (sem os parênteses):

```
VUE_APP_TOKEN=(SUA CHAVE DE ACESSO DA API DO GITHUB)
```
