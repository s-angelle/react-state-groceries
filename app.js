
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

  render() {
    return (
      <div>
        <h1>Organic Grocery Store</h1>
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
          <label htmlFor="price">Price:</label>
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
          <input type="submit" />
        </form>
        <div>
          <h2>Preview our new item</h2>
          <h3>Name: {this.state.name}</h3>
          <h4>Brand: {this.state.brand}</h4>
          <h4>Price: ${this.state.price}</h4>
          <h5>Units: {this.state.units}</h5>
          <h5>Quantity: {this.state.quantity}</h5>
        </div>
        <h2>PRODUCTS</h2>
        <ul>
          {this.state.items
           .filter(item => item.isPurchased!=true)
            .map((item) => (
              <li>
                <p>{item.name}</p>
                <p>{item.brand}</p>
                <p>${item.price}</p>
                <p>{item.units}</p>
                <p>{item.quantity}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
