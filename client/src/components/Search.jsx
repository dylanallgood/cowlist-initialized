import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  onNameChange(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
  }

  onDescriptionChange(e) {
    e.preventDefault();
    this.setState({
      description: e.target.value,
    });
  }

  handleSubmit() {
    let name = this.state.name;
    let description = this.state.description;
    axios
      .post(`http://127.0.0.1:3000/api/cows`, {
        name: name,
        description: description,
      })
      .then(() => this.props.search())
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '20vh',
        }}>
        <h1>Add A Cow</h1>
        <form className='ui mini form'>
          <div className='equal width fields'>
            <div className='field'>
              <input
                value={this.state.name}
                onChange={(e) => this.onNameChange(e)}
                placeholder='Name'
                style={{ width: '200px', border: 'solid thin' }}
              />
            </div>
            <div className='field'>
              <input
                value={this.state.description}
                onChange={(e) => this.onDescriptionChange(e)}
                placeholder='Description'
                style={{ width: '200px', border: 'solid thin' }}
              />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className='ui button' onClick={() => this.handleSubmit()}>
              Submit
            </button>
          </div>
          <div className='ui hidden divider'></div>
        </form>
      </div>
    );
  }
}
