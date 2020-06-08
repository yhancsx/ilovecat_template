export default class SearchBar {
  constructor($target, onSearch) {
    this.$target = $target;
    this.onSearch = onSearch;
    this.render();
  }

  render() {
    const top = document.createElement("div");
    top.className = "top";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const searchBox = document.createElement("input");
    searchBox.className = "search-box";
    searchBox.placeholder = "고양이를 검색하세요!";
    searchBox.addEventListener("keyup", (event) => {
      if (event.keyCode == 13) {
        this.onSearch(searchBox.value);
      }
    });

    const searchButton = document.createElement("input");
    searchButton.className = "search-botton";
    searchButton.type = "button";
    searchButton.value = "검색";
    searchButton.addEventListener("click", (e) => {
      this.onSearch(searchBox.value);
    });

    wrapper.appendChild(searchBox);
    wrapper.appendChild(searchButton);
    top.appendChild(wrapper);

    this.$target.appendChild(top);
  }
}
