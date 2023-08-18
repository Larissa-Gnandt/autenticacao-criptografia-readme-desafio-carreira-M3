# Autenticação e criptografia 

Este projeto tem como objetivo criptografar uma senha, criar um token para autenticação do usuário, gerando mais segurança e proteção dos dados.

## :rocket: Começando 

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

###  📋 Pré-requisitos  

 - Visual Studio Code
 - Node.js
 - Insomnia (ou similar)
 - Beekeeper Studio (ou similar)

#### :computer: Versão do Node

Caso a versão do seu node não seja compatível para rodar o projeto, é recomendado o uso do NVM - Node Version Manager. 
Consulte a versão atual do node usando o comando `node -v` em seu terminal.

Veja um passo a passo detalhado para realizar a instalação do NVM em diversos sistemas operacionais: 

[Tutorial de instalação do NVM](https://www.treinaweb.com.br/blog/instalando-e-gerenciando-varias-versoes-do-node-js-com-nvm)

Após a instalação do NVM para realizar a alteração da versão atual do node basta rodar dois comandos: 

```shell
nvm install v14.15.0

nvm use v14.15.0
```

**A vantagem de utilizar o NVM é a possibilidade ter várias versões do node instaladas na sua máquina e alternar facilmente entre elas sempre que necessário.**

### 🔧 Você deve seguir os passos abaixo antes de iniciar:

 - Crie um fork deste repositório
 - Clone o seu fork para a sua máquina

### 🔧 Instalar dependências

```shell
npm install
```

### :file_folder: Banco de dados

Para configurar seu banco de dados você deve executar os comandos do arquivo `dump.sql`.

### :space_invader: Execução do projeto

Após configurar o banco de dados e instalar todas as dependências, no terminal, basta escrever `npm run dev`, ele será usado para iniciar o ambiente de desenvolvimento.

### APIs disponíveis 

#### # Cadastro do usuário

##### **Exemplo de requisição**

```javascript
// POST /usuario
{
    "nome": "José",
    "email": "jose@email.com",
    "senha": "123456"
}
```

##### **Exemplos de resposta**

```javascript
// Sucesso:
{
    "id": 1,
    "nome": "José",
    "email": "jose@email.com"
}

// Erro:
{
    "mensagem": "Este e-mail já foi cadastrado."
}
```

#### # Login do usuário

##### **Exemplo de requisição**

```javascript
// POST /login
{
    "email": "jose@email.com",
    "senha": "123456"
}
```

##### **Exemplos de resposta**

```javascript
// Sucesso:
{
    "usuario": {
        "id": 1,
        "nome": "José",
        "email": "jose@email.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIzMjQ5NjIxLCJleHAiOjE2MjMyNzg0MjF9.KLR9t7m_JQJfpuRv9_8H2-XJ92TSjKhGPxJXVfX6wBI"
}

// Erro:
{
    "mensagem": "Usuário ou senha inválidos."
}
```


#### # Detalhar Perfil do Usuário Logado 

##### **Exemplo de requisição**

```javascript
// GET /usuario
// Sem conteúdo no corpo (body) da requisição
```

##### **Exemplos de resposta**

```javascript
// Sucesso:
{
    "id": 1,
    "nome": "José",
    "email": "jose@email.com"
}

// Erro:
{
    "mensagem": "Para acessar este recurso um token de autenticação válido deve ser enviado."
}
```


 
