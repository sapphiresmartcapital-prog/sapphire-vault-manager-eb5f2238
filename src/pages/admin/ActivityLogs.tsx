import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

const mockLogs = [
  { id: 1, action: "User Signup", user: "John Doe", details: "New user registered", time: "2 hours ago", type: "success" },
  { id: 2, action: "Item Stored", user: "Jane Smith", details: "Winter clothes stored in A-123", time: "3 hours ago", type: "info" },
  { id: 3, action: "Payment Processed", user: "Bob Johnson", details: "Monthly subscription - $99.00", time: "5 hours ago", type: "success" },
  { id: 4, action: "Item Retrieved", user: "Alice Williams", details: "Sports equipment retrieved", time: "1 day ago", type: "info" },
  { id: 5, action: "Failed Login", user: "unknown@example.com", details: "Invalid credentials", time: "1 day ago", type: "warning" },
];

const ActivityLogs = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Activity Logs</h1>
        <p className="text-muted-foreground">Monitor system activity and user actions</p>
      </div>

      <Card className="shadow-soft-md">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockLogs.map((log) => (
              <div key={log.id} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  log.type === "success" ? "bg-success/10" :
                  log.type === "warning" ? "bg-warning/10" :
                  "bg-info/10"
                }`}>
                  <Activity className={`w-5 h-5 ${
                    log.type === "success" ? "text-success" :
                    log.type === "warning" ? "text-warning" :
                    "text-info"
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-semibold">{log.action}</h3>
                      <p className="text-sm text-muted-foreground">{log.user}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{log.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{log.details}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivityLogs;
