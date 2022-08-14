import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/actions/userActions';
import { Header } from '../components/Header';
// import { Sidebar } from '../components/Sidebar';
import SideBar from "../components/sidebar/index";
import { UserComponent } from '../components/users/UserComponent';

export const UsersPage = () => {

    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.userList);
    const { loading, error, users } = allUsers;
    console.log("users", users);

    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);

  return (
    <div>
      {/* <Header />
      <SideBar /> */}
      <main className="main-wrap">
        <UserComponent users={users} error={error} loading={loading} />
      </main>
    </div>
  );
}
