import { BaseUrl } from "../../config/index";

export function registerUser(data) {
  fetch(`${BaseUrl.auth}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
