import React from 'react';
import './App.css';

function App({ char, searchTerm, searchTermChanged }) {
  return (
    <section className="scrollable-content">
      <div id="header">
        <h1>DC Superherois</h1>
        <h3>Uma lista dos principais super-heróis da DC</h3>
      </div>
      <form>
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Procurar heroi"
            value={searchTerm}
            onChange={(e) => searchTermChanged(e.target.value)}
          />
        </div>
      </form>

      <table>
        <thead>
          <tr style={{ textAlign: 'center' }}>
            <th>Nome</th>
            <th>Alter Ego</th>
            <th>Primeira aparição em</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>
          {char.map((curChar) => (
            <tr key={curChar.name}>
              <td>{curChar.name}</td>
              <td>{curChar.alter_ego}</td>
              <td>{curChar.first_appearance}</td>
              <td>
                <img src={require(`./images/View/${curChar.name}.png`)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
