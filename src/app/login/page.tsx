"use client";

import ButtonUI from "../../components/Button";
import InputUI from "../../components/Input";
import { startTransition, useActionState } from "react";
import { login } from "./actions";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";


export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const [state, formAction, isPending] = useActionState(login, undefined);

  const onSubmitForm = handleSubmit(async (data) => {
    console.log(data);
    startTransition(async () => {
      formAction(data);
    });
  });

  return (
    <form
      // action={formAction}
      onSubmit={onSubmitForm}
      className="flex flex-col p-4 rounded-xl border gap-4"
    >
      <h3 className="text-lg font-semibold">Formulario de Login</h3>
      <InputUI
        label="Email"
        name="email"
        register={register}
        defaultValue=""
        error={errors.email?.message}
      />
      <InputUI
        label="Password"
        name="password"
        register={register}
        type="password"
        defaultValue=""
        error={errors?.password?.message}
      />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ButtonUI type="submit">Login</ButtonUI>
      )}
      {state?.errorMessage && (
        <h1 className="text-red-400 text-md">{state.errorMessage}</h1>
      )}
    </form>
  );
}
