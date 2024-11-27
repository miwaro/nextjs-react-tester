import { useState, useEffect, useMemo } from "react";
import { CompanyType } from "../types/companyType";
import { getErrorMessage } from "../utils";
import { fetchData } from "@/network/fetchData";

const COMPANY_API_URL = "/api/getCompanyData";

const useCompanies = () => {
  const [companies, setCompanies] = useState<CompanyType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await fetchData<CompanyType[]>(COMPANY_API_URL);
        setCompanies(data);
      } catch (err: unknown) {
        setError(getErrorMessage(err));
      } finally {
        // I am setting this timeout just so you can see the loading spinner
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    fetchCompanies();
  }, []);

  const totals = useMemo(() => {
    return companies.reduce(
      (acc, company) => {
        acc.totalEmployees += company.employees;
        acc.totalRevenue += company.revenue;
        return acc;
      },
      { totalEmployees: 0, totalRevenue: 0 }
    );
  }, [companies]);

  return { companies, loading, error, totals };
};

export default useCompanies;
