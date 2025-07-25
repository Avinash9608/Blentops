import { HomeEditor } from "@/components/dashboard/page-editors/home-editor";
import { AboutUsEditor } from "@/components/dashboard/page-editors/about-us-editor";
import { ProductsEditor } from "@/components/dashboard/page-editors/products-editor";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function PageEditor({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const renderEditor = () => {
    switch (slug) {
      case "home":
        return <HomeEditor />;
      case "about-us":
        return <AboutUsEditor />;
      case "products":
        return <ProductsEditor />;
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><AlertTriangle /> Under Construction</CardTitle>
              <CardDescription>
                The editor for the &quot;{slug}&quot; page is not yet available.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Please check back later. This feature is coming soon!</p>
            </CardContent>
          </Card>
        );
    }
  };

  return <>{renderEditor()}</>;
}
