import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Index from "./pages/Index";
import Register from "./pages/Register";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import FAQ from "./pages/FAQ";
import Sponsors from "./pages/Sponsors";
import Participants from "./pages/Participants";
import NotFound from "./pages/NotFound";

// Add a background pattern style
const gridBackgroundStyle = `
  .bg-grid-pattern {
    background-color: hsla(var(--background));
    background-image: linear-gradient(hsla(var(--primary) / 0.05) 1px, transparent 1px),
      linear-gradient(to right, hsla(var(--primary) / 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
  }
`;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Add inline style for grid pattern */}
      <style dangerouslySetInnerHTML={{ __html: gridBackgroundStyle }} />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/participants" element={<Participants />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
