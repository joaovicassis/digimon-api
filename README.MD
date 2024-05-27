
# Global Financeiro / Teste Desenvolvedor Back-End

## Como usar

- Requisitos: Node.JS 10+ e npm/yarn.
- Clone este repositorio e navegue ate ele. 
- Rode o comando ```npm start``` ou ```yarn start``` 
- A aplicação estará rodando em: http://localhost:3000/digimons
- Use um software de sua preferência para as requisições HTTP - Postman ou Insomnia

## Notas

- A aplicação usa como Banco de Dados o MongoDB rodando em nuvem pelo MongoDB Atlas
- Toda documentação da API pode ser encontrada no caminho http://localhost:3000/api-docs
- Para este teste foram aplicados conhecimentos em testes unitarios utilizando Jest e Injeção de Dependências 

## Endpoints



### Digimons

**BUSCAR**

---

GET _/digimons/_ 

> - id (string)
> - name (string)
> - img (string)
> - level (string)

--- 

**BUSCAR**

---

GET _/digimons/id/{id}_ 

> - id (string)
> - name (string)
> - img (string)
> - level (string)

**body**
```json
{
	"id": "6653ca01abd78a0480b638e3",
	"name": "Kuwagamon",
	"img": "https://digimon.shadowsmith.com/img/kuwagamon.jpg", 
	"level": "Champion"
}
```
>id deve ser um identificador valido no banco de dados

---

GET _/digimons/name/{name}_ 

> - id (string)
> - name (string)
> - img (string)
> - level (string)

**body**
```json
{
	"id": "6653ca01abd78a0480b638e7",
	"name": "Seadramon",
	"img": "https://digimon.shadowsmith.com/img/seadramon.jpg", 
	"level": "Champion"
}
```
>name é obrigatorio
---

GET _/digimons/level/{level}_ 

> - id (string)
> - name (string)
> - img (string)
> - level (string)

**body**
```json
{
	"id": "6653d6798122458518bf8865",
	"name": "Agumon",
	"img": "https://digimon.shadowsmith.com/img/agumon.jpg", 
	"level": "Rookie"
}
```
>level é obrigatorio
---
