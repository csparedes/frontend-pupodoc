"use server";

import { createSession, deleteSession } from "../../lib/session";
import { redirect } from "next/navigation";
import { loginSchema } from "./schemas";

const testUser = {
  id: "1",
  email: "admin@gmail.com",
  password: "12345678",
};



export async function login(prevState: any, formData: any) {
  const result = loginSchema.safeParse(formData);

  setTimeout(() => {
    console.log("Pls delete this")
  }, 3000);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    console.log("Wrong credentials")    
    return {
      errorMessage: "Wrong credentials"
    };
  }

  await createSession(testUser.id);

  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}



