import React from 'react';

class Asset extends React.Component<{ name: string, content: string }> {
  render() {
    return (
      <div className='Asset'>
        <h1 className="reaction-name">{this.props.name}</h1>
        <span className="reaction-content">{this.props.content}</span>
        <button className="copy-button" onClick={() => {navigator.clipboard.writeText(this.props.content)}}>Copy</button>
      </div>
    )
  }
}

export default Asset;
