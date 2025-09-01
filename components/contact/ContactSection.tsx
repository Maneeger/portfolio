import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/Card";
import ContactForm from "./ContactForm";

interface ContactSectionProps {
  contactEmail?: string;
  contactPhone?: string;
  contactLocation?: string;
}

const ContactSection = ({
  contactEmail = "info@example.com",
  contactPhone = "+1 (555) 123-4567",
  contactLocation = "123 Business Street, City, Country",
}: ContactSectionProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-darkglass">
      <div className="container px-4 md:px-6 mx-auto">
        

        <div className="grid grid-cols-1 md:flex gap-8 items-start bg-background">
          {/* Left Column - Contact Information */}
          <Card className="h-full bg-card w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl text-white font-bold">
                Contact Information
              </CardTitle>
              <CardDescription className="text-white">
                Reach out to us using any of the following methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-white">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-white">Mail</h3>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-white">Phone No</h3>
                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contactPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">{contactLocation}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full pt-4 border-t border-border text-white">
                <h4 className="font-medium mb-2">Business Hours</h4>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM
                </p>
                <p className="text-sm text-muted-foreground">
                  Saturday - Sunday: Closed
                </p>
              </div>
            </CardFooter>
          </Card>

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
