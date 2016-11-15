import React from 'react';
import ReactDOM from 'react-dom';

var MyBook = React.createClass({
  render: function() {
    return (
      <div className='book'>
        <div className='title'>
          Learning Algebra with CS
        </div>
        <div className='author'>
          Clayton Dagler
        </div>
        <ul className='stats'>
          <li className='rating'>
            5 Stars
          </li>
          <li className='isbn'>
            12-345678-910
          </li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <MyBook/>,
  document.getElementById('root')
);
