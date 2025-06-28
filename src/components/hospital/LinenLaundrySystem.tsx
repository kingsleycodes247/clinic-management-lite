
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shirt, Package, Truck, CheckCircle, AlertCircle, Clock, Search, Filter } from "lucide-react";

const LinenLaundrySystem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Sample data for linen inventory
  const linenInventory = [
    { id: 1, item: "Bed Sheets", category: "Bedding", total: 500, clean: 350, dirty: 100, inLaundry: 50, ward: "General" },
    { id: 2, item: "Pillowcases", category: "Bedding", total: 400, clean: 280, dirty: 80, inLaundry: 40, ward: "ICU" },
    { id: 3, item: "Patient Gowns", category: "Clothing", total: 300, clean: 200, dirty: 60, inLaundry: 40, ward: "Surgery" },
    { id: 4, item: "Towels", category: "Bathroom", total: 250, clean: 180, dirty: 45, inLaundry: 25, ward: "Maternity" },
    { id: 5, item: "Blankets", category: "Bedding", total: 200, clean: 140, dirty: 35, inLaundry: 25, ward: "Pediatric" },
    { id: 6, item: "Scrubs - Blue", category: "Staff Uniform", total: 150, clean: 100, dirty: 30, inLaundry: 20, ward: "General" }
  ];

  // Sample data for laundry requests
  const laundryRequests = [
    { id: 1, ward: "ICU", items: "50 Bed Sheets, 30 Pillowcases", status: "pending", priority: "high", requestedBy: "Nurse Mary", time: "2 hours ago" },
    { id: 2, ward: "Surgery", items: "20 Patient Gowns, 15 Towels", status: "processing", priority: "urgent", requestedBy: "Dr. Smith", time: "1 hour ago" },
    { id: 3, ward: "General", items: "30 Blankets, 25 Towels", status: "completed", priority: "normal", requestedBy: "Nurse John", time: "4 hours ago" },
    { id: 4, ward: "Maternity", items: "40 Bed Sheets, 20 Gowns", status: "pickup", priority: "normal", requestedBy: "Nurse Lisa", time: "30 min ago" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "processing": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      case "pickup": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "bg-red-100 text-red-800";
      case "high": return "bg-orange-100 text-orange-800";
      case "normal": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="h-4 w-4" />;
      case "processing": return <Truck className="h-4 w-4" />;
      case "completed": return <CheckCircle className="h-4 w-4" />;
      case "pickup": return <Package className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Linen & Laundry Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage hospital linen inventory and laundry services</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
          <Shirt className="mr-2 h-4 w-4" />
          New Laundry Request
        </Button>
      </div>

      <Tabs defaultValue="inventory" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search linen items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="low">Low Stock</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {linenInventory.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <CardTitle className="text-lg flex items-center">
                      <Shirt className="mr-2 h-5 w-5 text-blue-600" />
                      {item.item}
                    </CardTitle>
                    <Badge className="w-fit">{item.category}</Badge>
                  </div>
                  <CardDescription>Ward: {item.ward}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{item.clean}</div>
                      <div className="text-gray-600 dark:text-gray-400">Clean</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-red-600">{item.dirty}</div>
                      <div className="text-gray-600 dark:text-gray-400">Dirty</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{item.inLaundry}</div>
                      <div className="text-gray-600 dark:text-gray-400">In Laundry</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-gray-600">{item.total}</div>
                      <div className="text-gray-600 dark:text-gray-400">Total</div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Request Cleaning
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Update Count
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="requests" className="space-y-6">
          <div className="grid gap-4 sm:gap-6">
            {laundryRequests.map((request) => (
              <Card key={request.id}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <CardTitle className="text-lg flex items-center">
                      {getStatusIcon(request.status)}
                      <span className="ml-2">Request #{request.id}</span>
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getPriorityColor(request.priority)}>
                        {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
                      </Badge>
                      <Badge className={getStatusColor(request.status)}>
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Ward:</span>
                        <span className="ml-2">{request.ward}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Requested by:</span>
                        <span className="ml-2">{request.requestedBy}</span>
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Items:</span>
                      <span className="ml-2">{request.items}</span>
                    </div>
                    <div className="text-xs text-gray-500">{request.time}</div>
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <Button size="sm" className="flex-1">Update Status</Button>
                      <Button variant="outline" size="sm" className="flex-1">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Laundry Schedule</CardTitle>
              <CardDescription>Weekly laundry pickup and delivery schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                  <div key={day} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="font-medium">{day}</div>
                      <Badge variant={index < 5 ? "default" : "secondary"}>
                        {index < 5 ? "Scheduled" : "Rest Day"}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                      {index < 5 ? `Pickup: 8:00 AM | Delivery: 4:00 PM` : "No service"}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LinenLaundrySystem;
