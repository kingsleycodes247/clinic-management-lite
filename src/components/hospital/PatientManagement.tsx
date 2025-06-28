
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Eye, Edit, Phone, Mail } from "lucide-react";

const PatientManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const patients = [
    {
      id: "P001",
      name: "John Doe",
      age: 45,
      gender: "Male",
      phone: "+1 (555) 123-4567",
      email: "john.doe@email.com",
      condition: "Hypertension",
      lastVisit: "2024-01-15",
      status: "Active"
    },
    {
      id: "P002",
      name: "Jane Smith",
      age: 32,
      gender: "Female",
      phone: "+1 (555) 987-6543",
      email: "jane.smith@email.com",
      condition: "Diabetes",
      lastVisit: "2024-01-20",
      status: "Active"
    },
    {
      id: "P003",
      name: "Mike Johnson",
      age: 58,
      gender: "Male",
      phone: "+1 (555) 456-7890",
      email: "mike.johnson@email.com",
      condition: "Heart Disease",
      lastVisit: "2024-01-10",
      status: "Under Treatment"
    },
    {
      id: "P004",
      name: "Sarah Wilson",
      age: 28,
      gender: "Female",
      phone: "+1 (555) 321-0987",
      email: "sarah.wilson@email.com",
      condition: "Pregnancy Care",
      lastVisit: "2024-01-25",
      status: "Active"
    }
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
          <p className="text-gray-600">Manage patient information and medical records</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add New Patient</span>
        </button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search Patients</CardTitle>
          <CardDescription>Find patients by name, ID, or condition</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Patient List */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Records</CardTitle>
          <CardDescription>
            {filteredPatients.length} patient{filteredPatients.length !== 1 ? 's' : ''} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Age/Gender</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-blue-600">{patient.id}</TableCell>
                  <TableCell>
                    <div className="font-medium text-gray-900">{patient.name}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{patient.age} years</div>
                      <div className="text-gray-500">{patient.gender}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center space-x-1">
                        <Phone className="h-3 w-3" />
                        <span>{patient.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Mail className="h-3 w-3" />
                        <span>{patient.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {patient.condition}
                    </span>
                  </TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      patient.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {patient.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit className="h-4 w-4 text-gray-600" />
                      </button>
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

export default PatientManagement;
