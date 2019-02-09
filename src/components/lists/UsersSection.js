import React from "react";
import UserItem from "../items/UserItem";

const UsersSection = ({users}) => (
    <section>
        <h2 className="text-center">Users</h2>
        { users ? (
            <div className="grid grid-5">
                { users.map(user => (
                        <UserItem user={user} />
                    )) 
                }
            </div>
        ) : <div>Users not found!</div>
        }
    </section>
)
export default UsersSection;