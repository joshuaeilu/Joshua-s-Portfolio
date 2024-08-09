
import { Card, CardContent } from "@/components/ui/card"

export default function Skill() {
  return (
    <div><Card className="">
    <CardContent className="grid grid-cols-[80px_1fr] gap-4  p-6">
      <div className="bg-muted rounded-md flex items-center justify-center aspect-square">
        <CodeIcon className="w-8 h-8 text-muted-foreground" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Programming Languages</h3>
        <ul className="grid gap-2 text-muted-foreground">
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>C#</li>
          <li>Ruby</li>
        </ul>
      </div>
    </CardContent>
  </Card></div>
  )
}

function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}