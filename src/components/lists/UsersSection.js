import React from "react";
import UserItem from "../items/UserItem";

const UsersSection = ({users}) => (
    <section>
        <h1 className="text-center">Users List</h1>
        <div className="grid grid-5">
            { users.map(user => (
                    <UserItem user={user} />
                )) 
            }
        </div>
    </section>
)
export default UsersSection;