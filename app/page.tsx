import { Header } from "@/components/ui/header";
import CompanyTable from "@/features/tables";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-tl from-blue-400 to-blue-700 text-white space-y-6">
      <Header variant={"darken"} />
      <div className="container">
        <CompanyTable />
      </div>
    </div>
  );
}
