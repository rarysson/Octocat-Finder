# Desafio Frontend da Bitwise

Como você irá ver, nós somos fãs do Github e nada mais justo que fazer um desafio baseado nessa API sensacional!

Bem, basicamente você tem a responsabilidade de criar uma webpage usando a [API de GraphQL do Github](https://docs.github.com/en/graphql) que tenha as seguintes features:

-   Implementação do campo de busca pelo nome de usuários no github
-   Caso o nome de usuário seja encontrado pela busca, mostrar imagem do perfil do github na pagina principal como está desenhada no Figma
-   Caso o nome de usuário não seja encontrado mostrar um alerta informando que o usuário não existe.
-   Caso o nome de usuário possua ou participe de algum repositório, então mostrar uma lista com
    | Quantidade de repositórios do usuário | ( Participação e Repositórios criados pelo usuário )
    | Nome do Repo | Quantidade de commits do usuário | Mensagem do ultimo commit | Hash do ultimo commit |
-   Caso o nome de usuário não possua e nem participe de nenhum repositório mostrar um alert informando que o usuário encontrado não possui nenhum repo.

Você pode usar qualquer tipo de tecnologia para entregar o projeto como: ReactJS, VueJS, Ruby on Rails e etc. Não existe limites ou formas erradas de fazer o projeto.

OBS: _É muito importante para analisarmos sua capacidade de adaptação a novas tecnologias que o projeto seja implementado utilizando a **API de GraphQL**, mas se caso você encontre muitos problemas para entender ou implementar o GraphQL, como fallback você pode utilizar a versão **REST** , mas lembre-se, que ao fazer isso você irá perder uma grande quantidade pontos no nosso teste._

## Interface no figma

![](interface-example.png)

Interface: https://www.figma.com/file/QwOji1MvZGBQiK5BCM9lxL/Bitwise-tests?node-id=0%3A1

### Adicionais

Caso você consiga completar todas tarefas acima e queira nós mostrar que você manja:

-   Adicione ao campo de busca sugestões de nome de usuários, ou seja, quando usuário começar a digitar "mend" abaixo do campo de busca ira mostrar uma lista de nomes como: "mendos, mendesbarreto, mendeswhat" etc.. e quando usuário clicar em um desses nomes irá executar as atividades descritas acima.

OBS: O Github possui API para busca dos usuários
