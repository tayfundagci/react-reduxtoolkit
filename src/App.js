import React from "react";
import UserList from "./features/users/UserList";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32 ">
        <h1 className="text-center font-bold text-2xl text-gray-700 mb-5">
          CRUD with redux toolkit
        </h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
