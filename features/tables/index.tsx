"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import LoadingSpinner from "@/components/ui/loading-spinner";
import useCompanies from "../../lib/hooks/useCompanies";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "../../components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CompanyTable() {
  const { companies, loading, error, totals } = useCompanies();
  const { totalEmployees, totalRevenue } = totals;

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <Alert variant="destructive" className="my-4">
        <AlertTitle>ERROR:</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Company Info</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Website</TableHead>
              <TableHead>Employees</TableHead>
              <TableHead>Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.description}</TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visit Website
                  </a>
                </TableCell>
                <TableCell>{company.employees}</TableCell>
                <TableCell>${company.revenue.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="font-semibold capitalize">
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell>{totalEmployees}</TableCell>
              <TableCell>${totalRevenue.toLocaleString()}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
