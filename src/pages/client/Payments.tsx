import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Payments = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Payments</h1>
          <p className="text-muted-foreground">Manage your payment methods and billing</p>
        </div>
        <Button asChild>
          <Link to="/client/add-payment">
            <Plus className="w-4 h-4 mr-2" />
            Add Payment Method
          </Link>
        </Button>
      </div>

      {/* Current Plan */}
      <Card className="shadow-soft-md">
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Premium Plan</h3>
              <p className="text-muted-foreground">Up to 50 items storage</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">$99.00</p>
              <p className="text-sm text-muted-foreground">per month</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">Next billing date</p>
              <p className="font-medium">January 15, 2025</p>
            </div>
            <Badge>Active</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card className="shadow-soft-md">
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-primary rounded flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Default</Badge>
                <Button variant="ghost" size="sm">Remove</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;
