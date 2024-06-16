import Link from "next/link";
import { Clock, Eye, Star } from "lucide-react";

const JobItem = ({ jobTitle, companyName, emailAddress, website, companyInfo }) => {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-2xl relative">
      <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-medium bg-green-500 text-xs">
        New
      </span>

      <div className="pt-4">
        <h3 className="font-bold text-lg mb-3">Job Info</h3>
        <div className="flex items-center gap-3 mb-5 text-xs text-gray-500">
          {companyInfo.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}

          <span className="font-bold text-primary ml-auto text-base">
            {jobTitle}
          </span>
        </div>

        <Link
          href={website}
          className="flex items-center justify-center w-full mt-10 rounded-lg text-white font-semibold bg-primary h-12"
        >
          See Website
        </Link>
      </div>
    </div>
  );
};

export default JobItem;
