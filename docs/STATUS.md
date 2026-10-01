# Alterações

---

Feat Charlinho 28/09:

Estrutura Inicial do Projeto
Importação imagens
Criação branch main e dev

---

## Feat Charlinho 01/10:

- No computador na escola abri e me loguei no mysql e criei um database "BIBLIOTECA_BD".
- Instalei o node com ``npm install``
- Instalei o driver mysql para tornar possível a conexão com o servidor mysql:
``npm install mysql2`` (Rodar no terminal)
- 
- No caminho src/backend/connectionDB.js digitei e executei:

``` let mysql = require('mysql2'); 

let con = mysql.createConnection({
  host: "localhost",         // Apenas o endereço, sem "mysql://"
  user: "root",              // Usuário padrão
  password: "",              // Deixei vazio já que não tem senha
  database: "BIBLIOTECA_BD"  // O nome do banco entra aqui separadamente
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); 

```

Executei com node connectionDB.js na pasta do arquivo. Resultado:

``Connected!``

**Erros:**

Antes de ter dado certo, teve alguns erros:

Na linha ``let mysql = require('mysql2');`` eu tinha deixado apenas ``let mysql = require('mysql');``. Tomar cuidado porque o nome do driver que tem que instalar é mysql2.

### Depois disso:

Pesquisando na net a IA disse que era preciso criar um arquivo .env porque é nesse arquivo que vai ficar as credenciais de login como senha e usuário que usamos quando abrimos o mysql.







