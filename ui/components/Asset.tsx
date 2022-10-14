import React from 'react';

class Asset extends React.Component<{ name: string, content: string }> {
  render() {
    return (
      <div className='Asset'>
        <header className='Asset-header'>
          <h1>{this.props.name}</h1>
          {this.props.content}
        </header>
      </div>
    )
  }
}

export default Asset;
