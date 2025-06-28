
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, Plus, Eye, Edit, Building2, Users, UserCheck, Calendar } from "lucide-react";
import DepartmentDetails from "./DepartmentDetails";

const DepartmentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  
  const departments = [
    {
      id: "D001",
      name: "Cardiology",
      head: "Dr. Sarah Johnson",
      totalStaff: 15,
      totalPatients: 32,
      totalBeds: 20,
      availableBeds: 8,
      location: "Floor 3, Wing A",
      phone: "+1 (555) 123-4567",
      status: "Active"
    },
    {
      id: "D002",
      name: "Neurology",
      head: "Dr. Michael Chen",
      totalStaff: 12,
      totalPatients: 18,
      totalBeds: 15,
      availableBeds: 5,
      location: "Floor 4, Wing B",
      phone: "+1 (555) 234-5678",
      status: "Active"
    },
    {
      id: "D003",
      name: "Orthopedics",
      head: "Dr. Emily Davis",
      totalStaff: 10,
      totalPatients: 25,
      totalBeds: 18,
      availableBeds: 3,
      location: "Floor 2, Wing C",
      phone: "+1 (555) 345-6789",
      status: "Active"
    },
    {
      id: "D004",
      name: "Pediatrics",
      head: "Dr. James Wilson",
      totalStaff: 18,
      totalPatients: 40,
      totalBeds: 30,
      availableBeds: 12,
      location: "Floor 1, Wing A",
      phone: "+1 (555) 456-7890",
      status: "Active"
    },
    {
      id: "D005",
      name: "Emergency",
      head: "Dr. Lisa Martinez",
      totalStaff: 25,
      totalPatients: 15,
      totalBeds: 12,
      availableBeds: 8,
      location: "Ground Floor",
      phone: "+1 (555) 567-8901",
      status: "Active"
    }
  ];

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.head.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedDepartment) {
    return (
      <DepartmentDetails 
        departmentId={selectedDepartment} 
        onBack={() => setSelectedDepartment(null)} 
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Department Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage hospital departments and their operations</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Department</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Departments</CardTitle>
            <Building2 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-500">Active departments</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80</div>
            <p className="text-xs text-gray-500">Across all departments</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <UserCheck className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">130</div>
            <p className="text-xs text-gray-500">Currently admitted</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Beds</CardTitle>
            <Calendar className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">36</div>
            <p className="text-xs text-gray-500">Ready for admission</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Departments</CardTitle>
          <CardDescription>Find departments by name or department head</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Departments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Hospital Departments</CardTitle>
          <CardDescription>
            {filteredDepartments.length} department{filteredDepartments.length !== 1 ? 's' : ''} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Department Head</TableHead>
                <TableHead>Staff</TableHead>
                <TableHead>Patients</TableHead>
                <TableHead>Beds (Total/Available)</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDepartments.map((department) => (
                <TableRow key={department.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <TableCell className="font-medium text-blue-600">{department.id}</TableCell>
                  <TableCell>
                    <div className="font-medium text-gray-900 dark:text-white">{department.name}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{department.head}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <div className="font-medium">{department.totalStaff}</div>
                      <div className="text-xs text-gray-500">members</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <div className="font-medium">{department.totalPatients}</div>
                      <div className="text-xs text-gray-500">patients</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <div className="font-medium">{department.totalBeds} / {department.availableBeds}</div>
                      <div className="text-xs text-gray-500">total / available</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{department.location}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{department.phone}</div>
                  </TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs">
                      {department.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedDepartment(department.id)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                      >
                        <Eye className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                      >
                        <Edit className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DepartmentManagement;
