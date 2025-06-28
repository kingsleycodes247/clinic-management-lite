
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BedDouble, Users, UserCheck, AlertCircle, CheckCircle, Clock, Search, Filter, Plus } from "lucide-react";

const WardManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterWard, setFilterWard] = useState("all");

  // Sample data for wards
  const wards = [
    { 
      id: 1, 
      name: "General Ward A", 
      type: "General", 
      totalBeds: 40, 
      occupiedBeds: 32, 
      availableBeds: 8, 
      nurseInCharge: "Nurse Sarah Johnson",
      status: "active",
      patients: [
        { id: 1, name: "John Doe", bedNumber: "A-01", condition: "Stable", admissionDate: "2024-01-15" },
        { id: 2, name: "Jane Smith", bedNumber: "A-02", condition: "Critical", admissionDate: "2024-01-16" }
      ]
    },
    { 
      id: 2, 
      name: "ICU Wing", 
      type: "ICU", 
      totalBeds: 20, 
      occupiedBeds: 18, 
      availableBeds: 2, 
      nurseInCharge: "Nurse Michael Brown",
      status: "active",
      patients: [
        { id: 3, name: "Robert Wilson", bedNumber: "ICU-01", condition: "Critical", admissionDate: "2024-01-14" },
        { id: 4, name: "Emily Davis", bedNumber: "ICU-02", condition: "Stable", admissionDate: "2024-01-17" }
      ]
    },
    { 
      id: 3, 
      name: "Maternity Ward", 
      type: "Maternity", 
      totalBeds: 25, 
      occupiedBeds: 15, 
      availableBeds: 10, 
      nurseInCharge: "Nurse Lisa Anderson",
      status: "active",
      patients: [
        { id: 5, name: "Maria Garcia", bedNumber: "M-01", condition: "Stable", admissionDate: "2024-01-18" }
      ]
    },
    { 
      id: 4, 
      name: "Pediatric Ward", 
      type: "Pediatric", 
      totalBeds: 30, 
      occupiedBeds: 12, 
      availableBeds: 18, 
      nurseInCharge: "Nurse Tom Wilson",
      status: "maintenance",
      patients: [
        { id: 6, name: "Alex Thompson", bedNumber: "P-01", condition: "Stable", admissionDate: "2024-01-19" }
      ]
    }
  ];

  // Sample bed assignments
  const bedAssignments = [
    { id: 1, patientName: "John Doe", wardName: "General Ward A", bedNumber: "A-01", assignedDate: "2024-01-15", status: "occupied" },
    { id: 2, patientName: "Jane Smith", wardName: "General Ward A", bedNumber: "A-02", assignedDate: "2024-01-16", status: "occupied" },
    { id: 3, patientName: "", wardName: "ICU Wing", bedNumber: "ICU-19", assignedDate: "", status: "available" },
    { id: 4, patientName: "", wardName: "Maternity Ward", bedNumber: "M-15", assignedDate: "", status: "maintenance" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "maintenance": return "bg-yellow-100 text-yellow-800";
      case "inactive": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getBedStatusColor = (status: string) => {
    switch (status) {
      case "occupied": return "bg-red-100 text-red-800";
      case "available": return "bg-green-100 text-green-800";
      case "maintenance": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Critical": return "text-red-600";
      case "Stable": return "text-green-600";
      case "Moderate": return "text-yellow-600";
      default: return "text-gray-600";
    }
  };

  const getOccupancyRate = (occupied: number, total: number) => {
    return ((occupied / total) * 100).toFixed(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Ward Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage hospital wards, beds, and patient assignments</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add New Ward
        </Button>
      </div>

      <Tabs defaultValue="wards" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="wards">Wards</TabsTrigger>
          <TabsTrigger value="beds">Bed Management</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
        </TabsList>

        <TabsContent value="wards" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search wards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterWard} onValueChange={setFilterWard}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Wards</SelectItem>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="icu">ICU</SelectItem>
                <SelectItem value="maternity">Maternity</SelectItem>
                <SelectItem value="pediatric">Pediatric</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {wards.map((ward) => (
              <Card key={ward.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <CardTitle className="text-lg flex items-center">
                      <BedDouble className="mr-2 h-5 w-5 text-blue-600" />
                      {ward.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{ward.type}</Badge>
                      <Badge className={getStatusColor(ward.status)}>
                        {ward.status.charAt(0).toUpperCase() + ward.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>Nurse in Charge: {ward.nurseInCharge}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{ward.totalBeds}</div>
                      <div className="text-gray-600 dark:text-gray-400">Total Beds</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">{ward.occupiedBeds}</div>
                      <div className="text-gray-600 dark:text-gray-400">Occupied</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{ward.availableBeds}</div>
                      <div className="text-gray-600 dark:text-gray-400">Available</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Occupancy Rate</span>
                      <span>{getOccupancyRate(ward.occupiedBeds, ward.totalBeds)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${getOccupancyRate(ward.occupiedBeds, ward.totalBeds)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Recent Patients:</h4>
                    {ward.patients.slice(0, 2).map((patient) => (
                      <div key={patient.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded text-sm">
                        <div>
                          <span className="font-medium">{patient.name}</span>
                          <span className="text-gray-500 ml-2">Bed {patient.bedNumber}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                          <span className={`font-medium ${getConditionColor(patient.condition)}`}>
                            {patient.condition}
                          </span>
                          <span className="text-gray-400">|</span>
                          <span className="text-gray-500">{patient.admissionDate}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Users className="mr-2 h-4 w-4" />
                      View Patients
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <BedDouble className="mr-2 h-4 w-4" />
                      Manage Beds
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit Ward
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="beds" className="space-y-6">
          <div className="grid gap-4 sm:gap-6">
            {bedAssignments.map((bed) => (
              <Card key={bed.id}>
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <BedDouble className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">{bed.wardName} - Bed {bed.bedNumber}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {bed.patientName || "Unoccupied"}
                        </div>
                        {bed.assignedDate && (
                          <div className="text-xs text-gray-500">Assigned: {bed.assignedDate}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getBedStatusColor(bed.status)}>
                        {bed.status.charAt(0).toUpperCase() + bed.status.slice(1)}
                      </Badge>
                      <Button variant="outline" size="sm">
                        {bed.status === "available" ? "Assign Patient" : "Update Status"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Patient Assignments</CardTitle>
              <CardDescription>Manage patient bed assignments and transfers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full sm:w-auto">
                  <Plus className="mr-2 h-4 w-4" />
                  New Assignment
                </Button>
                <div className="text-center py-8 text-gray-500">
                  Recent assignments will appear here
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WardManagement;
