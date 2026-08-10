import Link from "next/link";
import { Github, Globe, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site, social } from "@/data/site";

const LINKS = [
  { href: social.email, label: "Email", icon: Mail },
  { href: social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: social.github, label: "GitHub", icon: Github },
  { href: social.site, label: "jrochaperez.com", icon: Globe },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="font-mono text-sm text-primary">08. contact</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s talk data
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Have a dashboard, pipeline, or CRM mess that needs a systems
          thinker? Reach out.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href={social.email}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            {site.email}
          </Link>
        </Button>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {LINKS.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <Button asChild variant="ghost" size="sm">
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-border px-6 py-6 text-center font-mono text-xs text-muted-foreground">
        &copy; {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
