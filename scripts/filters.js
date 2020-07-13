class Filters extends React.Component {
  state = {
    initialDate: "",
    endDate: "",
    country: null,
    price: null,
    size: null,
  };

  handleOnClickDate = (event) => {
    this.setState({ initialDate: event.target.value });
    this.props.addInitialDateProp(event.target.value);
  };
  handleOnClickDate2 = (event) => {
    this.setState({ endDate: event.target.value });
    this.props.addEndDateProp(event.target.value);
  };
  handleOnClickCountry = (event) => {
    console.log("country"+event.target.value);
    this.setState({ country: event.target.value });
    this.props.filterCountryProp(event.target.value);
  }
  handleOnClickPrice = (event) =>{
    console.log("price"+event.target.value);
    this.setState({ price: event.target.value });
    this.props.filterPriceProp(event.target.value)
  };
  handleOnClickSize = (event) =>{
    this.setState({ size: event.target.value });
    this.props.filterSizeProp(event.target.value)
  };

  render() {
    const countryOption = countries.map((e) => <option key={e}>{e}</option>);
    return (
      <div>
        <input type="date" value={ this.state.initialDate } onChange={this.handleOnClickDate}></input>
        <input type="date" value={ this.state.endDate } onChange={this.handleOnClickDate2}></input>
        <select onChange={this.handleOnClickCountry}>
          <option value="all"> Todos los países</option>
          {countryOption}
        </select>
        <select onChange={this.handleOnClickPrice}>
          <option value="all">Cualquier precio</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
        <select onChange={this.handleOnClickSize}>
          <option value="all"> Cualquier tamaño </option>
          <option value="little"> Hotel pequeño </option>
          <option value="medium"> Hotel mediano </option>
          <option value="big"> Hotel grande </option>
        </select>
      </div>
    );
  }
}
