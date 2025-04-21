import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DashboardContentProps {
  title: string;
  description?: string;
}

export function DashboardContent({
  title,
  description,
}: DashboardContentProps) {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CardDescription>Monthly revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
            <div className="mt-4 h-20 rounded-md bg-muted/50" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <CardDescription>Daily active users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
            <div className="mt-4 h-20 rounded-md bg-muted/50" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <CardDescription>Visitors to customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.2%</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
            <div className="mt-4 h-20 rounded-md bg-muted/50" />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <div className="min-h-[50vh] rounded-md bg-muted/50" />
        </CardContent>
      </Card>

      {/* Add some extra content to demonstrate scrolling */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Content</CardTitle>
          <CardDescription>This content demonstrates scrolling</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-24 rounded-md bg-muted/50" />
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
