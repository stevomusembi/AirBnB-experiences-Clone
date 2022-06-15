
import './style.css';
import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Card from './Card';
import data from './data';
import Footer from './Footer';

function App() {
  const card = data.map(elm => {
    return (
      <Card

        key={elm.id}
        {...elm}

      />

    )

  })
  return (
    <div>
      <Nav />
      <Hero />
      <section className='card--list'>
        {card}
      </section>
      <hr />
      <Footer />

    </div>
  );
}

export default App;
