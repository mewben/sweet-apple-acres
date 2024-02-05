import Link from "next/link";
import { Button } from "./ui/button";
import { Logo } from "./logo";

const footerLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Terms and Conditions",
    link: "/terms-and-conditions",
  },
  {
    label: "Shipping and Return Policy",
    link: "/shipping-and-return-policy",
  },
  {
    label: "FAQ",
    link: "/faq",
  },
];
export const Footer = () => {
  return (
    <footer className="border-t py-12 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start">
          <Logo className="mb-4 scale-75 opacity-50" />
          <nav className="md:ml-24">
            <ul className="flex flex-col md:flex-row gap-2">
              {footerLinks.map((item, i) => (
                <li key={i}>
                  <Button variant="link" asChild>
                    <Link href={item.link}>{item.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
