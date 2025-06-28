
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Calendar, Activity, AlertCircle, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Patients",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Active Doctors",
      value: "89",
      change: "+3%",
      icon: UserCheck,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Today's Appointments",
      value: "156",
      change: "+8%",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Emergency Cases",
      value: "23",
      change: "-15%",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  const recentActivities = [
    { id: 1, patient: "John Doe", action: "Admitted to ICU", time: "2 hours ago", status: "critical" },
    { id: 2, patient: "Jane Smith", action: "Discharge processed", time: "4 hours ago", status: "completed" },
    { id: 3, patient: "Mike Johnson", action: "Surgery scheduled", time: "6 hours ago", status: "scheduled" },
    { id: 4, patient: "Sarah Wilson", action: "Lab results ready", time: "8 hours ago", status: "ready" }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className={`text-xs flex items-center ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
            <CardDescription>Frequently used hospital functions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="font-medium text-blue-900">Register New Patient</div>
              <div className="text-sm text-blue-600">Add patient information and medical history</div>
            </button>
            <button className="w-full p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="font-medium text-green-900">Schedule Appointment</div>
              <div className="text-sm text-green-600">Book appointments with available doctors</div>
            </button>
            <button className="w-full p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="font-medium text-purple-900">Emergency Admission</div>
              <div className="text-sm text-purple-600">Fast-track emergency patient admission</div>
            </button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Recent Activity</CardTitle>
            <CardDescription>Latest patient updates and system activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'critical' ? 'bg-red-500' :
                    activity.status === 'completed' ? 'bg-green-500' :
                    activity.status === 'scheduled' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`} />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{activity.patient}</div>
                    <div className="text-sm text-gray-600">{activity.action}</div>
                  </div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hospital Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Hospital Overview</CardTitle>
          <CardDescription>Current status and capacity information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-gray-600">Bed Occupancy</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">92%</div>
              <div className="text-sm text-gray-600">Staff Availability</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">78%</div>
              <div className="text-sm text-gray-600">Equipment Status</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
