import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../../redux/actions/userActions';
import { Header } from '../../components/Header';
// import { Sidebar } from '../components/Sidebar';
import SideBar from "../../components/sidebar/index";
import { UserComponent } from './components/UserComponent';

export const UsersPage = () => {

    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.userList);
    const [refresh, setRefresh] = useState(false)
    const { loading, error, users } = allUsers;
    console.log("users", users);
   
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = users?.filter((user) => {
        return (
          user.name.toLowerCase().includes(keyword.toLowerCase()) ||
          user.email.toLowerCase().includes(keyword.toLowerCase())
        );
        // Use the toLowerCase() method to make it case-insensitive
      });
    

      setFilteredData(results);
    } else {
      setFilteredData(users);
    }
    setValue(keyword);
  };

    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch, refresh]);

  return (
    <div>
      {/* <Header />
      <SideBar /> */}
      <main className="main-wrap">
        <UserComponent
          users={filteredData?.length > 0 ? filteredData : users}
          handleFilter={handleFilter}
          value={value}
          setValue={setValue}
          error={error}
          loading={loading}
          setRefresh={setRefresh}
        />
      </main>
    </div>
  );
}
