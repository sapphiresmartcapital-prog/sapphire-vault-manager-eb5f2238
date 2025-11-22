import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";

const mockUnits = [
  { id: "A-123", status: "Occupied", user: "John Doe", item: "Winter Clothes" },
  { id: "A-124", status: "Available", user: null, item: null },
  { id: "B-456", status: "Occupied", user: "Jane Smith", item: "Holiday Decorations" },
  { id: "B-457", status: "Available", user: null, item: null },
  { id: "C-789", status: "Occupied", user: "Bob Johnson", item: "Sports Equipment" },
  { id: "C-790", status: "Available", user: null, item: null },
];

const StorageUnits = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Storage Units</h1>
        <p className="text-muted-foreground">Manage storage boxes and allocation</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockUnits.map((unit) => (
          <Card key={unit.id} className="shadow-soft-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Box className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-mono">{unit.id}</CardTitle>
                  </div>
                </div>
                <Badge variant={unit.status === "Available" ? "secondary" : "default"}>
                  {unit.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {unit.status === "Occupied" ? (
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Assigned to</p>
                    <p className="font-medium">{unit.user}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Item</p>
                    <p className="font-medium">{unit.item}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    Release Unit
                  </Button>
                </div>
              ) : (
                <Button variant="outline" size="sm" className="w-full">
                  Assign Unit
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StorageUnits;
