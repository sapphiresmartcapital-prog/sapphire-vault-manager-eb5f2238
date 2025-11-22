import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import EmailVerification from "./pages/auth/EmailVerification";

// Client Pages
import { ClientLayout } from "./components/layout/ClientLayout";
import ClientDashboard from "./pages/client/Dashboard";
import MyStorage from "./pages/client/MyStorage";
import AddItem from "./pages/client/AddItem";
import ItemDetails from "./pages/client/ItemDetails";
import Payments from "./pages/client/Payments";
import PaymentHistory from "./pages/client/PaymentHistory";
import Notifications from "./pages/client/Notifications";
import Settings from "./pages/client/Settings";
import Profile from "./pages/client/Profile";
import Security from "./pages/client/Security";

// Admin Pages
import { AdminLayout } from "./components/layout/AdminLayout";
import AdminOverview from "./pages/admin/Overview";
import Users from "./pages/admin/Users";
import StorageItems from "./pages/admin/StorageItems";
import StorageUnits from "./pages/admin/StorageUnits";
import AdminPayments from "./pages/admin/AdminPayments";
import ActivityLogs from "./pages/admin/ActivityLogs";
import SupportTickets from "./pages/admin/SupportTickets";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Root redirect */}
          <Route path="/" element={<Navigate to="/auth/login" replace />} />

          {/* Auth Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/auth/verify-email" element={<EmailVerification />} />

          {/* Client Routes */}
          <Route path="/client/dashboard" element={<ClientLayout><ClientDashboard /></ClientLayout>} />
          <Route path="/client/storage" element={<ClientLayout><MyStorage /></ClientLayout>} />
          <Route path="/client/add-item" element={<ClientLayout><AddItem /></ClientLayout>} />
          <Route path="/client/item/:id" element={<ClientLayout><ItemDetails /></ClientLayout>} />
          <Route path="/client/payments" element={<ClientLayout><Payments /></ClientLayout>} />
          <Route path="/client/payment-history" element={<ClientLayout><PaymentHistory /></ClientLayout>} />
          <Route path="/client/notifications" element={<ClientLayout><Notifications /></ClientLayout>} />
          <Route path="/client/settings" element={<ClientLayout><Settings /></ClientLayout>} />
          <Route path="/client/profile" element={<ClientLayout><Profile /></ClientLayout>} />
          <Route path="/client/security" element={<ClientLayout><Security /></ClientLayout>} />

          {/* Admin Routes */}
          <Route path="/admin/overview" element={<AdminLayout><AdminOverview /></AdminLayout>} />
          <Route path="/admin/users" element={<AdminLayout><Users /></AdminLayout>} />
          <Route path="/admin/items" element={<AdminLayout><StorageItems /></AdminLayout>} />
          <Route path="/admin/units" element={<AdminLayout><StorageUnits /></AdminLayout>} />
          <Route path="/admin/payments" element={<AdminLayout><AdminPayments /></AdminLayout>} />
          <Route path="/admin/logs" element={<AdminLayout><ActivityLogs /></AdminLayout>} />
          <Route path="/admin/tickets" element={<AdminLayout><SupportTickets /></AdminLayout>} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
