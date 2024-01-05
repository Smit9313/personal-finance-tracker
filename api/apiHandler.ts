import { Iuser } from '@/types/user';
import { axiosClient } from "./apiClient";

export function signin(data: Iuser) {
  return axiosClient.post("api/v1/auth/signin", data);
}

export function signup(data: Iuser) {
  return axiosClient.post("api/v1/auth/signup", data);
}
