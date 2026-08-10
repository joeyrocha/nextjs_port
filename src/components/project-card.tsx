import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/data/projects";

const CATEGORY_LABEL: Record<Project["category"], string> = {
  work: "work",
  academic: "academic",
  side: "side project",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-colors hover:border-primary/50">
      <div className="relative aspect-video w-full border-b border-border bg-muted/40">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="terminal-texture flex h-full w-full items-center justify-center">
            <span className="rounded border border-dashed border-border/70 bg-background/70 px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
              [[ image: {project.slug}.png ]]
            </span>
          </div>
        )}
        <Badge className="absolute left-3 top-3 font-mono" variant="outline">
          {CATEGORY_LABEL[project.category]}
        </Badge>
      </div>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Badge className="font-mono">{tech}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>

      {(project.liveUrl || project.repoUrl) && (
        <CardFooter>
          {project.liveUrl && (
            <Button asChild size="sm" variant="outline">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild size="sm" variant="ghost">
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
