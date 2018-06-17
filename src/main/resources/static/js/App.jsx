function App2(props) {
    return (
      <div>
          {props.name}!
      </div>
    );
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            isToggleOn: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.timeId = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick(){
        this.setState({
            date : new Date()
        });
    }

    componentWillUnmount(){
        clearInterval(this.timeId);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    render(){
        return (
          <div className="test">
              <h1>Hello {this.props.surname}  {this.props.name}!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}</h2>
              <h3><App2 name={this.state.date.toLocaleTimeString()} /></h3>
              <button onClick={this.handleClick}>
                  {this.state.isToggleOn ? 'ON' : 'OFF'}
              </button>
          </div>
        );
    }


}