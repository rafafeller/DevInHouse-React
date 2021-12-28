O que são as props de um componente no ReactJs? Cite um exemplo de declaração de componente com suas props.

Resposta:

Props é a abreviação de properties (propriedades), são argumentos que você fornece a um elemento JSX. Elas se parecem com os props padrão do HTML, mas não são pré-definidos e podem ter diferentes tipos de dados JavaScript, incluindo números, strings, funções, matrizes e até mesmo outros componentes React.

Assim podemos utilizar props para adicionar propriedades de componentes.
Como as props são como argumentos de funções, e você pode enviá-las para os componentes como atributos, esse exemplo de código renderiza "Hello Sara" na tela.

Exemplo de código:
```
function Welcome(props){
     return <h1>Hello, {props.name}</h1>;
 }

 const element = <Welcome name="Sara" />;
 ReactDOM.render(element, document.getElementById("root")
 );
 
 ```


 
 
