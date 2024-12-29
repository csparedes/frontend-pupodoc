import ButtonUI from "../ui/button-ui";
import InputUI from "../ui/input-ui";
import Link from "next/link";

export default function LoginPage() {
  return (
    <form action="" className="flex flex-col p-4 rounded-xl border">
      <h3>Formulario de Login</h3>
      <InputUI label="Usuario" placeholder="Ingrese su usuario" />
      <InputUI
        label="Password"
        placeholder="Ingrese su password"
        type="password"
      />
      <ButtonUI type="submit">
        <Link href={"/dashboard"}>Login</Link>
      </ButtonUI>
    </form>
  );
}
