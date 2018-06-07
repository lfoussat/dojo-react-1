import React, { Component } from 'react'
import './App.css'
// 🧡

// const ss = [
//   { "id": 1, "name": "Alex Bui" },
//   { "id": 2, "name": "Alexis Theyssier" },
//   { "id": 3, "name": "Amel Braiek" },
//   { "id": 4, "name": "Aurelio Lima Ferreira" },
//   { "id": 5, "name": "Benoit Rameau" },
//   { "id": 6, "name": "Bogdan Ceu" },
//   { "id": 7, "name": "Capucine Leclerc" },
//   { "id": 8, "name": "Carlos Facchin" },
//   { "id": 9, "name": "Charles Chiacchia" },
//   { "id": 10, "name": "Charlotte Guerin" },
//   { "id": 11, "name": "Christian Lim" },
//   { "id": 12, "name": "Christopher Fremond" },
//   { "id": 13, "name": "Constance Henrot" },
//   { "id": 14, "name": "Daniel Deutsch" },
//   { "id": 15, "name": "Edouard De Laage" },
//   { "id": 16, "name": "Francesca Ringot" },
//   { "id": 17, "name": "Frederic Olive" },
//   { "id": 18, "name": "Frederic Paquet" },
//   { "id": 19, "name": "Gaelle Fougere" },
//   { "id": 20, "name": "Guillaume Nobis" },
//   { "id": 21, "name": "Helena Domlan" },
//   { "id": 22, "name": "Helene Blanchard" },
//   { "id": 23, "name": "Joffrey Chauleau" },
//   { "id": 24, "name": "Kim Spychalski" },
//   { "id": 25, "name": "Leila Rhazaoui" },
//   { "id": 26, "name": "Lorraine Chastang" },
//   { "id": 27, "name": "Louise Foussat" },
//   { "id": 28, "name": "Ludivine Pellissier" },
//   { "id": 29, "name": "Marie Malarme" },
//   { "id": 30, "name": "Mehdi Chtira" },
//   { "id": 31, "name": "Mikael Verdu" },
//   { "id": 32, "name": "Hedi Kochad" },
//   { "id": 33, "name": "Mohand Hassam" },
//   { "id": 34, "name": "Nadia Djellali" },
//   { "id": 35, "name": "Pany Soukaloun" },
//   { "id": 36, "name": "Philippe Maguer" },
//   { "id": 37, "name": "Pierre Langevin" },
//   { "id": 38, "name": "Pierre Poretti" },
//   { "id": 39, "name": "Quentin Roiseux" },
//   { "id": 40, "name": "Romain Reslinger" },
//   { "id": 41, "name": "Sabrina Berguer" },
//   { "id": 42, "name": "Samy Kacemi" },
//   { "id": 43, "name": "Samuel Sarano" },
//   { "id": 44, "name": "Samuel Lambert" },
//   { "id": 45, "name": "Sichelle Chiffert" },
//   { "id": 46, "name": "Smain Khaldi" },
//   { "id": 47, "name": "Sophie Michaudel" },
//   { "id": 48, "name": "Souhail Souid" },
//   { "id": 49, "name": "Valery Chin" },
//   { "id": 50, "name": "Yann Coulleau" },
//   { "id": 51, "name": "Yvan Latorre" }
// ]

window.users = ss

const User = props =>
  <div>
    {props.user.name}
    <button onClick={props.onClick} >💔☠</button>
  </div>

const DislikedUsers = users =>
  <div>
    {users.filter(u => u.disliked)
      .map(u => `☠${u.name}`)
      .join(' - ')}
  </div>

class App extends Component {
  state = {
    users: []
  }

  constructor() {
    super()
    this.fetchUsers()
  }

  async fetchUsers() {
    const res = await fetch('https://raw.githubusercontent.com/wildcodeschoolparis/dojos/master/10-dojo-react-1/users.json')
    const data = await res.json()
    this.setState({ users: data })
    // this.state.users = ss
  }

  dislikeUser(id) {
    this.setState({
      users: this.state.users
        .map(user => id === user.id ? { ...user, disliked: true } : user)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        {DislikedUsers(this.state.users)}
        {this.state.users.map(user =>
          <User onClick={() => this.dislikeUser(user.id)} key={user.id} user={user} />)}
      </div>
    )
  }
}

console.log(App.toString())

export default App
