import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <h3 className="text-center font-bold text-2xl mb-4">Add User</h3>
      <div className="flex flex-col border-2 p-5  border-gray-400 rounded  pt-10 ">
        <label className="mb-2 text-base text-gray-800 ">Name</label>
        <input
          type="text"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          placeholder="John Doe"
          className="bg-gray-200 py-2 px-3 border-2 outline-none"
        />
        <br />
        <label className="mb-2 text-base text-gray-800 ">E-mail</label>
        <input
          type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          placeholder="johndoe@mail.com"
          className="bg-gray-200 py-2 px-3 border-2 outline-none"
        />
        <div>
          <Button onClick={handleAddUser}>Submit</Button>
          <Link to="/">
            <button className="ml-2 bg-red-600 text-white py-2 px-6 my-10 rounded hover:bg-red-700  border-2 border-red-500">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
