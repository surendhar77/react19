import { useState } from "react";

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "sjs", age: 25 },
    { name: "saravan", age: 30 },
    { name: "karthi", age: 35 },
    { name: "vigneswaran", age: 45 },
  ]);

  // Derived state: count of users
  console.log(users);
  const userCount = users.length;
  // Derived state: average age of users
  const averageAge =
    users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
      <p>Total Users: {userCount}</p>
      <p>Average Age: {averageAge}</p>
    </div>
  );
};

