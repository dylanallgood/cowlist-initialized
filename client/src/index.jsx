import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import Search from './components/Search';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowList: [],
    };
  }

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch() {
    axios.get(`http://127.0.0.1:3000/api/cows`).then((res) => {
      let cows = res.data;
      this.setState({ cowList: cows });
    });
  }

  render() {
    return (
      <div>
        <List cowList={this.state.cowList} />
        <Search search={this.handleSearch} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
