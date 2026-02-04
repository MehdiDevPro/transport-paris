import { useState } from 'react'
import './App.css'

function App() {
  const vehicles = [
    {
      name: 'Mercedes Sprinter',
      image: '/van-mercedes-sprinter-RBQn-cJV.jpg',
      description: 'Van spacieux et confortable pour groupes'
    },
    {
      name: 'Volkswagen Caravelle',
      image: '/van-volkswagen-caravelle-Cwg34a2Q.jpg',
      description: 'Minibus élégant et pratique'
    },
    {
      name: 'Mercedes V-Class',
      image: '/van-mercedes-v-class-B58VC7yj.jpg',
      description: 'Luxe et confort pour vos déplacements'
    }
  ]

  return (
    <div className="App">
      <header className="hero">
        <img src="/hero-paris-transport-B2bycGJF.jpg" alt="Paris Transport" className="hero-image" />
        <div className="hero-content">
          <h1>Paris Transport</h1>
          <p>Services de transport de qualité à Paris</p>
        </div>
      </header>
      
      <main className="main-content">
        <section className="vehicles-section">
          <h2>Notre Flotte</h2>
          <div className="vehicles-grid">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="vehicle-card">
                <img src={vehicle.image} alt={vehicle.name} />
                <h3>{vehicle.name}</h3>
                <p>{vehicle.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 Paris Transport - Mehdi Dev Pro</p>
      </footer>
    </div>
  )
}

export default App
