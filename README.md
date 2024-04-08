﻿#Calculadora-Javascript

# HTML5

## Corpo da Página

### `<body>`
Contém todo o conteúdo visível da página.

### `<div class="container">`
Cria um container para centralizar o conteúdo da página.

### `<div class="calculator">`
Cria a estrutura da calculadora.

### `<form>`
Define um formulário que conterá os elementos da calculadora.

### `<div class="display">`
Contém o display da calculadora, onde os números e operações são exibidos.

### `<div>`
Cada div contém uma linha de botões numéricos e operadores.

### `<div class="fim">`
Contém os botões de limpeza e ativação da calculadora científica.

### `<input type="button" value="Clear" onclick="clearNumber()" class="clear">`
Botão para limpar o display.

### `<input type="button" value="Scientific" onclick="viewScientific() " class="scientific" >`
Botão para alternar para a calculadora científica.

### `<div class="functionScientific hide_function">`
Contém as funções científicas, inicialmente escondidas. Cada input representa uma função científica, como seno, cosseno, etc.

### `<script src="script.js"></script>`
Importa o arquivo JavaScript externo para adicionar funcionalidades à página.

# CSS3

### `*{}`
**Reset de estilos e definição da fonte padrão**: Este comentário indica que os estilos padrão estão sendo zerados e a fonte padrão está sendo definida como Arial, Helvetica, sans-serif para garantir uma base consistente em todos os navegadores.
**Estilos padrão para todos os elementos da página**: Remove margens e preenchimentos padrão para todos os elementos, define a fonte padrão como Arial, Helvetica, sans-serif e define a modelagem de caixa como `border-box` para garantir que a largura e altura incluam bordas e preenchimentos, não apenas o conteúdo.

### `.container{}`
**Estiliza o container da calculadora**: Define o container para ocupar 100% da largura e altura da tela e centraliza o conteúdo verticalmente e horizontalmente dentro do container usando Flexbox.

### `.calculator{}`
**Estiliza a calculadora em si**: Define a cor de fundo da calculadora como um tom de cinza, adiciona um preenchimento interno de 20px ao redor da calculadora e aplica um raio de borda de 10px para arredondar as bordas da calculadora.

### `.calculator  form{}`
**Estiliza o formulário dentro da calculadora**: Define o layout do formulário como uma coluna, com itens alinhados à direita.

### `.calculator form input{}`
**Estiliza os botões dentro do formulário**: Remove as bordas, define largura e altura, aplica borda arredondada e sombra, define cor de fundo transparente, tamanho da fonte e cor do texto.

### `.form .display{}`
**Estiliza o display da calculadora**: Define o display como um elemento flexível com margens superior e inferior de 20px e alinha os itens ao centro.

### `.calculator .fim {}`
**Estiliza a seção final da calculadora**: Define um espaço entre os itens.

### `.calculator .fim input[type="button"]{}`
**Estiliza os botões de limpeza e ativação da calculadora científica**: Define a largura dos botões e o cursor do mouse como `pointer`.

### `.hide_function{}`
**Define um estilo inicialmente escondido para as funções científicas**: Esconde os elementos com a classe `.hide_function`. Eles serão mostrados quando a função `viewScientific()` for chamada.

# JAVASCRIPT 

## Variável
- `display`: Armazena a referência ao elemento HTML com o ID "display", que representa a tela da calculadora.

## Funções

### `addNumberTheCalculato(number)`
- Descrição: Adiciona um número ao display da calculadora.
- Parâmetros:
  - `number`: O número a ser adicionado ao display.
- Retorna: O valor atualizado do display.

### `clearNumber()`
- Descrição: Limpa o conteúdo do display da calculadora.
- Retorna: O display limpo.

### `addSing(sing)`
- Descrição: Adiciona um sinal ao display da calculadora.
- Parâmetros:
  - `sing`: O sinal a ser adicionado ao display.
- Retorna: O valor atualizado do display.

### `result()`
- Descrição: Calcula o resultado da expressão matemática exibida no display da calculadora usando a função `eval()`.
- Retorna: O resultado da expressão ou exibe um erro no console se a expressão for inválida.

### `viewScientific()`
- Descrição: Alterna a visibilidade dos elementos da calculadora científica.
- Retorna: Nenhum.

### Funções Científicas
As seguintes funções realizam cálculos trigonométricos e matemáticos usando o valor atual no display da calculadora:

- `sin()`: Calcula o seno do valor.
- `cos()`: Calcula o cosseno do valor.
- `tan()`: Calcula a tangente do valor.
- `log()`: Calcula o logaritmo natural do valor.
- `exp()`: Calcula a exponencial do valor.
- `pi()`: Adiciona o valor de π ao display.

Cada função obtém o valor do display, realiza o cálculo correspondente e atualiza o display com o resultado.
