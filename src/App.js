import SearchBar from "./components/SearchBar.js";
import SearchResult from "./components/SearchResult.js";
import { fetchCats } from "./api/theCatApi.js";

export default class App {
  constructor() {
    console.log("App is created!");

    const body = document.body;

    const onSearch = async (keyword) => {
      const cats = await fetchCats(keyword);
      searchResult.setState(cats.data);
    };
    const searchBar = new SearchBar(body, onSearch);
    const searchResult = new SearchResult(body, []);
  }
}
