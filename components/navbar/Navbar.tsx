import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { LinkText } from "../utils/LinkText";
import { GithubLink } from "./GithubLink";

export function Navbar() {
  const { pathname } = useRouter();

  return (
    <div className="flex items-center w-full my-2">
      <div className="flex items-center w-1/5 mx-1">
        <Link href="/">
          <a className="flex hover:opacity-70">
            <Image
              src="/logos/logo.svg"
              alt="initials R and G"
              width={90}
              height={52}
            />
          </a>
        </Link>
      </div>

      <div className="flex ml-auto text-sm sm:text-lg">
        <div className="mr-4">
          <LinkText href="/about" highlight={pathname === "/about"}>
            About
          </LinkText>
        </div>
        <LinkText href="/projects" highlight={pathname.includes("/projects")}>
          Projects
        </LinkText>
      </div>

      <GithubLink />
    </div>
  );
}
