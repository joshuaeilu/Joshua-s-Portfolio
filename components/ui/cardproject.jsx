
import {Card} from '@/components/ui/card';
import Link from "next/link";
import Image from 'next/image';

export default function CardProject(props) {
  return (
    <Card className="w-full max-w-xl h-3/5 p-6 grid gap-6">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={props.projectImage}
          width="100%"
          height="100%"
          alt="Project Thumbnail"
          className="object-cover aspect-[4/3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold">{props.projectTitle}</h3>
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <p className="text-base">
            {props.projectDescription}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-muted-foreground">Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {
              props.projectTechnologies.map((technology) => (
                <div className="bg-muted px-3 py-1 rounded-full text-xs font-medium text-muted-foreground">{technology}</div>

              ))
            }
            
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link
            href={props.projectGithub}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            prefetch={false}
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </Link>
          <Link
            href={props.projectDemo}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            prefetch={false}
          >
            <GlobeIcon className="w-4 h-4" />
            Live Demo
          </Link>
        </div>
      </div>
    </Card>
  )
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}