## Atividade 1 - Trabalhando com o método filter()

##### 1 - Dado o seguinte array

```javascript
const animes = [
    {
        id: 1,
        nome: "Dragon Ball",
        autor: "Akira Toriyama",
    },
    {
        id: 2,
        nome: "Yu Yu Hakusho",
        autor: "Yoshihiro Togashi",
    },
    {
        id: 3,
        nome: "Saint Seiya",
        autor: "Masami Kurumada",
    },
    {
        id: 4,
        nome: "Dragon Ball Z",
        autor: "Akira Toriyama",
    },
    {
        id: 5,
        nome: "Naruto",
        autor: "Masashi Kishimoto",
    },

];
```

##### Retorne um novo array contendo apenas os animes que foram criados pelo autor 'Akira Toriyama'.

```javascript
// Resultado esperado
[
  { id: 1, nome: 'Dragon Ball', autor: 'Akira Toriyama' },
  { id: 4, nome: 'Dragon Ball Z', autor: 'Akira Toriyama' }
]
```

**Faça utlizando os seguinte métodos:**

* Usar for
* Usar for...of
* Usar filter()

##### 2 - Fazendo uso do método filter(), uma vez encontrado as obras do mestre Akira Toriyama, substitua o nome do autor pelo seu. 

```javascript
// Resultado esperado

[
  { id: 1, nome: 'Dragon Ball', autor: 'Seu nome' },
  { id: 2, nome: 'Yu Yu Hakusho', autor: 'Yoshihiro Togashi' },
  { id: 3, nome: 'Saint Seiya', autor: 'Masami Kurumada' },
  { id: 4, nome: 'Dragon Ball Z', autor: 'Seu nome' },
  { id: 5, nome: 'Naruto', autor: 'Masashi Kishimoto' }
]
```



### Referências

[1 - for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for)

[2 - for...of](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of)

[3 - filter()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
