import { User } from "models";

export const emptyUserState: User = {
  name: "",
};

export const useUserState = () => useState<User>("user", () => emptyUserState);
