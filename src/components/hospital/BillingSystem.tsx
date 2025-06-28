
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, Plus, Eye, DollarSign, CreditCard, FileText } from "lucide-react";

const BillingSystem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const bills = [
    {
      id: "B001",
      patientName: "John Doe",
      patientId: "P001",
      services: ["Consultation", "Lab Tests", "X-Ray"],
      totalAmount: 450.00,
      paidAmount: 450.00,
      status: "Paid",
      date: "2024-01-15",
      paymentMethod: "Credit Card"
    },
    {
      id: "B002",
      patientName: "Jane Smith",
      patientId: "P002",
      services: ["Surgery", "Room Charges", "Medication"],
      totalAmount: 2800.00,
      paidAmount: 1400.00,
      status: "Partial",
      date: "2024-01-20",
      paymentMethod: "Insurance"
    },
    {
      id: "B003",
      patientName: "Mike Johnson",
      patientId: "P003",
      services: ["Emergency Care", "CT Scan", "Medication"],
      totalAmount: 1200.00,
      paidAmount: 0.00,
      status: "Pending",
      date: "2024-01-22",
      paymentMethod: "Cash"
    }
  ];

  const filteredBills = bills.filter(bill =>
    bill.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bill.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Billing & Payment</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage patient billing and payment records</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>New Bill</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$45,231</div>
            <p className="text-xs text-gray-500">+20.1% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <CreditCard className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">$8,420</div>
            <p className="text-xs text-gray-500">15 pending bills</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
            <FileText className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">$3,210</div>
            <p className="text-xs text-gray-500">8 overdue bills</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Bills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by patient name or bill ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Bills Table */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Records</CardTitle>
          <CardDescription>{filteredBills.length} bills found</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bill ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Services</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Paid Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBills.map((bill) => (
                <TableRow key={bill.id}>
                  <TableCell className="font-medium text-blue-600">{bill.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{bill.patientName}</div>
                      <div className="text-sm text-gray-500">{bill.patientId}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {bill.services.map((service, index) => (
                        <div key={index} className="text-gray-600">{service}</div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">${bill.totalAmount.toFixed(2)}</TableCell>
                  <TableCell className="font-medium">${bill.paidAmount.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      bill.status === 'Paid' ? 'bg-green-100 text-green-800' :
                      bill.status === 'Partial' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {bill.status}
                    </span>
                  </TableCell>
                  <TableCell>{bill.date}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <DollarSign className="h-4 w-4" />
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

export default BillingSystem;
