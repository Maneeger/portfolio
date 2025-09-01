import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
  recaptcha: z.boolean().refine((val) => val === true, {
    message: "Please verify you are not a robot",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSubmit?: (data: FormValues) => void;
}

const ContactForm = ({ onSubmit = () => {} }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      recaptcha: false,
    },
  });

  const handleFormSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // In a real implementation, you would send the form data to your backend
      await onSubmit(data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(
        "There was an error submitting your form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[linear-gradient(to_right,rgba(46,18,18,0.3),rgba(50,45,40,0.0))] bg-gradient-to-tr p-6 rounded-lg shadow-md w-full">
      <h2 className="text-4xl font-bold mb-6 text-foreground text-white">
        Let's Work <span className=" text-amber-500"> Together.</span>
      </h2>

      {submitSuccess && (
        <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
          <AlertDescription>
            Thank you for your message! I'll get back to you soon.
          </AlertDescription>
        </Alert>
      )}

      {submitError && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{submitError}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name" className="block mb-2 text-white">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            {...register("name")}
            className={errors.name ? "border-red-500" : "" }
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div >
          <Label htmlFor="email" className="block mb-2 text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="subject" className="block mb-2 text-white">
            Your Subject/Project Idea
          </Label>
          <Input
            id="subject"
            placeholder="What's your project about?"
            {...register("subject")}
            className={errors.subject ? "border-red-500" : ""}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="block mb-2 text-white">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Tell me more about your project..."
            rows={5}
            {...register("message")}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="recaptcha"
            {...register("recaptcha")}
            className={errors.recaptcha ? "border-red-500" : ""}
          />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="recaptcha"
              className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I'm not a robot (reCAPTCHA)
            </Label>
            {errors.recaptcha && (
              <p className="text-red-500 text-sm">{errors.recaptcha.message}</p>
            )}
            <p className="text-sm text-muted-foreground text-white">
              In a real implementation, this would be replaced with an actual
              reCAPTCHA component.
            </p>
          </div>
        </div>

        <Button type="submit" className="w-full mt-6" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
