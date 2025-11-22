import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockItems = [
  { id: 1, title: "Winter Clothes", user: "John Doe", box: "A-123", status: "Active", date: "Dec 15, 2024" },
  { id: 2, title: "Holiday Decorations", user: "Jane Smith", box: "B-456", status: "Active", date: "Dec 10, 2024" },
  { id: 3, title: "Sports Equipment", user: "Bob Johnson", box: "C-789", status: "Pending", date: "Dec 8, 2024" },
  { id: 4, title: "Documents", user: "Alice Williams", box: "D-012", status: "Retrieved", date: "Dec 5, 2024" },
];

const StorageItems = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Storage Items</h1>
        <p className="text-muted-foreground">View and manage all stored items</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      <Card className="shadow-soft-md">
        <CardHeader>
          <CardTitle>All Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Box</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.user}</TableCell>
                  <TableCell className="font-mono">{item.box}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "Active"
                          ? "default"
                          : item.status === "Pending"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default StorageItems;
