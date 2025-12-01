"use client"

import { Section } from "./section";
import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <Section id="testimonials" className="py-20">
            <div className="space-y-8">
                <div className="space-y-3 text-center">
                    <Badge variant="outline" className="mb-2">Testimonials</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        What People Say
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Recommendations from colleagues, mentors, and collaborators I've worked with.
                    </p>
                </div>

                {/* Main Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <Card className="p-8 md:p-12 relative overflow-hidden">
                        {/* Quote Icon */}
                        <div className="absolute top-6 left-6 opacity-10">
                            <Quote size={80} className="text-primary" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 space-y-6">
                            {/* Rating */}
                            <div className="flex gap-1 justify-center">
                                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} size={20} className="fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-lg md:text-xl text-center leading-relaxed text-muted-foreground italic">
                                "{TESTIMONIALS[currentIndex].text}"
                            </p>

                            {/* Author Info */}
                            <div className="flex flex-col items-center gap-4 pt-4">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                                        <img
                                            src={TESTIMONIALS[currentIndex].image}
                                            alt={TESTIMONIALS[currentIndex].name}
                                            className="w-full h-full rounded-full object-cover bg-background"
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg">{TESTIMONIALS[currentIndex].name}</h4>
                                    <p className="text-sm text-muted-foreground">{TESTIMONIALS[currentIndex].role}</p>
                                    <p className="text-xs text-muted-foreground">{TESTIMONIALS[currentIndex].company}</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-4 mt-6">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevTestimonial}
                            className="rounded-full"
                        >
                            <ChevronLeft size={20} />
                        </Button>

                        {/* Dots Indicator */}
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === currentIndex
                                            ? "bg-primary w-8"
                                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextTestimonial}
                            className="rounded-full"
                        >
                            <ChevronRight size={20} />
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    text: string;
    image: string;
    rating: number;
}

const TESTIMONIALS: TestimonialProps[] = [
    {
        name: "Morgan Front",
        role: "IT Support Specialist",
        company: "Elissar",
        text: "We had the pleasure of welcoming Yanis to our IT development company for a 5-month internship. Throughout his time with us, Yanis distinguished himself by his professionalism, dedication, and strong analytical mindset.He quickly integrated into the team and demonstrated solid expertise in software development, while always remaining open to feedback and eager to learn. His technical abilities, combined with his curiosity and rigor, enabled him to complete all assigned tasks with a high level of professionalism.Beyond his technical skills, Yanis brought great energy to the team through his positive attitude and consistently good spirit. He is a promising young talent who, I am certain, will excel in his future endeavors.I highly recommend Yanis to any employer or organization seeking a motivated, skilled, and committed collaborator.",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQG_ZKnya_X3zg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516481948626?e=1766016000&v=beta&t=LZAlZXb2cMESOk48VtFITqplmIgIE4eskg-ohSZPdfs",
        rating: 5,
    }
];
