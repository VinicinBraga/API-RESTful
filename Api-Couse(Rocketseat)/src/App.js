import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { data: repositories, isFetching } = useFetch("users/diego3g/repos");

  return (
    <div className="App">
      <ul>
        {isFetching && <p>Carregando...</p>}
        {repositories?.map((repo) => {
          return (
            <li key={repo.full_name}>
              <strong>APP NAME: {repo.full_name}</strong>
              <p>Language: {repo.language == null ? "NULL" : repo.language}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
