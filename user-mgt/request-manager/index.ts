import { RegisterPayload, UpdatePayload } from "@/types";
import { requestEndpoints } from "./endpoints";
import { instance } from "./instance";
import { BASE_URL } from "@/constant";

export const login = async (field: { email: string; password: string }) => {
  try {
    const { data } = await instance.post(requestEndpoints.login, field);
    return data;
  } catch (err: any) {
    if (err.response) {
      const msg = err.response.data.message;
      if (Array.isArray(msg)) {
        return { error: true, message: msg.join(", ") };
      } else return { error: true, message: msg };
    }
    return { error: true, message: err.message };
  }
};

export const validateToken = async (token: string) => {
  try {
    const response = await fetch(BASE_URL + requestEndpoints.validateToken, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ token: token }),
    });

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    const data = await response.json();
    console.log(data);

    //if (data.statusCode) throw new Error();
    return { isValid: true, data };
  } catch (err: any) {
    console.log(err.message);
    return {
      isValid: false,
    };
  }
};

export const register = async (payload: RegisterPayload) => {
  try {
    const { data } = await instance.post(requestEndpoints.register, payload);
    return data;
  } catch (err: any) {
    if (err.response) {
      const msg = err.response.data.message;
      if (Array.isArray(msg)) {
        return { error: true, message: msg.join(", ") };
      } else return { error: true, message: msg };
    }
    return { error: true, message: err.message };
  }
};

export const updateUser = async (id: string, payload: UpdatePayload) => {
  try {
    const { data } = await instance.put(
      requestEndpoints.updateProfile(id),
      payload
    );
    return data;
  } catch (err: any) {
    if (err.response) {
      const msg = err.response.data.message;
      if (Array.isArray(msg)) {
        return { error: true, message: msg.join(", ") };
      } else return { error: true, message: msg };
    }
    return { error: true, message: err.message };
  }
};
