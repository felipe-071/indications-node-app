### AULA 00 - COMANDOS DO DOCKER ###
1) docker pull nome-da-imagem: baixa uma certa imagem, como o git pull
2) docker images: carrega as imagens do Docker que estão no sistema
3) docker run nome-da-imagem: executa a imagem
   -> OBS: algumas imagens impedem o acesso ao terminal quando executadas. Para transitar entre esses locais, é interessante utilizar a flag -d (detached), ficando docker run -d redis
4) docker ps: para visualizar as imagens em execução no momento 
   -> flag -a: para mostrar as imagens que já foram executadas em algum momento
5) docker stop id-da-imagem
6) docker start id-da-imagem


### AULA 01 - INÍCIO DO PROJETO ###
O primeiro framework instalado é o fastify, que, assim como o express, é um pacote muito conhecido e amplamente utilizado
Segundo comando: npm i tsx typescript @types/node -D
O Node irá suportar nativamente typescript a partir da versão 23, mas, por hora, é necessário instalar dependências para que ele possa utilizá-lo. 

Na linha de personalização do comando para executar o arquivo ("dev": "tsx watch src/server.ts"), o watch é equivalente ao nodemon, por assim dizer: cada vez que uma alteração for feita, o comando é executado novamente

COMANDOS DA AULA
npm install fastify
npm i tsx typescript @types/node -D
npm i @fastify/cors: define quais URLs podem acessar o back (medida de segurança)
npm i zod: validação e serialização de dados (serialização é transformar os dados do back-end que serão enviados ao front-end)
npm i fastify-type-provider-zod: integra o zod com o fastify
npm i @fastify/swagger @fastify/swagger-ui: o swagger gera a documentação e o s-ui gera uma interface que nos permite navegar pelas rotas da aplicação
npm i @biomejs/biome -D

ATALHO DO VS CODE
Ctrl + shift + P: pesquisar coisas como o arquivo de configuração do VS Code

"Quando nós criamos uma API, os tipos de dados mais comuns são: 
body (corpo da requisição, presente somente quando há método POST e PUT), 
search params (parâmetros da rota após o "?", utilizado para filtros e etc
e route params (como o anterior, mas não possui nome e é obrigatório)

18/02/2025 - Praticamente no e-mail da aula, ele falou algo sobre o código de sucesso genérico 200 relacionado ao reply e que, quando cria-se um recurso dentro da API, é necessário passar o código 201 através do reply

Não é possível apenas testar de forma simples algumas requisições (como post) no navegador, porque ele sempre localiza as informações através do método GET. Dessa forma, torna-se necessário o uso de ferramentas como o postman e, nesse caso, o rest cliet.

19/02/2025 - O módulo swaggerUI, registrado em algum momento do código, define uma rota para a documentação do projeto através do valor passado ao atributo routePrefix. Entretanto, ele só reconhece que há rotas na aplicação quando elas são criadas em um arquivo à parte

### Variáveis de ambiente ###
Em algum momento da aplicação, é necessário definir variáveis de ambiente, que mudam o valor conforme a etapa/ambiente de desenvolvimento (se está em produção ou em desenvolvimento por exemplo   )

### AULA 02  INÍCIO DO PROJETO ###
COMANDOS DA AULA
docker compose up -d
npm i ioredis
npm i postgres drizzle-orm
npm i drizzle-kit -D
npx drizzle-kit generate
npx drizzle-kit migrate





