
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, UserCheck, Activity, Heart, Brain, Baby, Bone, Eye, Pill } from "lucide-react";

const DepartmentManagement = () => {
  const departments = [
    {
      id: "D001",
      name: "Cardiology",
      icon: Heart,
      head: "Dr. Sarah Johnson",
      doctors: 12,
      patients: 156,
      beds: 24,
      occupancy: 85,
      color: "red"
    },
    {
      id: "D002",
      name: "Neurology",
      icon: Brain,
      head: "Dr. Michael Chen",
      doctors: 8,
      patients: 134,
      beds: 18,
      occupancy: 78,
      color: "purple"
    },
    {
      id: "D003",
      name: "Pediatrics",
      icon: Baby,
      head: "Dr. Emily Davis",
      doctors: 15,
      patients: 189,
      beds: 30,
      occupancy: 92,
      color: "pink"
    },
    {
      id: "D004",
      name: "Orthopedics",
      icon: Bone,
      head: "Dr. Robert Martinez",
      doctors: 10,
      patients: 142,
      beds: 20,
      occupancy: 70,
      color: "blue"
    },
    {
      id: "D005",
      name: "Ophthalmology",
      icon: Eye,
      head: "Dr. Lisa Anderson",
      doctors: 6,
      patients: 98,
      beds: 8,
      occupancy: 50,
      color: "green"
    },
    {
      id: "D006",
      name: "Pharmacy",
      icon: Pill,
      head: "Dr. James Wilson",
      doctors: 4,
      patients: 0,
      beds: 0,
      occupancy: 0,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
      pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" },
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const overallStats = {
    totalDepartments: departments.length,
    totalDoctors: departments.reduce((sum, dept) => sum + dept.doctors, 0),
    totalPatients: departments.reduce((sum, dept) => sum + dept.patients, 0),
    totalBeds: departments.reduce((sum, dept) => sum + dept.beds, 0),
    avgOccupancy: Math.round(departments.reduce((sum, dept) => sum + dept.occupancy, 0) / departments.length)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Department Management</h2>
          <p className="text-gray-600">Overview of hospital departments and their operations</p>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">{overallStats.totalDepartments}</div>
                <div className="text-sm text-gray-600">Departments</div>
              </div>
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">{overallStats.totalDoctors}</div>
                <div className="text-sm text-gray-600">Total Doctors</div>
              </div>
              <UserCheck className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-600">{overallStats.totalPatients}</div>
                <div className="text-sm text-gray-600">Total Patients</div>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-orange-600">{overallStats.totalBeds}</div>
                <div className="text-sm text-gray-600">Total Beds</div>
              </div>
              <Activity className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-red-600">{overallStats.avgOccupancy}%</div>
                <div className="text-sm text-gray-600">Avg Occupancy</div>
              </div>
              <Activity className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department) => {
          const colors = getColorClasses(department.color);
          const IconComponent = department.icon;
          
          return (
            <Card key={department.id} className={`hover:shadow-lg transition-shadow border-l-4 ${colors.border}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${colors.bg}`}>
                      <IconComponent className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{department.name}</CardTitle>
                      <CardDescription>Dept. {department.id}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Department Head */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-600">Department Head</div>
                  <div className="font-medium text-gray-900">{department.head}</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">{department.doctors}</div>
                    <div className="text-xs text-gray-600">Doctors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">{department.patients}</div>
                    <div className="text-xs text-gray-600">Patients</div>
                  </div>
                </div>

                {/* Bed Information (if applicable) */}
                {department.beds > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Bed Occupancy</span>
                      <span className="font-medium">{department.occupancy}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          department.occupancy > 90 ? 'bg-red-500' :
                          department.occupancy > 75 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${department.occupancy}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500">
                      {Math.round(department.beds * department.occupancy / 100)} of {department.beds} beds occupied
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-3 rounded text-sm transition-colors">
                    Manage
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Department Performance Overview</CardTitle>
          <CardDescription>Key metrics and performance indicators across departments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {departments.map((department) => {
              const colors = getColorClasses(department.color);
              return (
                <div key={department.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${colors.bg}`}>
                      <department.icon className={`h-5 w-5 ${colors.text}`} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{department.name}</div>
                      <div className="text-sm text-gray-600">{department.head}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-blue-600">{department.doctors}</div>
                      <div className="text-gray-500">Doctors</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-green-600">{department.patients}</div>
                      <div className="text-gray-500">Patients</div>
                    </div>
                    {department.beds > 0 && (
                      <div className="text-center">
                        <div className={`font-medium ${
                          department.occupancy > 90 ? 'text-red-600' :
                          department.occupancy > 75 ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          {department.occupancy}%
                        </div>
                        <div className="text-gray-500">Occupancy</div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DepartmentManagement;
