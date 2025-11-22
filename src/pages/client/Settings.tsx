import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Shield, Bell, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const settingsSections = [
  {
    icon: User,
    title: "Profile",
    description: "Manage your personal information",
    href: "/client/profile",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Password and authentication settings",
    href: "/client/security",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Configure your notification preferences",
    href: "/client/notifications",
  },
  {
    icon: CreditCard,
    title: "Billing",
    description: "Manage payments and subscriptions",
    href: "/client/payments",
  },
];

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.title} to={section.href}>
              <Card className="shadow-soft-sm hover:shadow-soft-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
