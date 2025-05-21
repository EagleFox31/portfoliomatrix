import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(20, { message: "Message must be at least 20 characters" })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      contactFormSchema.parse(formData);
      
      // Clear all errors
      setErrors({});
      
      // Submit form
      setIsSubmitting(true);
      
      await apiRequest('POST', '/api/contact', formData);
      
      // Show success toast
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Set validation errors
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        // Show error toast
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-mono text-[hsl(var(--matrix-green))] mb-2">
            <span className="text-white">&gt;</span> Contact<span className="text-white">_</span>
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--matrix-green))] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <Card className="border border-[hsl(var(--matrix-green))]/30 bg-black/60 backdrop-blur-sm rounded-lg p-8 shadow-lg shadow-[hsl(var(--matrix-green))]/10">
            <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  className="w-full px-4 py-2 bg-black/80 border border-[hsl(var(--matrix-green))]/50 rounded-md text-white focus:outline-none focus:border-[hsl(var(--matrix-green))]"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-black/80 border border-[hsl(var(--matrix-green))]/50 rounded-md text-white focus:outline-none focus:border-[hsl(var(--matrix-green))]"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Subject" 
                  className="w-full px-4 py-2 bg-black/80 border border-[hsl(var(--matrix-green))]/50 rounded-md text-white focus:outline-none focus:border-[hsl(var(--matrix-green))]"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  placeholder="Your message" 
                  className="w-full px-4 py-2 bg-black/80 border border-[hsl(var(--matrix-green))]/50 rounded-md text-white focus:outline-none focus:border-[hsl(var(--matrix-green))]"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-[hsl(var(--matrix-green))] text-black px-6 py-3 h-auto rounded-md font-mono hover:bg-[hsl(var(--matrix-teal))] transition-colors duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
          
          <Card className="border border-[hsl(var(--matrix-green))]/30 bg-black/60 backdrop-blur-sm rounded-lg p-8 shadow-lg shadow-[hsl(var(--matrix-green))]/10">
            <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[hsl(var(--matrix-dark-green))] p-3 rounded-md mr-4">
                  <MapPin className="text-[hsl(var(--matrix-green))]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-300">Yaoundé, Cameroon</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[hsl(var(--matrix-dark-green))] p-3 rounded-md mr-4">
                  <Mail className="text-[hsl(var(--matrix-green))]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:lawrynnjennifer@gmail.com" 
                    className="text-gray-300 hover:text-[hsl(var(--matrix-green))] transition-colors"
                  >
                    lawrynnjennifer@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[hsl(var(--matrix-dark-green))] p-3 rounded-md mr-4">
                  <Phone className="text-[hsl(var(--matrix-green))]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+237690777859" 
                    className="text-gray-300 hover:text-[hsl(var(--matrix-green))] transition-colors"
                  >
                    +237 6 90 77 78 59
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[hsl(var(--matrix-dark-green))] p-3 rounded-md mr-4">
                  <Linkedin className="text-[hsl(var(--matrix-green))]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/jennifer-lawrynn-aka-a-79842b1b3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[hsl(var(--matrix-green))] transition-colors"
                  >
                    Jennifer Lawrynn Aka'a
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[hsl(var(--matrix-dark-green))] p-3 rounded-md text-[hsl(var(--matrix-green))] hover:bg-[hsl(var(--matrix-green))] hover:text-black transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/jennifer-lawrynn-aka-a-79842b1b3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[hsl(var(--matrix-dark-green))] p-3 rounded-md text-[hsl(var(--matrix-green))] hover:bg-[hsl(var(--matrix-green))] hover:text-black transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[hsl(var(--matrix-dark-green))] p-3 rounded-md text-[hsl(var(--matrix-green))] hover:bg-[hsl(var(--matrix-green))] hover:text-black transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
