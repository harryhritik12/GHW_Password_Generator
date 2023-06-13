import React from "react";
import { usePasswords } from "./db";

const TableComponent = () => {
  const passwords = usePasswords();

  return (
    <table className="min-w-full divide-y divide-teal-200 mt-4 mx-auto border-2 border-teal-800">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-teal-50 text-left text-sm text-teal-600 uppercase w-10">
            id
          </th>
          <th className="px-6 py-3 bg-teal-50 text-left text-sm text-teal-600 uppercase w-80">
            Website
          </th>
          <th className=" px-6 py-3 bg-teal-50 text-left text-sm text-teal-600 uppercase w-96">
            Passwords
          </th>
          <th className=" px-6 py-3 bg-teal-50 text-left text-sm text-teal-600 uppercase">
            Created On
          </th>
        </tr>
      </thead>
      <tbody className="bg-slate-50 divide-y divide-teal-100">
        {passwords &&
          passwords.map((eachPassword) => (
            <tr key={eachPassword.id}>
              <td className="px-6 py-4 whitespace-nowrap">{eachPassword.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {eachPassword.website}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {eachPassword.password}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {eachPassword.createdOn.split("T")[0]},{" "}{
                  new Date(eachPassword.createdOn).toLocaleTimeString("en-GB", {
                    timeStyle: "long",
                    hour12: false
                  })
                }
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
