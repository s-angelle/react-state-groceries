class App extends React.Component {
  state = {
    items: itemsList,
    name: "",
    brand: "",
    price: 0,
    units: "",
    quantity: 0,
    isPurchased: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name: this.state.name,
      brand: this.state.brand,
      price: this.state.price,
      units: this.state.units,
      quantity: this.state.quantity,
    };

    this.setState({
      items: [newItem, ...this.state.items],
    });
  };

  isPurchased = (e, clickedItem) => {
    const purchasedItemIndex = this.state.items.indexOf(clickedItem)
    const purchasedItems = this.state.items.filter(item => item != this.state.items[purchasedItemIndex])
    this.setState({
        items: purchasedItems
    })
  };

  render() {
    return (
      <div id="main">
        <h1>Organic Grocery Store</h1>
        <h3>Add an Item to Our Store :</h3>
        <div class='item-section'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
          />
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            value={this.state.brand}
            onChange={this.handleChange}
            id="brand"
          />
          <label htmlFor="price">Price: $</label>
          <input
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
            id="price"
          />
          <label htmlFor="units">Units:</label>
          <input
            type="text"
            value={this.state.units}
            onChange={this.handleChange}
            id="units"
          />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            value={this.state.quantity}
            onChange={this.handleChange}
            id="quantity"
          />
          <div id='new-item' class='item-section' >
          <input type="submit" value='Create' />
          </div>
        </form>
        </div>
        <div id="items-display">
        <h2>Our Products</h2>
          <ul id="items-available">
            {this.state.items
              .filter((item) => item.isPurchased != true)
              .map((item) => (
                <li>
                  <p>{item.name}</p>
                  <p>{item.brand}</p>
                  <p>${item.price}</p>
                  <p>{item.units}</p>
                  <p>{item.quantity} available</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
