"use client"
import ContactSection from "@/components/contact/ContactSection";

export default function ContactPage() {
  return (
    <div>
      <div >
         <h1 className="text-7xl font-bold text-[transparent]  w-full text-center  [-webkit-text-stroke-width:1.5px]
            [-webkit-text-stroke-color:grey] ">Contact Me</h1>
      </div>
      {/* contact form */}
      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 md:px-10 lg:px-16">
        <div className="mb-12 text-center">
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-white"> 
            Have a question or want to work together? I'd love to hear from
            you. Fill out the form below and I'll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Contact Section Component */}
        <ContactSection />
      </main>

     
    </div>
  );
}
