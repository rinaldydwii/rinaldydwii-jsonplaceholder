import React from "react";
import UserItem from "../items/UserItem";
import Loading from "../Loading";

const UsersSection = ({users, loading, finish, error}) => (
    <section>
        <h2 className="text-center">Users</h2>
        <Loading loading={loading} finish={finish} error={error}>
            { users ? (
                <div className="grid grid-5">
                    { users.map(user => (
                            <UserItem user={user} key={user.id} />
                        )) 
                    }
                </div>
            ) : <div>Users not found!</div>
            }
        </Loading>
    </section>
)
export default UsersSection;