import { useSelector } from "react-redux";
import PaginationBar from "./components/pagination/pagination";
import SearchBar from "./components/searchBar/searchBar";
import { AppStyle } from "./styles/styles";
import UsersContent from "./components/userContent/userContent";

function App() {
  const data = useSelector((state) => state.data);

  return (
    <AppStyle>
      <SearchBar />
      <UsersContent />

      {data.items && data.items.length > 0 ? <PaginationBar /> : ""}
    </AppStyle>
  );
}

export default App;
