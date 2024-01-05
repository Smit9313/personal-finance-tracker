import { axiosClient } from "./apiClient";

export function signin(data: any) {
  return axiosClient.post("api/v1/auth/signin", data);
}

export function signup(data: any) {
  return axiosClient.post("api/v1/auth/signup", data);
}
