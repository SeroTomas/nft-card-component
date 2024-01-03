import './App.css'
import { Card } from './components'
import { CardInterface } from './models'

const card: CardInterface = {
  productImage: {
    image: "images/image-equilibrium.jpg",
    icon: "images/icon-view.svg"
  },
  productInfo: {
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    productPrice: {
      icon: "images/icon-ethereum.svg",
      price: "0.041"
    },
    productDate: {
      icon: "images/icon-clock.svg",
      date: "3 days left"
    }
  },
  user: {
    avatar: "images/image-avatar.png",
    userName: "Jules Wyvern"
  }
}

function App() {

  return (
    <main className='h-screen bg-c-blueMain grid place-items-center'>
      <Card {...card} />
    </main>
  )
}

export default App
