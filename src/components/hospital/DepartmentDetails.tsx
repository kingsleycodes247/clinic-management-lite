
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Users, UserCheck, Calendar, Phone, Mail, MapPin, Edit, Plus } from "lucide-react";

interface DepartmentDetailsProps {
  departmentId: string;
  onBack: () => void;
}

const DepartmentDetails = ({ departmentId, onBack }: DepartmentDetailsProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock department data
  const department = {
    id: departmentId,
    name: "Cardiology",
    description: "Specialized care for heart and cardiovascular conditions",
    head: "Dr. Sarah Johnson",
    location: "Floor 3, Wing A",
    phone: "+1 (555) 123-4567",
    email: "cardiology@medicare.com",
    totalStaff: 15,
    totalPatients: 32,
    totalBeds: 20,
    availableBeds: 8
  };

  const staff = [
    {
      id: "S001",
      name: "Dr. Sarah Johnson",
      role: "Department Head",
      specialization: "Interventional Cardiology",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@medicare.com",
      shift: "Day",
      status: "Active"
    },
    {
      id: "S002",
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      specialization: "Electrophysiology",
      phone: "+1 (555) 234-5678",
      email: "michael.chen@medicare.com",
      shift: "Day",
      status: "Active"
    },
    {
      id: "S003",
      name: "Nurse Lisa Davis",
      role: "Senior Nurse",
      specialization: "Cardiac Care",
      phone: "+1 (555) 345-6789",
      email: "lisa.davis@medicare.com",
      shift: "Night",
      status: "Active"
    }
  ];

  const patients = [
    {
      id: "P001",
      name: "John Smith",
      age: 65,
      condition: "Myocardial Infarction",
      admissionDate: "2024-01-20",
      bed: "C-301",
      doctor: "Dr. Sarah Johnson",
      status: "Stable"
    },
    {
      id: "P002",
      name: "Mary Wilson",
      age: 58,
      condition: "Atrial Fibrillation",
      admissionDate: "2024-01-22",
      bed: "C-305",
      doctor: "Dr. Michael Chen",
      status: "Improving"
    }
  ];

  const equipment = [
    {
      id: "E001",
      name: "Echocardiogram Machine",
      model: "Philips EPIQ 7",
      status: "Operational",
      lastMaintenance: "2024-01-15",
      nextMaintenance: "2024-04-15"
    },
    {
      id: "E002",
      name: "Cardiac Monitor",
      model: "GE Dash 5000",
      status: "Operational",
      lastMaintenance: "2024-01-10",
      nextMaintenance: "2024-04-10"
    },
    {
      id: "E003",
      name: "Defibrillator",
      model: "Zoll X Series",
      status: "Maintenance Required",
      lastMaintenance: "2023-12-01",
      nextMaintenance: "2024-03-01"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Departments</span>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {department.name} Department
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {department.description}
            </p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
          <Edit className="h-4 w-4" />
          <span>Edit Department</span>
        </Button>
      </div>

      {/* Department Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{department.totalStaff}</div>
            <p className="text-xs text-gray-500">Active members</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Patients</CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{department.totalPatients}</div>
            <p className="text-xs text-gray-500">Under care</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Beds</CardTitle>
            <Calendar className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{department.totalBeds}</div>
            <p className="text-xs text-gray-500">Department capacity</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Beds</CardTitle>
            <Calendar className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{department.availableBeds}</div>
            <p className="text-xs text-gray-500">Ready for admission</p>
          </CardContent>
        </Card>
      </div>

      {/* Department Info */}
      <Card>
        <CardHeader>
          <CardTitle>Department Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <UserCheck className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Department Head</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{department.head}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{department.location}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{department.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{department.email}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <div className="border-b">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'staff', label: 'Staff Members' },
            { id: 'patients', label: 'Current Patients' },
            { id: 'equipment', label: 'Equipment' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'staff' && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Staff Members</CardTitle>
              <CardDescription>Department staff and their roles</CardDescription>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Staff</span>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Specialization</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Shift</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staff.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium text-blue-600">{member.id}</TableCell>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>{member.specialization}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{member.phone}</div>
                        <div className="text-gray-500">{member.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{member.shift}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {member.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {activeTab === 'patients' && (
        <Card>
          <CardHeader>
            <CardTitle>Current Patients</CardTitle>
            <CardDescription>Patients currently admitted to this department</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Admission Date</TableHead>
                  <TableHead>Bed</TableHead>
                  <TableHead>Attending Doctor</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium text-blue-600">{patient.id}</TableCell>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.condition}</TableCell>
                    <TableCell>{patient.admissionDate}</TableCell>
                    <TableCell>{patient.bed}</TableCell>
                    <TableCell>{patient.doctor}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        patient.status === 'Stable' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {patient.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {activeTab === 'equipment' && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Department Equipment</CardTitle>
              <CardDescription>Medical equipment and maintenance status</CardDescription>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Equipment</span>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Equipment ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Maintenance</TableHead>
                  <TableHead>Next Maintenance</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipment.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium text-blue-600">{item.id}</TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.model}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'Operational' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.status}
                      </span>
                    </TableCell>
                    <TableCell>{item.lastMaintenance}</TableCell>
                    <TableCell>{item.nextMaintenance}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DepartmentDetails;
