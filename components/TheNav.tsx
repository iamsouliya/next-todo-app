import Link from "next/link";
import { Button } from "./ui/button";

export default function TheNav() {
  const itemMenus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  return (
    <div className="flex h-16 items-center justify-between bg-slate-100 px-4">
      <h1>TODONEXT</h1>
      <div>
        <ul className="flex items-center gap-2">
          {itemMenus.map((item) => (
            <li key={item.name}>
              <Button variant="link" asChild>
                <Link href={item.link}>{item.name}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
