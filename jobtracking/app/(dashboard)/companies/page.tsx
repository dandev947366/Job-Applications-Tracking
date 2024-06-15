import CompanyItem from '@/components/company/CompanyItem'
import React from 'react'

const CompaniesPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CompanyItem />
      <CompanyItem />
      <CompanyItem />
   
    </div>
  );
};

export default CompaniesPage