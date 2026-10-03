# Colaboração

0. Abrir mysql e colar: 

`` CREATE DATABASE BIBLIOTECA_BD;``
`` USE BIBLIOTECA_BD; ``

1. Clonar repositório do projeto:

``git clone https://github.com/DevKhal-EL/Biblioteca-BD.git`` 
``cd Biblioteca-BD`

2. Mudar pra branch dev 

``git switch dev``

3. Instalar dependências:

``npm install``
``npm install mysql2``
``npm install dotenv``

4. Criar arquivo chamado '.env' na raíz do projeto e colocar suas credênciais, copie e cole:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=coloca_sua_senha
DB_NAME=BIBLIOTECA_BD

```

6. Conectar ao banco de dados rodando na raiz do projeto no terminal: 
``node src/back-end/connectionDB.js`` 
Se deu certo vai aparecer no terminal:

"Connected!"

Se deu erro, consultar IA ou internet até funcionar.

7. Antes de fazer alterações no projeto, atualizar branch local:

``git pull origin dev``

Depois comece as alterações

8. Explicar alterações em /docs/STATUS.md

9. Salva e envia pro github depois que terminar:

```
git status
git add .
git commit -m "feat: <O que você fez>"
git push origin dev

```

