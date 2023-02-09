import React, { useState } from "react";
import axios from "axios";

const Form = () => {
 
  // we need some variable to store data of input field name and email so we are creating state
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  //check the username and email
  console.log(userName, email);

  //creating a function to send the data 
  const submitData = async () =>{
    const data = {
      name : userName,
      email : email,
      
    };

    // here we are sending response to backend
    const res = await axios.post("/createUser", data);
    console.log(res);
  };

   // every time we click submit it will refresh the page so prevent refreshing the page we are using function
   const handleSubmit = (event) => {
    event.preventDefault();
    //to submit data
    submitData();
    // here we have to empty the name and email to empty
    setUserName('');
    setEmail('');
  };


  return (
    <div>
      {/* so we are preventing form to refresh after submiting */}
      <form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Create User
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      // sending the value of name to database
                      value={userName}
                      onChange={(event) => setUserName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                       // sending the value of name to database
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Form;
