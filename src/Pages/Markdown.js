import React from 'react';
import Editor from '../Components/Editor';
import Preview from '../Components/Preview';

class Markdown extends React.Component {
    render() {
      return (
        <section className="mark-down-container">
            <Editor />
            <Preview />
        </section>
      )
    }
}

export default Markdown;
