import React, {useEffect, useState} from 'react'
import ModalCreateUser from './ModalCreateUser';
import '../scss/ManageUser.scss';

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  return (
    <div className='manage-user-container'>
      <div className='title'>
        Manage User
      </div>
      <div className='users-content'>
        <div className='btn-add-new-user'>
          <button className='btn btn-primary' onClick={() => setShowModalCreateUser(true)}>
            Add new user
          </button>
        </div>
        <div className='table-user-container'>
          table users
          <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser}/>
        </div>
      </div>
    </div>
  )
}

export default ManageUser