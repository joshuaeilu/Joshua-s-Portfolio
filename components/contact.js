
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contacts() {
  return (
    <div id="Contact" className="flex items-center justify-center py-36 px-3  bg-sky-900">
      
      <Card>
        <CardContent className="m-5" >
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Contact Me</h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
              </div>
              <Button>Send message</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}