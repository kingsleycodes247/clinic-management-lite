
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, Calendar, FileText, Activity, Building2, DollarSign, Pill, Droplets, Syringe, Moon, Sun, LogOut } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import LoginForm from "@/components/auth/LoginForm";
import PatientManagement from "@/components/hospital/PatientManagement";
import DoctorManagement from "@/components/hospital/DoctorManagement";
import AppointmentSystem from "@/components/hospital/AppointmentSystem";
import MedicalRecords from "@/components/hospital/MedicalRecords";
import Dashboard from "@/components/hospital/Dashboard";
import DepartmentManagement from "@/components/hospital/DepartmentManagement";
import BillingSystem from "@/components/hospital/BillingSystem";
import PharmacySystem from "@/components/hospital/PharmacySystem";
import BloodBankSystem from "@/components/hospital/BloodBankSystem";
import PhlebotomySystem from "@/components/hospital/PhlebotomySystem";
import RoleBasedDashboard from "@/components/hospital/RoleBasedDashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("admin");
  const [userInfo, setUserInfo] = useState({ email: "", name: "" });
  const { theme, toggleTheme } = useTheme();

  const handleLogin = (credentials: { email: string; password: string; role: string }) => {
    setIsLoggedIn(true);
    setUserRole(credentials.role);
    setUserInfo({ 
      email: credentials.email, 
      name: credentials.email.split('@')[0] 
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole("admin");
    setUserInfo({ email: "", name: "" });
    setActiveTab("dashboard");
  };

  const getRoleBasedTabs = () => {
    const allTabs = [
      { value: "dashboard", label: "Dashboard", icon: Activity, roles: ["admin", "doctor", "nurse", "pharmacist", "receptionist", "lab_technician", "billing"] },
      { value: "patients", label: "Patients", icon: Users, roles: ["admin", "doctor", "nurse", "receptionist"] },
      { value: "doctors", label: "Doctors", icon: UserCheck, roles: ["admin", "receptionist"] },
      { value: "appointments", label: "Appointments", icon: Calendar, roles: ["admin", "doctor", "nurse", "receptionist"] },
      { value: "records", label: "Records", icon: FileText, roles: ["admin", "doctor", "nurse"] },
      { value: "departments", label: "Departments", icon: Building2, roles: ["admin"] },
      { value: "billing", label: "Billing", icon: DollarSign, roles: ["admin", "billing", "receptionist"] },
      { value: "pharmacy", label: "Pharmacy", icon: Pill, roles: ["admin", "pharmacist", "doctor"] },
      { value: "bloodbank", label: "Blood Bank", icon: Droplets, roles: ["admin", "lab_technician", "doctor"] },
      { value: "phlebotomy", label: "Phlebotomy", icon: Syringe, roles: ["admin", "lab_technician", "nurse"] }
    ];

    return allTabs.filter(tab => tab.roles.includes(userRole));
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-blue-100 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MediCare Technology</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {userInfo.name || "User"}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                  {userRole.replace('_', ' ')}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">
                  {(userInfo.name || "U").charAt(0).toUpperCase()}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300" 
                   style={{ gridTemplateColumns: `repeat(${getRoleBasedTabs().length}, 1fr)` }}>
            {getRoleBasedTabs().map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="flex items-center space-x-2">
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="dashboard">
            {userRole === "admin" ? <Dashboard /> : <RoleBasedDashboard userRole={userRole} />}
          </TabsContent>

          <TabsContent value="patients">
            <PatientManagement />
          </TabsContent>

          <TabsContent value="doctors">
            <DoctorManagement />
          </TabsContent>

          <TabsContent value="appointments">
            <AppointmentSystem />
          </TabsContent>

          <TabsContent value="records">
            <MedicalRecords />
          </TabsContent>

          <TabsContent value="departments">
            <DepartmentManagement />
          </TabsContent>

          <TabsContent value="billing">
            <BillingSystem />
          </TabsContent>

          <TabsContent value="pharmacy">
            <PharmacySystem />
          </TabsContent>

          <TabsContent value="bloodbank">
            <BloodBankSystem />
          </TabsContent>

          <TabsContent value="phlebotomy">
            <PhlebotomySystem />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
