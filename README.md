# Desafio Técnico Consigmais

# Desafio proposto:

API Restful que permita conectar com o Banco Mercantil para simular uma operação de crédito de Antecipação de FGTS. Esta API responderá a uma interface web que solicitará do usuário os seguintes dados: CPF, Nome, Data de Nascimento, Telefone e CEP, bem como o banco que deseja realizar a simulação.
As simulações realizadas devem ser todas registradas em tabela de eventos para que seja possível alimentar um dashboard gerencial, que exibe estatísticas sobre o volume de clientes, simulações, valores estimados, etc.

# Observações:

Infelizmente tive problemas ao me comunicar com a API da Mercantil do Brasil,
meu objetivo era criar um POST usando axios gerando um token válido, caso o token fosse inválido ou tivesse expirado, a requisição voltaria ao fluxo que geraria o token e seguiria para consulta no banco de acordo com os Endpoints presentes na documentação. Por total responsabilidade minha, só pude começar o teste depois das 18 horas, e ao longo do desenvolvimento percebi que caso continuasse tentando me comunicar com a API externa, perderia o tempo de desenvolvimento que me restava. Diante disso, me comprometo a demonstrar minha competência em consumo de API's caso tenha oportunidade de continuar no processo de contratação.

*ATT* Criei uma chamada de API externa, usando axios, no arquivo > ./services/externalApi.js, para observar as alterações vá até a *BRANCH* `using-axios` aqui no GitHub.

# Bibliotecas usadas durante o desenvolvimento:
* `DotEnv`: Para variáveis de ambiente,
* `Axios`: Para tratar requisições de API's externas,
* `Joi`: Para validação e tratamento de erros dos dados recebidos pelas requisições,
* `Sequelize`: ORM responsável em manipular o banco de dados relacional usado no projeto (MySql)
# Como executar a aplicação:

1. Clone o repositório na sua máquina
  * `git clone https://github.com/miguelbrn/financial-api.git`
  * `cd financial-api`
2. Instale as depêndencias
  * `npm install`
3. Crie um arquivo `.env` na raiz do projeto,
  as variáveis são:
  * `MYSQL_USER`
  * `MYSQL_PASSWORD`
  * `HOSTNAME`
  * `PORT` (Opcional)
4. Crie o banco de dados e suas tabelas no servidor MySql local
  * `npm run prestart`
5. Inicie a aplicação
  * `npm start`

# Endpoints

* `localhost:3000/client/simulation`

A aplicação possui apenas uma rota, os retornos são totalmente genéricos e tem o propósito de demonstrar conhecimento com retornos em node/express e são no formato JSON


O corpo da requisição deverá ser do tipo JSON com as seguintes chaves
  `cpf` `name` `birthdate` `contact` `cep` `bank`
  * Todas as entradas são no formato *STRING*

# Considerações

Quero agradecer pela oportunidade por participar deste processo, a atenção e preocupação do João Ramalho com o candidato demonstram que a cultura da empresa realmente se importa com as pessoas colaboradoras, adoraria ter a chance de continuar e demonstrar toda minha vontade em trabalhar e colaborar com a equipe da Consigmais.
