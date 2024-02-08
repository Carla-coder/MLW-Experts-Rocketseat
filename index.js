const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Um framework de front-end",
        "Uma linguagem de programação de alto nível",
        "Um banco de dados relacional",
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Como você faz um comentário de uma linha em JavaScript?",
      respostas: [
        "// Isso é um comentário",
        "/* Isso é um comentário */",
        "-- Isso é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "O que representa 'NaN' em JavaScript?",
      respostas: [
        "Nada, é apenas uma sequência de caracteres",
        "Not a Number (Não é um número)",
        "North America Network",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
      respostas: [
        "+",
        "-",
        "*",
      ],
      correta: 0
    },
    {
      pergunta: "O que o código 'typeof variable' retorna em JavaScript?",
      respostas: [
        "O valor da variável",
        "O tipo de dado da variável",
        "A posição da variável na memória",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'addEventListener'?",
      respostas: [
        "Adiciona um elemento ao DOM",
        "Adiciona um ouvinte de eventos a um elemento",
        "Remove um elemento do DOM",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função callback em JavaScript?",
      respostas: [
        "Uma função que retorna um valor",
        "Uma função passada como argumento para outra função",
        "Uma função que manipula erros",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um formato de dados para intercâmbio",
        "Uma biblioteca de animação",
      ],
      correta: 1
    },
    {
      pergunta: "Como você cria um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 10; i++)",
        "loop (i = 0; i < 10; i++)",
        "repeat (i = 0; i < 10; i++)",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas  = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou repetição ou laço de repetição
  for(const item of perguntas) {
    // alert(item.pergunta)
    const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta 
  
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       //alert('Alo')
       //alert(event.target.value)
       const estaCorreta = event.target.value == item.correta
       //alert(estaCorreta) // se colocar === 9com 3) ele vai dar false sempre, porque numero é diferente de string
  
       corretas.delete(item)
       if(estaCorreta) {
         //alert('acertou!')
         corretas.add(item)
       }
        //alert(corretas.size)
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     }
    
     quizItem.querySelector('dl').appendChild(dt)
   }
     
     quizItem.querySelector('dl dt').remove()
  
  // coloca a pergunta na tela
     quiz.appendChild(quizItem)
  }
  
  
  
  