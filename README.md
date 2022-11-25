# byecar-backend

## Como rodar a aplicação

Nota: ao clonar este projeto você precisa criar manualmente o arquivo `.env`, conforme explica o tutorial a seguir.

### Ambiente e Ferramentas:

- Yarn: https://yarnpkg.com/
- NPM: https://www.npmjs.com/
- NODE: https://nodejs.org/en/

### Passo a passo:

1. No seu terminal, clone a aplicação com o seguinte comando: `git clone git@github.com:hiquebarros/byecar_backend.git`
2. Baixe as dependêncas do projeto utilizando o gerenciador de pacotes que preferir, com os seguintes comandos:
   `yarn`
   ou
   `npm install`
3. Crie um arquivo .env na raiz do projeto e cole o conteúdo do .env.example.
4. Agora, com as variáveis de ambiente já configuradas, com o comando `yarn dev` sua aplicação deve ser iniciada na porta local 3000.

### Testes:

Foram criados testes para certificar a eficiência dos middlewares de validação de token, para rodar os testes basta um `yarn test` no terminal. (É importante já ter baixado as dependências do projeto antes de rodar os testes).

### Rotas:

A API possui apenas uma rota de GET. endpoint: localhost:3000/
