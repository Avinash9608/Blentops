import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import Image from "next/image";

const MOCK_IMAGES = [
  { src: "https://placehold.co/400x300.png", alt: "placeholder 1", name: "hero-image.jpg", size: "128 KB", hint: "abstract background" },
  { src: "https://placehold.co/400x300.png", alt: "placeholder 2", name: "product-bottle.png", size: "96 KB", hint: "water bottle" },
  { src: "https://placehold.co/400x300.png", alt: "placeholder 3", name: "team-photo.jpg", size: "256 KB", hint: "team meeting" },
  { src: "https://placehold.co/400x300.png", alt: "placeholder 4", name: "blog-post-1.jpg", size: "180 KB", hint: "sustainable forest" },
];

export default function MediaPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Media Uploader</CardTitle>
          <CardDescription>Drag and drop files here or click to upload.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted/50 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadCloud className="w-10 h-10 mb-4 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Media Library</CardTitle>
          <CardDescription>Uploaded images and files.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {MOCK_IMAGES.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  data-ai-hint={image.hint}
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-white">
                  <p className="text-xs font-semibold truncate">{image.name}</p>
                  <p className="text-xs opacity-80">{image.size}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
