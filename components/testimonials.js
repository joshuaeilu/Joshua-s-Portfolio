"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {myTestimonials} from "@/lib/data"; 
import Autoplay from "embla-carousel-react"
 

export default function Testimonials() {
  return (
    <div id="Testimonials"  className="flex justify-center pt-56 md:pt-96 p-5  bg-sky-900 items-center">
        <Carousel
       
        opts={{
            align: "start",
            loop: true,
        }}
        className="w-4/5">
      <CarouselContent>
        {myTestimonials.map((testimonial, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="w-full max-w-md p-6 grid gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-14 h-14">
                <AvatarImage src="/josh_img.jpg" alt="Testimonial Author" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.title}</div>
              </div>
            </div>
            <blockquote className="text-muted-foreground">
              {testimonial.testimonial}
            </blockquote>
            <div className="text-sm text-muted-foreground">
              <time dateTime="2024-08-04">{testimonial.date}</time>
            </div>
          </Card>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
