
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Plus, Star, Calendar, Users } from "lucide-react";

const DoctorManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const doctors = [
    {
      id: "D001",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      experience: "15 years",
      rating: 4.9,
      patients: 156,
      availability: "Available",
      phone: "+1 (555) 111-2222",
      email: "s.johnson@hospital.com",
      nextAvailable: "Today 2:00 PM"
    },
    {
      id: "D002",
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      experience: "12 years",
      rating: 4.8,
      patients: 134,
      availability: "Busy",
      phone: "+1 (555) 333-4444",
      email: "m.chen@hospital.com",
      nextAvailable: "Tomorrow 10:00 AM"
    },
    {
      id: "D003",
      name: "Dr. Emily Davis",
      specialty: "Pediatrics",
      experience: "8 years",
      rating: 4.7,
      patients: 189,
      availability: "Available",
      phone: "+1 (555) 555-6666",
      email: "e.davis@hospital.com",
      nextAvailable: "Today 4:30 PM"
    },
    {
      id: "D004",
      name: "Dr. Robert Martinez",
      specialty: "Orthopedics",
      experience: "20 years",
      rating: 4.9,
      patients: 142,
      availability: "In Surgery",
      phone: "+1 (555) 777-8888",
      email: "r.martinez@hospital.com",
      nextAvailable: "Tomorrow 9:00 AM"
    }
  ];

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Doctor Management</h2>
          <p className="text-gray-600">Manage doctor profiles and schedules</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add New Doctor</span>
        </button>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Doctors</CardTitle>
          <CardDescription>Find doctors by name, specialty, or ID</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {doctor.name.split(' ')[1]?.charAt(0)}{doctor.name.split(' ')[2]?.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{doctor.name}</CardTitle>
                    <CardDescription>{doctor.specialty}</CardDescription>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  doctor.availability === 'Available' 
                    ? 'bg-green-100 text-green-800' 
                    : doctor.availability === 'Busy'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {doctor.availability}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="font-semibold">{doctor.rating}</span>
                  </div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                <div>
                  <div className="flex items-center justify-center space-x-1">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span className="font-semibold">{doctor.patients}</span>
                  </div>
                  <div className="text-xs text-gray-500">Patients</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">{doctor.experience}</div>
                  <div className="text-xs text-gray-500">Experience</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="text-gray-600">{doctor.phone}</div>
                <div className="text-gray-600">{doctor.email}</div>
              </div>

              {/* Next Available */}
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium text-blue-900">Next Available</div>
                    <div className="text-xs text-blue-600">{doctor.nextAvailable}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition-colors">
                  View Schedule
                </button>
                <button className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-3 rounded text-sm transition-colors">
                  Edit Profile
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">89</div>
            <div className="text-sm text-gray-600">Total Doctors</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">67</div>
            <div className="text-sm text-gray-600">Available Now</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">15</div>
            <div className="text-sm text-gray-600">In Surgery</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">4.8</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorManagement;
