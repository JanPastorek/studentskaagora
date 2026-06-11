import { loadContent, type NavData } from "@/lib/content";
import { NavbarClient } from "./NavbarClient";

export function Navbar() {
  const { data } = loadContent<NavData>("nav");
  return <NavbarClient data={data} />;
}
