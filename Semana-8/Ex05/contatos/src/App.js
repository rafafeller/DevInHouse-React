import './App.css'
import Contato from "./components/Contato"

function App() {
  return (
    <>
      <Contato
        photo="https://as2.ftcdn.net/v2/jpg/04/31/64/75/1000_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg"
        nome="John Derek"
        description="I'm in a world very far from here!"
      />
      <Contato
        photo="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
        nome="Nicholas Cage"
        description="I'm a very famous actor!"
      />
      <Contato
        photo="https://as2.ftcdn.net/v2/jpg/04/44/53/99/1000_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg"
        nome="Katherine Zeta Jones"
        description="I'm the most beautiful person here!"
      />
      <Contato
        photo="https://as1.ftcdn.net/v2/jpg/04/59/97/40/1000_F_459974096_aow6wnkOGg9jek9I7XovQQtfipWu4aM5.jpg"
        nome="Angelina Julie"
        description="I have a lot of experience in life!"
      />
      <Contato
        photo="https://as2.ftcdn.net/v2/jpg/00/07/14/01/1000_F_7140133_9HMHVkETHmi08YvtvQFiTJ3VkEH6ZhyZ.jpg"
        nome="China girl"
        description="I'm an orient beautiful person, much more than that one above!"
      />
    </>
  )
}

export default App;
