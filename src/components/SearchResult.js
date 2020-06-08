import Card from "./Card.js";

export default class SearchResult {
  constructor($target, data) {
    this.$target = $target;
    this.data = data;

    this.resultContainer = document.createElement("div");
    this.resultContainer.className = "result-container";
    this.$target.appendChild(this.resultContainer);

    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }
  render() {
    this.resultContainer.innerHTML = "";

    const itemGroupWrapper = document.createElement("div");
    itemGroupWrapper.className = "card-group-container";

    const itemGroup = document.createElement("div");
    itemGroup.className = "card-group";

    this.data.forEach((cat) => {
      new Card(itemGroup, cat);
    });

    itemGroupWrapper.appendChild(itemGroup);
    this.resultContainer.appendChild(itemGroupWrapper);
  }
}
