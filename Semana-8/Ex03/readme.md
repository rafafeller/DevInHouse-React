Do que se trata a renderização condicional? Cite um exemplo de componente renderizado condicionalmente?

Resposta:

Em React, você pode criar componentes distintos que encapsulam o comportamento que você precisa. Então, você pode renderizar apenas alguns dos elementos, dependendo do estado da sua aplicação.
Renderização condicional em React funciona da mesma forma que condições funcionam em JavaScript. O uso de operadores de JavaScript como if ou operador condicional cria elementos representando o estado atual, e deixa o React atualizar a UI para corresponde-los.

Exemplo:

Considere esses dois componentes:

```
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```

Utilizando a renderização condicional será mosrado na tela um dos componentes acima, se o usuário estiver logado ou não:

```
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

