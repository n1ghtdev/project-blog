import React from 'react';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { notes: [] };
  }

  componentDidMount() {
    fetch('/api/blog')
    .then(res => {
      return res.json();
    }).then(data => {
      let notes = data.map((note) => {
        return (
          <li key={note.id}>
            <strong>{ note.title }</strong>
            <p>{ note.description }</p>
          </li>
        )
      })
      this.setState({ notes });
      console.log("state", this.state.notes);
    })
  }

  render() {
    return (
      <div>
        <h1>Blog Notes</h1>
        <ul>
          { this.state.notes }
        </ul>
      </div>
    );
  }
}