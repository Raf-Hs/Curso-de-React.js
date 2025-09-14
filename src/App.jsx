
import './App.css'
import Card from "./components/Card"
function App() {
  const items = ["React", "JavaScript","Vite"];
  return (
    <section>
      <h1>Hola Mundo!</h1>
      <Card title="Card 1" description="Esto es una descripcion"></Card>
      <Card title="Card 2" description="Esto es una descripcion"></Card>
      <Card title="Card 3" description="Esto es una descripcion"></Card>
      <ul>
        {
          items.map((item,index) => (
            <li key={index}> {item} </li>
          ))
        }
      </ul>
    </section>
  );
}

export default App
