import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { data: repositories, isFetching } = useFetch(
    "https://api.github.com/users/diego3g/repos"
  );

  return (
    <div className="App">
      <ul>
        {isFetching && <p>Carregando...</p>}
        {repositories?.map((repo) => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
