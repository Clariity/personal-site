import Image from "next/image";

import { ButtonLink } from "../utils/ButtonLink";
import {
  FooterColumn,
  FooterCopyright,
  FooterExternalLink,
  FooterGitHubLink,
  FooterHeading,
  FooterLink,
  FooterLinkedInLink,
  FooterTwitterLink,
} from "./FooterComponents";

// add link to Hackathon survival guide

export function Footer() {
  return (
    <div className="flex flex-col border-t-2 pt-4 border-primary border-solid">
      <div className="flex flex-wrap justify-between">
        <div className="my-4 w-full xl:w-2/5">
          <FooterHeading>
            Welcome to my little corner of the internet
          </FooterHeading>
          <p className="my-1 text-base font-light">
            If you&apos;re reading this, you&apos;ve scrolled too far. This is
            the site footer. But whilst I have your curiosity - give someone a
            compliment today, it might make their day.
          </p>
          <div className="my-4">
            <ButtonLink link="/">Take me home</ButtonLink>
          </div>
        </div>

        <FooterColumn>
          <FooterHeading>Site Content</FooterHeading>
          <FooterLink link="/" text="Home Page" />
          <FooterLink link="/about" text="About Ryan" />
          <FooterLink link="/projects" text="Latest Projects" />
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Check These Out</FooterHeading>
          <FooterExternalLink
            link="https://chessopenings.co.uk"
            text="chessopenings.co.uk"
          />
          <FooterExternalLink
            link="https://react-chessboard.com"
            text="react-chessboard"
          />
          <FooterExternalLink link="https://sld.codes" text="sld.codes" />
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Connect</FooterHeading>
          <p className="my-1 text-base font-light">
            Connect with me on my socials.
          </p>
          <div className="flex my-2">
            <FooterTwitterLink />
            <FooterLinkedInLink />
            <FooterGitHubLink />
          </div>
        </FooterColumn>
      </div>

      <div className="mt-8 lg:my-4 flex flex-wrap justify-between items-center">
        <FooterCopyright />

        <div className="flex items-center m-auto my-8 lg:m-0">
          <div className="flex items-center mt-1">
            <Image
              src="/logos/logo.svg"
              alt="initials R and G"
              width={32}
              height={18}
            />
          </div>
          <p className="pl-2">ryangregory.dev</p>
        </div>
      </div>
    </div>
  );
}
