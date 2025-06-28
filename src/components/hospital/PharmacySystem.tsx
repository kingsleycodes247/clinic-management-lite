
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, Plus, Pill, Package, AlertTriangle, TrendingUp } from "lucide-react";

const PharmacySystem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const medications = [
    {
      id: "M001",
      name: "Amoxicillin",
      category: "Antibiotic",
      stock: 150,
      minStock: 50,
      price: 12.50,
      supplier: "PharmaCorp",
      expiryDate: "2024-12-15",
      status: "In Stock"
    },
    {
      id: "M002",
      name: "Paracetamol",
      category: "Analgesic",
      stock: 25,
      minStock: 100,
      price: 8.75,
      supplier: "MediSupply",
      expiryDate: "2024-08-20",
      status: "Low Stock"
    },
    {
      id: "M003",
      name: "Insulin",
      category: "Hormone",
      stock: 0,
      minStock: 20,
      price: 45.00,
      supplier: "DiabetesCare",
      expiryDate: "2024-06-30",
      status: "Out of Stock"
    },
    {
      id: "M004",
      name: "Lisinopril",
      category: "ACE Inhibitor",
      stock: 80,
      minStock: 30,
      price: 15.25,
      supplier: "CardioMed",
      expiryDate: "2025-03-10",
      status: "In Stock"
    }
  ];

  const filteredMedications = medications.filter(med =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pharmacy Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage medication inventory and prescriptions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Medication</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Medications</CardTitle>
            <Pill className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">324</div>
            <p className="text-xs text-gray-500">Active inventory</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">12</div>
            <p className="text-xs text-gray-500">Need reorder</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
            <Package className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">5</div>
            <p className="text-xs text-gray-500">Urgent orders</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Sales</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$8,450</div>
            <p className="text-xs text-gray-500">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Medications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by medication name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Medications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Medication Inventory</CardTitle>
          <CardDescription>{filteredMedications.length} medications found</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Medication</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMedications.map((med) => (
                <TableRow key={med.id}>
                  <TableCell className="font-medium text-blue-600">{med.id}</TableCell>
                  <TableCell className="font-medium">{med.name}</TableCell>
                  <TableCell>{med.category}</TableCell>
                  <TableCell>
                    <div className={`${med.stock <= med.minStock ? 'text-red-600 font-medium' : ''}`}>
                      {med.stock} units
                      {med.stock <= med.minStock && (
                        <div className="text-xs text-red-500">Min: {med.minStock}</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>${med.price.toFixed(2)}</TableCell>
                  <TableCell>{med.supplier}</TableCell>
                  <TableCell>{med.expiryDate}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(med.status)}`}>
                      {med.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Reorder</Button>
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

export default PharmacySystem;
