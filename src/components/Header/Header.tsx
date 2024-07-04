import { NavBar } from "../NavBar/NavBar";
import { RequestButton } from "../RequestButton/RequestButton";

export function Header() {
  return (
    <header>
      <img src="public/logo.svg" alt="EveryBank Logo" />
      <NavBar />
      <RequestButton />
    </header>
  );
}
