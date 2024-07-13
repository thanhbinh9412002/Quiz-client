import React, {useEffect, useState} from 'react'
import ModalCreateUser from './ModalCreateUser';
import '../scss/ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';
import { getAllUsers, getUserWithPaginate } from '../../../services/ApiFunction';
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalDeleteUser from './ModalDeleteUser';

const ManageUser = (props) => {

  const LIMIT_USER = 7;
  const [pageCount, setPageCount] = useState(0);

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

  const [listUsers, setListUsers] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});
  const [dataDelete, setDataDelete] = useState({});


  useEffect(() =>{
        fetchListUsers(1);
    },[])

  const fetchListUsers = async(page) =>{
      // let res = await getAllUsers(); hàm này sẽ lấy toàn bộ danh sách user nhưng không phân trang
      // if(res.EC === 0){
      //     setListUsers(res.DT)
      // }
      let res = await getUserWithPaginate(page, LIMIT_USER);
      if(res.EC === 0){
          setListUsers(res.DT.users)
          setPageCount(res.DT.totalPages)
      }
  }

  const handleClickUpdateUser = (user) =>{
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  }

  // nếu không có hàm này thì useEffect ở modal update không có cập nhật dẫn đến việc 
  // khi chọn cùng một user ở lần thứ 2 trở đi nếu không có update thì sẽ không hiển thị 
  // thông tin user ở trên form
  const resetUpdateData = () =>{
    setDataUpdate({});
  }

  const handleClickViewUser = (user) =>{
    setShowModalViewUser(true);
    setDataView(user);
  }

  const handleClickDeleteUser = (user) =>{
    setShowModalDeleteUser(true);
    setDataDelete(user);
  }


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
          <TableUser listUsers={listUsers}
                    handleClickUpdateUser={handleClickUpdateUser}
                    handleClickViewUser={handleClickViewUser}
                    handleClickDeleteUser={handleClickDeleteUser}
                    fetchListUsers={fetchListUsers}
                    pageCount={pageCount}/>

          <ModalCreateUser show={showModalCreateUser} 
                          setShow={setShowModalCreateUser} 
                          fetchListUsers={fetchListUsers} />

          <ModalUpdateUser show={showModalUpdateUser}
                          setShow={setShowModalUpdateUser}
                          fetchListUsers={fetchListUsers}
                          dataUpdate={dataUpdate}
                          resetUpdateData={resetUpdateData}/>
          
          <ModalViewUser show={showModalViewUser}
                        setShow={setShowModalViewUser}
                        dataView={dataView}/>

          <ModalDeleteUser show={showModalDeleteUser}
                          setShow={setShowModalDeleteUser}
                          fetchListUsers={fetchListUsers}
                          dataDelete={dataDelete}/>
        </div>
      </div>
    </div>
  )
}

export default ManageUser