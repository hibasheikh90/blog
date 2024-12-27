import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface BlogcardProps {
  post: { id: string; title: string; description: string; image: string };
}

const Blogcard = ({ post }: BlogcardProps) => {
  return (
    <Card
      className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Image
        src={post.image}
        alt={post.title}
        width={500}
        height={500}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardContent>
        <CardTitle className="text-xl font-normal mt-4">
          {post.title}
        </CardTitle>
        {/* Only the first 100 characters of the description */}
        <p className="mt-2 text-left">
          {post.description.substring(0, 100)}...
        </p>
      </CardContent>
      <div className="flex flex-col mt-4 items-center">
        {/* Link for client-side navigation */}
        <Link
          href={`/post/${post.id}`}
          className="px-6 text-white bg-blue-950 rounded hover:bg-blue-900"
        >
          Read More
        </Link>
      </div>
    </Card>
  );
};

export default Blogcard;
