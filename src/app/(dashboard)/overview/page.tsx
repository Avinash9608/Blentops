
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MOCK_STATS, MOCK_RECENT_ACTIVITIES } from "@/lib/constants";
import * as LucideIcons from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { day: 'Mon', sales: 2400, subscriptions: 120, traffic: 2200 },
  { day: 'Tue', sales: 1398, subscriptions: 100, traffic: 1900 },
  { day: 'Wed', sales: 9800, subscriptions: 200, traffic: 4800 },
  { day: 'Thu', sales: 3908, subscriptions: 150, traffic: 3500 },
  { day: 'Fri', sales: 4800, subscriptions: 180, traffic: 4200 },
  { day: 'Sat', sales: 3800, subscriptions: 160, traffic: 3900 },
  { day: 'Sun', sales: 4300, subscriptions: 170, traffic: 4100 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
  subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-2))",
  },
  traffic: {
    label: "Traffic",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const QUICK_ACTIONS = [
    { label: "Add New Product", icon: "PlusCircle", href: "/pages/products"},
    { label: "Write a Blog Post", icon: "Feather", href: "/pages/blog"},
    { label: "Update Home Page", icon: "Home", href: "/pages/home"},
    { label: "Manage Media", icon: "Image", href: "/media"}
]

const GradientStatCard = ({ title, value, icon, gradientClass }: { title: string, value: string, icon: keyof typeof LucideIcons, gradientClass: string }) => {
  const IconComponent = LucideIcons[icon] as React.ElementType;
  return (
    <Card className={`text-white ${gradientClass}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {IconComponent && <IconComponent className="h-4 w-4 text-white/80" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

export default function DashboardOverviewPage() {
  const gradientClasses = ["bg-midnight-bloom", "bg-arielle-smile", "bg-grow-early", "bg-premium-dark"];

  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {MOCK_STATS.map((stat, index) => (
          <GradientStatCard 
            key={stat.title} 
            {...stat} 
            gradientClass={gradientClasses[index % gradientClasses.length]}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
            <CardDescription>A summary of sales, subscriptions, and traffic over the last week.</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                  <Tooltip
                    cursor={false}
                    contentStyle={{
                      background: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="subscriptions" fill="var(--color-subscriptions)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="traffic" fill="var(--color-traffic)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-2">
                    {QUICK_ACTIONS.map(action => {
                        const IconComponent = LucideIcons[action.icon as keyof typeof LucideIcons] as React.ElementType;
                        return (
                            <Button key={action.label} variant="outline" asChild className="justify-start">
                                <a href={action.href}>
                                    {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
                                    {action.label}
                                </a>
                            </Button>
                        )
                    })}
                </CardContent>
            </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            A log of the most recent updates made in the admin panel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Activity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_RECENT_ACTIVITIES.map((activity, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Badge variant="outline">{activity.page}</Badge>
                  </TableCell>
                  <TableCell>{activity.user}</TableCell>
                  <TableCell>{activity.time}</TableCell>
                  <TableCell>{activity.activity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
