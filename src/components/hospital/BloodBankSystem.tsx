
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, Plus, Droplets, AlertCircle, Calendar, User } from "lucide-react";

const BloodBankSystem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const bloodInventory = [
    { type: "A+", units: 45, minUnits: 20, lastDonation: "2024-01-20", status: "Adequate" },
    { type: "A-", units: 12, minUnits: 15, lastDonation: "2024-01-18", status: "Low" },
    { type: "B+", units: 38, minUnits: 25, lastDonation: "2024-01-22", status: "Adequate" },
    { type: "B-", units: 8, minUnits: 10, lastDonation: "2024-01-15", status: "Critical" },
    { type: "O+", units: 67, minUnits: 30, lastDonation: "2024-01-23", status: "Good" },
    { type: "O-", units: 15, minUnits: 20, lastDonation: "2024-01-19", status: "Low" },
    { type: "AB+", units: 22, minUnits: 15, lastDonation: "2024-01-21", status: "Adequate" },
    { type: "AB-", units: 6, minUnits: 8, lastDonation: "2024-01-17", status: "Low" }
  ];

  const donors = [
    {
      id: "D001",
      name: "John Smith",
      bloodType: "O+",
      phone: "+1 (555) 123-4567",
      lastDonation: "2024-01-15",
      eligibleNext: "2024-04-15",
      status: "Eligible"
    },
    {
      id: "D002",
      name: "Mary Johnson",
      bloodType: "A-",
      phone: "+1 (555) 987-6543",
      lastDonation: "2024-01-10",
      eligibleNext: "2024-04-10",
      status: "Eligible"
    },
    {
      id: "D003",
      name: "David Brown",
      bloodType: "AB+",
      phone: "+1 (555) 456-7890",
      lastDonation: "2024-01-25",
      eligibleNext: "2024-04-25",
      status: "Not Eligible"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Good': return 'bg-green-100 text-green-800';
      case 'Adequate': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-yellow-100 text-yellow-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDonors = donors.filter(donor =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.bloodType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Blood Bank Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage blood inventory and donor information</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Donor</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Droplets className="h-4 w-4" />
            <span>Record Donation</span>
          </Button>
        </div>
      </div>

      {/* Blood Inventory Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bloodInventory.map((blood) => (
          <Card key={blood.type} className="relative">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-red-600">{blood.type}</CardTitle>
                <Droplets className="h-6 w-6 text-red-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold">{blood.units}</div>
                <div className="text-sm text-gray-500">units available</div>
                <div className="text-xs text-gray-400">Min: {blood.minUnits} units</div>
                <span className={`inline-block px-2 py-1 rounded-full text-xs ${getStatusColor(blood.status)}`}>
                  {blood.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Units</CardTitle>
            <Droplets className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">213</div>
            <p className="text-xs text-gray-500">All blood types</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Types</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-gray-500">Need urgent donations</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Donors</CardTitle>
            <User className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-gray-500">Registered donors</p>
          </CardContent>
        </Card>
      </div>

      {/* Donor Management */}
      <Card>
        <CardHeader>
          <CardTitle>Donor Management</CardTitle>
          <CardDescription>Manage blood donor information and schedules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search donors by name or blood type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donor ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Blood Type</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Last Donation</TableHead>
                  <TableHead>Next Eligible</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDonors.map((donor) => (
                  <TableRow key={donor.id}>
                    <TableCell className="font-medium text-blue-600">{donor.id}</TableCell>
                    <TableCell className="font-medium">{donor.name}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                        {donor.bloodType}
                      </span>
                    </TableCell>
                    <TableCell>{donor.phone}</TableCell>
                    <TableCell>{donor.lastDonation}</TableCell>
                    <TableCell>{donor.eligibleNext}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        donor.status === 'Eligible' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {donor.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Calendar className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <User className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BloodBankSystem;
