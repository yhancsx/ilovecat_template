export default class Item {
  constructor($target, data) {
    this.$target = $target;
    this.data = data;

    this.render();
  }

  render() {
    const { url } = this.data;
    const { name, origin } =
      this.data.breeds.length > 0
        ? this.data.breeds[0]
        : { name: "UNKNOWN", origin: "UNKNOWN" };

    const cardContianer = document.createElement("div");
    cardContianer.className = "card-container";

    const item = document.createElement("div");
    item.className = "card";

    const itemImg = document.createElement("img");
    itemImg.className = "card-img";
    itemImg.src = url;

    const itemDescription = document.createElement("div");
    itemDescription.className = "card-description";

    const itemTemper = document.createElement("p");
    itemTemper.className = "card-temper";
    itemTemper.innerText = name;

    const itemOrigin = document.createElement("p");
    itemOrigin.className = "card-origin";
    itemOrigin.innerText = origin;

    itemDescription.appendChild(itemTemper);
    itemDescription.appendChild(itemOrigin);
    item.appendChild(itemImg);
    item.appendChild(itemDescription);
    cardContianer.appendChild(item);
    this.$target.appendChild(cardContianer);
  }
}
