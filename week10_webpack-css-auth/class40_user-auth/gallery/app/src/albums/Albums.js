import React, { Component } from 'react';
import AddAlbum from './AddAlbum';
import { Link } from 'react-router-dom';

export default class Albums extends Component {

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    const { user, albums, loading, error } = this.props;
    const { removeAlbum, addAlbum } = this.props;

    if(loading) return <div>Loading...</div>;

    return (
      <div>
        <h2>Current Albums</h2>
        <ul>
          {albums.map(({ _id, name, owner }) => {
            const isOwner = user._id === owner;
            return (
              <li key={_id}>
                <Link to={`/albums/${_id}`}>
                  {name} { isOwner && '☆'}
                </Link>
                { isOwner && <button className="action" onClick={() => removeAlbum(_id)}>🗑</button> }
              </li>
            );
          })}
        </ul>
        {error && <pre style={{ color: 'red' }}>{error}</pre>}
        <AddAlbum addAlbum={addAlbum}/>
      </div>
    );
  }
}