import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Archive, CreditCard, CheckCircle2, AlertCircle } from "lucide-react";

const mockNotifications = [
  {
    id: 1,
    type: "success",
    icon: CheckCircle2,
    title: "Item stored successfully",
    message: "Your Winter Clothes Collection has been stored in box A-123",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "info",
    icon: CreditCard,
    title: "Payment processed",
    message: "Your monthly subscription payment of $99.00 has been processed",
    time: "1 day ago",
    read: false,
  },
  {
    id: 3,
    type: "warning",
    icon: AlertCircle,
    title: "Payment due soon",
    message: "Your next payment of $99.00 is due on January 15, 2025",
    time: "3 days ago",
    read: true,
  },
  {
    id: 4,
    type: "success",
    icon: Archive,
    title: "Item retrieved",
    message: "Your Sports Equipment has been retrieved from storage",
    time: "5 days ago",
    read: true,
  },
];

const Notifications = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with your account activity</p>
        </div>
        <Button variant="outline">Mark all as read</Button>
      </div>

      <div className="space-y-3">
        {mockNotifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <Card
              key={notification.id}
              className={`shadow-soft-sm ${!notification.read ? "border-l-4 border-l-primary" : ""}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      notification.type === "success"
                        ? "bg-success/10"
                        : notification.type === "warning"
                        ? "bg-warning/10"
                        : "bg-info/10"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        notification.type === "success"
                          ? "text-success"
                          : notification.type === "warning"
                          ? "text-warning"
                          : "text-info"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
