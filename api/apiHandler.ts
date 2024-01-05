import { axiosClient } from "./apiClient";

export function signin() {
  return axiosClient.post("api/v1/auth/signin");
}
