import React from 'react';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
          textAlign: 'left',
        }}
        className='accordion ui fluid styled'
        onClick={() => this.handleClick()}>
        <div className='active title' style={{ fontSize: '20px' }}>
          <i aria-hidden='true' className='dropdown icon'></i>
          {this.props.name}
        </div>
        <div className={`content ${this.state.clicked ? 'active' : ''}`}>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
