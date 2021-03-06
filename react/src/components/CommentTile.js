import React from 'react';
import { Link } from 'react-router';

const CommentTile = (props) => {
  // username = this
  return(
    <div>
      <div className='row small-centered'>
        <div className='columns small-12'>
          <strong> {props.user.first_name} {props.user.last_name}: </strong>
          {props.comment}
        </div>
      </div>
    </div>
  )
}

export default CommentTile;
