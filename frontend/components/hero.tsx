// src/components/Hero1.tsx
import { MoveRight, MessageCircle, CheckCircle, Info } from "lucide-react"; // Updated import
import { Button } from "./ui/button"; // Ensure this path is correct
import React from "react";

export const Hero1 = () => (
  <div className="w-full bg-gray-100">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Button variant="secondary" size="sm" className="gap-4">
            Read our launch article <MoveRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-bold">
            This is the start of something new
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our goal
            is to streamline SMB trade, making it easier and faster than ever.
          </p>
        </div>
        <div className="flex flex-row gap-3">
        <a href="/chatbot" className="inline-flex">
          <Button size="lg" className="gap-4" variant="outline">
            Chat with Bot <MessageCircle className="w-4 h-4" />
          </Button>
        </a>

          <Button size="lg" className="gap-4">
            Sign up here <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="flex flex-col items-center py-10">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-6">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-xl font-bold">Efficient Processes</h3>
            <p className="text-center">
              Our innovative solutions simplify your business operations, saving you time and effort.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <Info className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold">Expert Support</h3>
            <p className="text-center">
              Our dedicated team is here to assist you every step of the way.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <CheckCircle className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold">Scalable Solutions</h3>
            <p className="text-center">
              We grow with you, offering scalable options to adapt to your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Make sure to export the component
export default Hero1;
