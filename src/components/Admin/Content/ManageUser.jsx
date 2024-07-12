import React, {useEffect, useState} from 'react'
import ModalCreateUser from './ModalCreateUser';
import '../scss/ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  return (
    <div className='manage-user-container'>
      <div className='title'>
        Manage User
      </div>
      <div className='users-content'>
        <div className='btn-add-new-user'>
          <button className='btn btn-outline-primary' onClick={() => setShowModalCreateUser(true)}>
            <FcPlus /> Add new user
          </button>
        </div>
        <div className='table-user-container'>
          <TableUser/>
          <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser}/>
        </div>
      </div>
    </div>
  )
}

export default ManageUser