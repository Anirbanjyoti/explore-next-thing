import React from "react";
import Link from 'next/link'

const index = ({ users }) => {
  return (
    <div>
      <h1>The total users: {users.length}</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h4>
            Name : {user.name}           
            <Link href={`/users/${user.id}`}>
              <button>explore</button>
            </Link>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default index;

// Data Load instead of useEffect
export async function getStaticProps(context) {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  return {
    props: { users: data }, // will be passed to the page component as props
  };
}
