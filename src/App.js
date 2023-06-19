import "./App.css";
import HomePage from "./containers/HomePage";
import Layout from "./containers/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
