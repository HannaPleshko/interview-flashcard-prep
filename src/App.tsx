
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Index from "@/pages/Index";
import Study from "@/pages/Study";
import Practice from "@/pages/Practice";
import NotFound from "@/pages/NotFound";
import Tasks from "@/pages/Tasks";
import Interpreter from "@/pages/Interpreter";
import Regex from "@/pages/Regex";
import Methods from "./pages/Methods";
import DataGenerator from "./pages/DataGenerator";
import DataTypes from "./pages/DataTypes";
import ApiClient from "./pages/ApiClient";
import UnifiedReference from "./pages/UnifiedReference";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/study/candidate_general_questions_answers" replace />} />
          <Route path="/study/:techId" element={<Study />} />
          <Route path="/allpractice" element={<Index />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/:techId" element={<Practice />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/interpreter" element={<Interpreter />} />
          <Route path="/regex" element={<Regex />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/data-generator" element={<DataGenerator />} />
          <Route path="/data-types" element={<DataTypes />} />
          <Route path="/api-client" element={<ApiClient />} />
          <Route path="/reference" element={<UnifiedReference />} />
          {/* Редиректы со старых страниц справочников */}
          <Route path="/functions" element={<UnifiedReference />} />
          <Route path="/oop" element={<UnifiedReference />} />
          <Route path="/dom" element={<UnifiedReference />} />
          <Route path="/async-js" element={<UnifiedReference />} />
          <Route path="/web-api" element={<UnifiedReference />} />
          <Route path="/es6" element={<UnifiedReference />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
