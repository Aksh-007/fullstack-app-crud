import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  // here we have to so three task get , edit and delete

  // we need some variable to store data so thats why we create state
  const [data, setData] = useState(""); // or we can set it null

  // created function to fetch data from backend
  const fetchData = async () => {
    // here storing rsponse in res variable
    const res = await axios.get("/getallusers");
    console.log(res);

    // if No users are there then dont set the values
    if (res.data.users.length > 0) {
      setData(res.data.users);
    }
  };

  // usecase of useEffect
  // its not good practice to keep async await in useEffect
  useEffect(() => {
    fetchData();
  }, [data]);

  // creating function to handle edit
  const edit = async (user) => {
    const userName = prompt("Enter new name");
    const userEmail = prompt("Enter new email");

    if (!userName || !userEmail) {
      alert("Please enter both name and email");
    } else {
      const resp = await axios.put(`/editUser/${user._id}`, {
        name: userName,
        email: userEmail,
      });
      console.log(resp);
    }
  };

  // creating a function for delete
  const deleteHandler = async (userId) =>{
    const resp = await axios.delete(`/deleteUser/${userId}`);
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All Users
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Email
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Edit
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map &&
                data.map((i) => (
                  <tr>
                    <td className="px-4 py-3">{i.name}</td>
                    <td className="px-4 py-3">{i.email}</td>
                    <td className="px-4 py-3">
                      <button className="hover:text-green-500"
                       onClick={() => edit(i)}
                      >Edit</button>
                    </td>
                    <td className="px-4 py-3 text-lg text-gray-900">
                      <button className="hover:text-red-500"
                       onClick={() => deleteHandler(i._id)}
                      >Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserList;
