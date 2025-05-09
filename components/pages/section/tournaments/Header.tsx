import { Search } from "lucide-react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import React, { ReactElement } from "react";

export default function Header():ReactElement {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 -z-10"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300/20 rounded-full filter blur-3xl -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300/20 rounded-full filter blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Tournaments
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Explore past, ongoing, and upcoming Mobile Legends tournaments from
            around the world
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              placeholder="Search tournaments by name, location, or type..."
              className="pl-10 py-6 rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md"
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}