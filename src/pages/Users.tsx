import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/UserSlice";
import { useAppStore } from "@/redux/hook";

const Users = () => {
  const users = useAppStore(selectUsers);

  return (
    <div className="mx-auto mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">User</h1>
        <AddUserModal />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
