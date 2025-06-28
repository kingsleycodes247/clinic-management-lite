
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, Calendar, FileText, Pill, Droplets, Syringe, DollarSign } from "lucide-react";

interface RoleBasedDashboardProps {
  userRole: string;
}

const RoleBasedDashboard = ({ userRole }: RoleBasedDashboardProps) => {
  const getRoleSpecificContent = () => {
    switch (userRole) {
      case 'doctor':
        return {
          title: "Doctor Dashboard",
          quickActions: [
            { title: "View My Patients", description: "Access your assigned patient list", icon: Users, color: "bg-blue-50 hover:bg-blue-100 text-blue-900" },
            { title: "Today's Appointments", description: "Check your appointment schedule", icon: Calendar, color: "bg-green-50 hover:bg-green-100 text-green-900" },
            { title: "Medical Records", description: "Review and update patient records", icon: FileText, color: "bg-purple-50 hover:bg-purple-100 text-purple-900" },
            { title: "Prescriptions", description: "Write and manage prescriptions", icon: Pill, color: "bg-orange-50 hover:bg-orange-100 text-orange-900" }
          ]
        };
      
      case 'nurse':
        return {
          title: "Nurse Dashboard",
          quickActions: [
            { title: "Patient Care", description: "Monitor and care for patients", icon: Users, color: "bg-pink-50 hover:bg-pink-100 text-pink-900" },
            { title: "Medication Administration", description: "Administer prescribed medications", icon: Pill, color: "bg-blue-50 hover:bg-blue-100 text-blue-900" },
            { title: "Vital Signs", description: "Record patient vital signs", icon: FileText, color: "bg-green-50 hover:bg-green-100 text-green-900" },
            { title: "Shift Handover", description: "Manage shift change reports", icon: UserCheck, color: "bg-yellow-50 hover:bg-yellow-100 text-yellow-900" }
          ]
        };
      
      case 'pharmacist':
        return {
          title: "Pharmacist Dashboard",
          quickActions: [
            { title: "Medication Inventory", description: "Manage drug inventory and stock", icon: Pill, color: "bg-blue-50 hover:bg-blue-100 text-blue-900" },
            { title: "Prescription Review", description: "Review and process prescriptions", icon: FileText, color: "bg-green-50 hover:bg-green-100 text-green-900" },
            { title: "Drug Interactions", description: "Check for drug interactions", icon: UserCheck, color: "bg-red-50 hover:bg-red-100 text-red-900" },
            { title: "Inventory Alerts", description: "Monitor low stock alerts", icon: Users, color: "bg-yellow-50 hover:bg-yellow-100 text-yellow-900" }
          ]
        };
      
      case 'lab_technician':
        return {
          title: "Lab Technician Dashboard",
          quickActions: [
            { title: "Blood Draws", description: "Manage phlebotomy schedule", icon: Syringe, color: "bg-red-50 hover:bg-red-100 text-red-900" },
            { title: "Test Results", description: "Process and report test results", icon: FileText, color: "bg-blue-50 hover:bg-blue-100 text-blue-900" },
            { title: "Blood Bank", description: "Manage blood inventory", icon: Droplets, color: "bg-red-50 hover:bg-red-100 text-red-900" },
            { title: "Lab Equipment", description: "Monitor equipment status", icon: UserCheck, color: "bg-green-50 hover:bg-green-100 text-green-900" }
          ]
        };
      
      case 'billing':
        return {
          title: "Billing Staff Dashboard",
          quickActions: [
            { title: "Patient Billing", description: "Generate and manage bills", icon: DollarSign, color: "bg-green-50 hover:bg-green-100 text-green-900" },
            { title: "Insurance Claims", description: "Process insurance claims", icon: FileText, color: "bg-blue-50 hover:bg-blue-100 text-blue-900" },
            { title: "Payment Processing", description: "Process patient payments", icon: UserCheck, color: "bg-purple-50 hover:bg-purple-100 text-purple-900" },
            { title: "Financial Reports", description: "Generate financial reports", icon: Users, color: "bg-orange-50 hover:bg-orange-100 text-orange-900" }
          ]
        };
      
      case 'receptionist':
        return {
          title: "Receptionist Dashboard",
          quickActions: [
            { title: "Patient Registration", description: "Register new patients", icon: Users, color: "bg-blue-50 hover:bg-blue-100 text-blue-900" },
            { title: "Appointment Scheduling", description: "Schedule patient appointments", icon: Calendar, color: "bg-green-50 hover:bg-green-100 text-green-900" },
            { title: "Patient Check-in", description: "Check-in arriving patients", icon: UserCheck, color: "bg-purple-50 hover:bg-purple-100 text-purple-900" },
            { title: "Visitor Management", description: "Manage hospital visitors", icon: FileText, color: "bg-orange-50 hover:bg-orange-100 text-orange-900" }
          ]
        };
      
      default:
        return {
          title: "Administrator Dashboard",
          quickActions: [
            { title: "System Overview", description: "Monitor hospital operations", icon: Users, color: "bg-blue-50 hover:bg-blue-100 text-blue-900" },
            { title: "Staff Management", description: "Manage hospital staff", icon: UserCheck, color: "bg-green-50 hover:bg-green-100 text-green-900" },
            { title: "Reports & Analytics", description: "View hospital analytics", icon: FileText, color: "bg-purple-50 hover:bg-purple-100 text-purple-900" },
            { title: "System Settings", description: "Configure system settings", icon: Calendar, color: "bg-orange-50 hover:bg-orange-100 text-orange-900" }
          ]
        };
    }
  };

  const content = getRoleSpecificContent();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome to {content.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Quick access to your most important tasks and information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.quickActions.map((action, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-4`}>
                <action.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {action.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {action.description}
              </p>
              <Button variant="outline" className="w-full">
                Access Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your recent actions and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Successfully completed morning rounds
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Updated patient medical records
                </p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Appointment reminder sent
                </p>
                <p className="text-xs text-gray-500">6 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoleBasedDashboard;
