import React, { useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import "./UserList.css";
import axios from "axios";
import { Link } from "react-router-dom";

interface IState {
  users: IUser[];
}

const UserList: React.FC = () => {
  const [state, setState] = useState<IState>({
    users: [],
  });
  useEffect(() => {
    let getApiData = async () => {
      try {
        let responce = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(responce.data);
        setState({ users: responce.data });
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    getApiData();
  }, []);

  return (
    <div className="list">
      <hr></hr>
      <h1>UserList ASSIGN4</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <Link to={`/Details/${user.id}`}>
                <td>{user.name}</td>
              </Link>

              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
