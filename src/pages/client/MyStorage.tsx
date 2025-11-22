import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const mockItems = [
  {
    id: 1,
    title: "Winter Clothes Collection",
    category: "Clothing",
    box: "A-123",
    status: "Active",
    image: null,
  },
  {
    id: 2,
    title: "Holiday Decorations",
    category: "Seasonal",
    box: "B-456",
    status: "Active",
    image: null,
  },
  {
    id: 3,
    title: "Sports Equipment",
    category: "Sports",
    box: "C-789",
    status: "Pending",
    image: null,
  },
  {
    id: 4,
    title: "Important Documents",
    category: "Documents",
    box: "D-012",
    status: "Active",
    image: null,
  },
];

const MyStorage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">My Storage</h1>
        <p className="text-muted-foreground">View and manage your stored items</p>
      </div>

      {/* Search and Filter */}
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

      {/* Items Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockItems.map((item) => (
          <Link key={item.id} to={`/client/item/${item.id}`}>
            <Card className="shadow-soft-sm hover:shadow-soft-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <ImageIcon className="w-12 h-12 text-muted-foreground" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold line-clamp-1">{item.title}</h3>
                    <Badge
                      variant={item.status === "Active" ? "default" : "secondary"}
                      className="ml-2 shrink-0"
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{item.category}</span>
                    <span className="font-mono">Box: {item.box}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyStorage;
