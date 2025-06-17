import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import FunctionReference from "./pages/FunctionReference";
import OOPReference from "./pages/OOPReference";
import DOMReference from "./pages/DOMReference";
import AsyncJSReference from "./pages/AsyncJSReference";
import WebAPIReference from "./pages/WebAPIReference";
import ES6Reference from "./pages/ES6Reference";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/study" element={<Study />} />
          <Route path="/study/:techId" element={<Study />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/:techId" element={<Practice />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/interpreter" element={<Interpreter />} />
          <Route path="/regex" element={<Regex />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/data-generator" element={<DataGenerator />} />
          <Route path="/data-types" element={<DataTypes />} />
          <Route path="/api-client" element={<ApiClient />} />
          <Route path="/functions" element={<FunctionReference />} />
          <Route path="/oop" element={<OOPReference />} />
          <Route path="/dom" element={<DOMReference />} />
          <Route path="/async-js" element={<AsyncJSReference />} />
          <Route path="/web-api" element={<WebAPIReference />} />
          <Route path="/es6" element={<ES6Reference />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
