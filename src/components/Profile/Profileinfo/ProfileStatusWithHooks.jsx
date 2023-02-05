import React from 'react';
import { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
  const [status, setStatus] = useState(props.status);

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const [editMode, setEditMode] = useState(false);
  const activeEditMode = () => {
    setEditMode(true);
  };
  const deactiveEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activeEditMode}>
            {props.status || '-------------'}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactiveEditMode}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
