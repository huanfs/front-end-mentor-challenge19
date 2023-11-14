
import './App.css';
/*componentes*/
import DataContent from "./components/dataContent";
import Social from "./components/social";
function App() {
  return (
    <div className="App">
      <h1>we're launching soon</h1>

      <section className="pannel">
        <DataContent type="Day"/>
        <DataContent type="Hours"/>
        <DataContent type="Minutes"/>
        <DataContent type="Seconds"/>
      </section>

      <footer>
        <ul>
          <Social media="fa-brands fa-facebook"/>
          <Social media="fa-brands fa-pinterest"/>
          <Social media="fa-brands fa-instagram"/>
        </ul>
      </footer>
    </div>
  );
}

export default App;
