import React from "react";
import UserItem from "../items/UserItem";
import Loading from "../Loading";
import ReadMoreButton from "../ReadMoreButton";

const UsersSection = ({users, loading, finish, error, onLoadUsers, paginateToPage = false, paginate = false}) => (
    <section>
        <h2 className="text-center">Users</h2>
        <Loading loading={loading} finish={finish} error={error}>
            { users ? (
                <div className="grid grid-4">
                    { users.map(user => (
                            <UserItem user={user} key={user.id} />
                        )) 
                    }
                </div>
            ) : <div>Users not found!</div>
            }
            { paginateToPage ? <ReadMoreButton to="/users" /> : "" }
            { paginate ? <ReadMoreButton onClick={onLoadUsers} /> : ""}
        </Loading>
    </section>
)
export default UsersSection;