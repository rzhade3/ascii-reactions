import React from 'react';
import path from 'path';
import Link from 'next/link';

class Asset extends React.Component<{ filename: string, content: string }> {
  static userFileName(filename: string): string {
    return path.parse(filename).name.replaceAll('_', ' ');
  }

  static githubLink(filename: string): string {
    return `${process.env.repoUrl}/tree/main/reactions/${filename}`;
  }

  render() {
    return (
      <div className='Asset' id={Asset.userFileName(this.props.filename)}>
        <h1 className="reaction-name">{Asset.userFileName(this.props.filename)}</h1>
        <span className="reaction-content">{this.props.content}</span>
        <button className="button1 copy-button" onClick={() => {navigator.clipboard.writeText(this.props.content)}}>Copy</button>
        <button className='button1 github-link'>
          <Link href={Asset.githubLink(this.props.filename)}>
            <a>Open on GitHub</a>
          </Link>
        </button>
      </div>
    )
  }
}

export default Asset;
