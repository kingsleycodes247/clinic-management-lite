
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, Plus, Syringe, Clock, User, CheckCircle } from "lucide-react";

const PhlebotomySystem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const bloodDraws = [
    {
      id: "BD001",
      patientName: "John Doe",
      patientId: "P001",
      testType: "Complete Blood Count",
      priority: "Routine",
      scheduledTime: "09:00 AM",
      status: "Completed",
      phlebotomist: "Sarah Johnson",
      date: "2024-01-25"
    },
    {
      id: "BD002",
      patientName: "Jane Smith",
      patientId: "P002",
      testType: "Lipid Panel",
      priority: "Urgent",
      scheduledTime: "10:30 AM",
      status: "In Progress",
      phlebotomist: "Mike Wilson",
      date: "2024-01-25"
    },
    {
      id: "BD003",
      patientName: "Bob Johnson",
      patientId: "P003",
      testType: "Glucose Test",
      priority: "STAT",
      scheduledTime: "11:15 AM",
      status: "Pending",
      phlebotomist: "Lisa Davis",
      date: "2024-01-25"
    },
    {
      id: "BD004",
      patientName: "Alice Brown",
      patientId: "P004",
      testType: "Thyroid Panel",
      priority: "Routine",
      scheduledTime: "02:00 PM",
      status: "Scheduled",
      phlebotomist: "Tom Martinez",
      date: "2024-01-25"
    }
  ];

  const filteredDraws = bloodDraws.filter(draw =>
    draw.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    draw.testType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Scheduled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'STAT': return 'bg-red-100 text-red-800';
      case 'Urgent': return 'bg-orange-100 text-orange-800';
      case 'Routine': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Phlebotomy Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage blood draws and specimen collection</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Schedule Draw</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Draws</CardTitle>
            <Syringe className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-gray-500">Scheduled today</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">18</div>
            <p className="text-xs text-gray-500">Finished draws</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">6</div>
            <p className="text-xs text-gray-500">Awaiting collection</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">STAT Orders</CardTitle>
            <Syringe className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-gray-500">Urgent priority</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Blood Draws</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by patient name or test type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Blood Draws Table */}
      <Card>
        <CardHeader>
          <CardTitle>Blood Draw Schedule</CardTitle>
          <CardDescription>{filteredDraws.length} draws scheduled</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Draw ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Test Type</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Scheduled Time</TableHead>
                <TableHead>Phlebotomist</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDraws.map((draw) => (
                <TableRow key={draw.id}>
                  <TableCell className="font-medium text-blue-600">{draw.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{draw.patientName}</div>
                      <div className="text-sm text-gray-500">{draw.patientId}</div>
                    </div>
                  </TableCell>
                  <TableCell>{draw.testType}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(draw.priority)}`}>
                      {draw.priority}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{draw.scheduledTime}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4 text-gray-400" />
                      <span>{draw.phlebotomist}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(draw.status)}`}>
                      {draw.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Syringe className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <CheckCircle className="h-4 w-4" />
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

export default PhlebotomySystem;
