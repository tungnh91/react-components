class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    }
  }

  onListItemMouseEnter() {
    this.setState({
      hovering: true
    });
  }

  onListItemMouseLeave() {
    this.setState({
      hovering: false
    })
  }

  render() {
    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };

    return (
      <li
        style={style}
        onMouseLeave={this.onListItemMouseLeave.bind(this)}
        onMouseEnter={this.onListItemMouseEnter.bind(this)}
      >
        {this.props.item}
      </li>
    )
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList items={['kale', 'cucumbers']} />, document.getElementById('app'));