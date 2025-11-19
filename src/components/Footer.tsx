import { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Bounded } from "./Bounded";

export function Footer() {
  return (
    <Bounded as="footer" className="bg-black text-gray-400">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="shrink-0">
            <Logo className="h-8 w-auto" />
            <span className="sr-only">Tiepo home</span>
          </Link>
          <p className="mt-4 text-center text-sm md:text-left">
            © {new Date().getFullYear()} Tiepo Keyboards. All rights reserved.
          </p>
        </div>
      </div>
    </Bounded>
  );
}

type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm transition-colors hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
    >
      {children}
    </Link>
  );
}
