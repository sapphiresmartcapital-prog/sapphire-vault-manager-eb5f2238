import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const mockTickets = [
  { id: "TKT-001", user: "John Doe", subject: "Cannot access item", status: "Open", priority: "High", date: "2 hours ago" },
  { id: "TKT-002", user: "Jane Smith", subject: "Payment issue", status: "In Progress", priority: "Medium", date: "1 day ago" },
  { id: "TKT-003", user: "Bob Johnson", subject: "Account verification", status: "Resolved", priority: "Low", date: "2 days ago" },
  { id: "TKT-004", user: "Alice Williams", subject: "Storage unit request", status: "Open", priority: "Medium", date: "3 days ago" },
];

const SupportTickets = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Support Tickets</h1>
        <p className="text-muted-foreground">Manage customer support requests</p>
      </div>

      <div className="space-y-4">
        {mockTickets.map((ticket) => (
          <Card key={ticket.id} className="shadow-soft-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{ticket.subject}</h3>
                      <Badge
                        variant={
                          ticket.status === "Open"
                            ? "destructive"
                            : ticket.status === "In Progress"
                            ? "secondary"
                            : "default"
                        }
                      >
                        {ticket.status}
                      </Badge>
                      <Badge variant="outline">{ticket.priority}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-mono">{ticket.id}</span>
                      <span>•</span>
                      <span>{ticket.user}</span>
                      <span>•</span>
                      <span>{ticket.date}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Ticket
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SupportTickets;
