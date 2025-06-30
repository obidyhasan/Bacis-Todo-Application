import { deleteUser } from "@/redux/features/user/UserSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border p-4 rounded-md flex items-center justify-between">
      <h1 className="font-semibold">{user.name}</h1>
      <Trash2
        onClick={() => dispatch(deleteUser(user.id))}
        className="w-4 text-red-400"
      />
    </div>
  );
};

export default UserCard;
