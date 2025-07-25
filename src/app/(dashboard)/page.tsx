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
import { StatCard } from "@/components/dashboard/stat-card";
import { MOCK_STATS, MOCK_RECENT_ACTIVITIES } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {MOCK_STATS.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
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
