import StatusBadge from "./StatusBadge";
import React from "react";

const UserCard = React.memo(({ user }) => {
  return (
    <>
      <h4>{user.name}</h4>
      <p>{user.city}</p>
      <StatusBadge isActive={user.isActive} />
    </>
  );
});

export default UserCard;
