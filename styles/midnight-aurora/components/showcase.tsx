"use client"

import * as React from "react"
import { Moon, Sun, Plus, Settings, User, CreditCard, LogOut, Check, Info, AlertCircle } from "lucide-react"

import { Button } from "./button"
import { Badge } from "./badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"
import { Input } from "./input"
import { Label } from "./label"
import { Checkbox } from "./checkbox"
import { Switch } from "./switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Alert, AlertDescription, AlertTitle } from "./alert"
import { Progress } from "./progress"
import { Skeleton } from "./skeleton"
import { Separator } from "./separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"

function Section({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  )
}

export function Showcase() {
  const [isDark, setIsDark] = React.useState(true)
  const [progress, setProgress] = React.useState(66)

  React.useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-6">
            <div>
              <h1 className="text-2xl font-semibold">Midnight Aurora</h1>
              <p className="text-sm text-muted-foreground">Token Atelier Component Showcase</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Theme:</span>
              <Button variant="outline" size="sm" onClick={() => setIsDark(!isDark)}>
                {isDark ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto space-y-16 px-6 py-12">
          {/* Color Palette */}
          <Section title="Color Palette" description="Aurora-inspired colors: teal, purple, and pink accents">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {[
                { name: "Primary", color: "bg-primary", label: "Aurora Teal" },
                { name: "Secondary", color: "bg-secondary", label: "Aurora Purple" },
                { name: "Accent", color: "bg-accent", label: "Aurora Pink" },
                { name: "Muted", color: "bg-muted border", label: "Subtle BG" },
                { name: "Destructive", color: "bg-destructive", label: "Error Red" },
                { name: "Card", color: "bg-card border", label: "Surface" },
              ].map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className={`h-20 rounded-lg ${item.color}`} />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="font-mono text-xs text-muted-foreground">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Buttons */}
          <Section title="Buttons" description="Six variants across four sizes">
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon"><Plus className="h-4 w-4" /></Button>
                </div>
              </div>
            </div>
          </Section>

          {/* Badges */}
          <Section title="Badges" description="Status indicators and labels">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </Section>

          {/* Cards */}
          <Section title="Cards" description="Container components with header, content, and footer">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Card content with some example text to show the layout and spacing.</p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm">Action</Button>
                  <Button size="sm" variant="outline">Cancel</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">Jane Doe</p>
                      <p className="text-xs text-muted-foreground">Product Designer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">A simple card with an avatar and user information.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <CardTitle className="mb-2">Statistics</CardTitle>
                  <div className="text-3xl font-bold text-primary">2,847</div>
                  <p className="text-sm text-muted-foreground">Total users this month</p>
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* Form Elements */}
          <Section title="Form Elements" description="Inputs, checkboxes, switches, and more">
            <div className="max-w-md space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="hello@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="notifications" defaultChecked />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>

              <Button className="w-full">Submit</Button>
            </div>
          </Section>

          {/* Select */}
          <Section title="Select" description="Dropdown selection with keyboard navigation">
            <div className="max-w-xs space-y-4">
              <div className="space-y-2">
                <Label>Framework</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="vite">Vite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Section>

          {/* Radio Group */}
          <Section title="Radio Group" description="Single selection from a list of options">
            <div className="max-w-md space-y-6">
              <div className="space-y-3">
                <Label>Notification Preferences</Label>
                <RadioGroup defaultValue="all">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">All notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="important" id="important" />
                    <Label htmlFor="important">Important only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">None</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Section>

          {/* Tabs */}
          <Section title="Tabs" description="Tabbed navigation for content sections">
            <div className="max-w-lg">
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>Make changes to your account here.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Jane Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@janedoe" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>Change your password here.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current">Current Password</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new">New Password</Label>
                        <Input id="new" type="password" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Settings</CardTitle>
                      <CardDescription>Manage your preferences.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-notif">Email notifications</Label>
                        <Switch id="email-notif" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="marketing">Marketing emails</Label>
                        <Switch id="marketing" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </Section>

          {/* Accordion */}
          <Section title="Accordion" description="Collapsible content panels">
            <div className="max-w-lg">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that match the other components' aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Section>

          {/* Dialog */}
          <Section title="Dialog" description="Modal dialogs for important interactions">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="dialog-name">Name</Label>
                    <Input id="dialog-name" defaultValue="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dialog-username">Username</Label>
                    <Input id="dialog-username" defaultValue="@janedoe" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Section>

          {/* Dropdown Menu */}
          <Section title="Dropdown Menu" description="Contextual menus triggered by buttons">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Section>

          {/* Avatar */}
          <Section title="Avatar" description="User profile images with fallback support">
            <div className="flex flex-wrap items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-secondary text-secondary-foreground">AS</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-accent text-accent-foreground">MK</AvatarFallback>
              </Avatar>
            </div>
          </Section>

          {/* Progress */}
          <Section title="Progress" description="Progress bars for loading and completion states">
            <div className="max-w-md space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-muted-foreground">{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Complete</span>
                  <span className="text-muted-foreground">100%</span>
                </div>
                <Progress value={100} />
              </div>
            </div>
          </Section>

          {/* Alerts */}
          <Section title="Alerts" description="Notification and feedback messages">
            <div className="max-w-2xl space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the CLI.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>
          </Section>

          {/* Separator */}
          <Section title="Separator" description="Visual dividers for content sections">
            <div className="max-w-md space-y-6">
              <div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">Horizontal</h3>
                <div className="space-y-4">
                  <p className="text-sm">Content above the separator</p>
                  <Separator />
                  <p className="text-sm">Content below the separator</p>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">Vertical</h3>
                <div className="flex h-8 items-center gap-4">
                  <span className="text-sm">Item 1</span>
                  <Separator orientation="vertical" />
                  <span className="text-sm">Item 2</span>
                  <Separator orientation="vertical" />
                  <span className="text-sm">Item 3</span>
                </div>
              </div>
            </div>
          </Section>

          {/* Tooltip */}
          <Section title="Tooltip" description="Contextual information on hover">
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add new item</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View profile</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </Section>

          {/* Skeleton */}
          <Section title="Skeleton" description="Loading placeholders">
            <div className="max-w-md space-y-4">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </div>
          </Section>
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t">
          <div className="container mx-auto px-6 py-8 text-center">
            <p className="text-sm text-muted-foreground">
              Midnight Aurora - Premium style guide by <strong>Token Atelier</strong>
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <Badge variant="outline">20 Components</Badge>
              <Badge variant="outline">Radix UI</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}

export default Showcase
