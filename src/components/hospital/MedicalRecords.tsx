
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileText, Download, Eye, Plus, Calendar, User, Activity } from "lucide-react";

const MedicalRecords = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const records = [
    {
      id: "MR001",
      patientId: "P001",
      patientName: "John Doe",
      recordType: "Lab Results",
      date: "2024-01-25",
      doctor: "Dr. Sarah Johnson",
      department: "Cardiology",
      status: "Complete",
      priority: "Normal"
    },
    {
      id: "MR002",
      patientId: "P002",
      patientName: "Jane Smith",
      recordType: "X-Ray Report",
      date: "2024-01-24",
      doctor: "Dr. Michael Chen",
      department: "Radiology",
      status: "Pending Review",
      priority: "Urgent"
    },
    {
      id: "MR003",
      patientId: "P003",
      patientName: "Mike Johnson",
      recordType: "Surgery Notes",
      date: "2024-01-23",
      doctor: "Dr. Robert Martinez",
      department: "Orthopedics",
      status: "Complete",
      priority: "High"
    },
    {
      id: "MR004",
      patientId: "P004",
      patientName: "Sarah Wilson",
      recordType: "Prescription",
      date: "2024-01-22",
      doctor: "Dr. Emily Davis",
      department: "Pediatrics",
      status: "Active",
      priority: "Normal"
    }
  ];

  const recentTests = [
    { test: "Blood Test", patient: "John Doe", date: "2024-01-25", result: "Normal" },
    { test: "MRI Scan", patient: "Jane Smith", date: "2024-01-24", result: "Pending" },
    { test: "ECG", patient: "Mike Johnson", date: "2024-01-23", result: "Abnormal" },
    { test: "Ultrasound", patient: "Sarah Wilson", date: "2024-01-22", result: "Normal" }
  ];

  const filteredRecords = records.filter(record =>
    record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.recordType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent':
        return 'bg-red-100 text-red-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Normal':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Medical Records</h2>
          <p className="text-gray-600">Manage patient medical records and documents</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add New Record</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">2,847</div>
                <div className="text-sm text-gray-600">Total Records</div>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">1,234</div>
                <div className="text-sm text-gray-600">Complete Records</div>
              </div>
              <FileText className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-yellow-600">156</div>
                <div className="text-sm text-gray-600">Pending Review</div>
              </div>
              <FileText className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-red-600">23</div>
                <div className="text-sm text-gray-600">Urgent Reviews</div>
              </div>
              <FileText className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="records" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="records">All Records</TabsTrigger>
          <TabsTrigger value="tests">Lab Tests</TabsTrigger>
          <TabsTrigger value="imaging">Imaging</TabsTrigger>
        </TabsList>

        <TabsContent value="records">
          <div className="space-y-4">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle>Search Medical Records</CardTitle>
                <CardDescription>Find records by patient name, record type, or ID</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search medical records..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Records List */}
            <div className="grid grid-cols-1 gap-4">
              {filteredRecords.map((record) => (
                <Card key={record.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{record.recordType}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{record.patientName}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{record.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Activity className="h-3 w-3" />
                              <span>{record.doctor}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(record.priority)}`}>
                          {record.priority}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          record.status === 'Complete' 
                            ? 'bg-green-100 text-green-800' 
                            : record.status === 'Active'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {record.status}
                        </span>
                        <div className="flex space-x-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Eye className="h-4 w-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Download className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tests">
          <Card>
            <CardHeader>
              <CardTitle>Recent Lab Tests</CardTitle>
              <CardDescription>Latest laboratory test results and reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Activity className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{test.test}</div>
                        <div className="text-sm text-gray-600">{test.patient} • {test.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        test.result === 'Normal' 
                          ? 'bg-green-100 text-green-800' 
                          : test.result === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {test.result}
                      </span>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="imaging">
          <Card>
            <CardHeader>
              <CardTitle>Imaging Studies</CardTitle>
              <CardDescription>X-rays, MRIs, CT scans, and other imaging reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Imaging Studies</h3>
                <p className="text-gray-600 mb-4">No imaging studies found for the selected criteria.</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Upload New Study
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MedicalRecords;
