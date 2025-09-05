import { BrowserRouter, Route,Routes  } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";

import { Homepage } from "./pages/Homepage";


function Router() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Add pages below */}
      <Route path="/" element={<Homepage/>} />
      {/* Fallback to 404 */}
      <Route element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
