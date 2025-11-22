import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Image as ImageIcon, Trash2, Edit, PackageOpen } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();

  // Mock data
  const item = {
    id,
    title: "Winter Clothes Collection",
    description: "Collection of winter clothing including jackets, sweaters, and accessories. All items are cleaned and in good condition.",
    category: "Clothing",
    box: "A-123",
    status: "Active",
    dateStored: "Dec 15, 2024",
    images: [],
  };

  return (
    <div className="space-y-6">
      <Link to="/client/storage" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to storage
      </Link>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2">{item.title}</h1>
          <div className="flex items-center gap-3 text-muted-foreground">
            <span>{item.category}</span>
            <span>•</span>
            <span className="font-mono">Box: {item.box}</span>
            <span>•</span>
            <Badge variant={item.status === "Active" ? "default" : "secondary"}>
              {item.status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-soft-md">
            <CardHeader>
              <CardTitle>Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {item.images.length > 0 ? (
                  item.images.map((img: string, i: number) => (
                    <div key={i} className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img src={img} alt={`${item.title} ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft-md">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-soft-md">
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Storage Box</p>
                <p className="font-mono font-semibold">{item.box}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Category</p>
                <p className="font-medium">{item.category}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date Stored</p>
                <p className="font-medium">{item.dateStored}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant={item.status === "Active" ? "default" : "secondary"}>
                  {item.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft-md">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="default">
                <PackageOpen className="w-4 h-4 mr-2" />
                Request Retrieval
              </Button>
              <Button className="w-full" variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Edit Details
              </Button>
              <Button className="w-full" variant="destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Item
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
