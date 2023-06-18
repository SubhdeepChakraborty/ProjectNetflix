import React from "react";

const Widgetlg = () => {
  const StatusUser = ({ type, className }) => {
    return <button className={className}>{type}</button>;
  };
  return (
    <div className="flex-[2] shadow-lg p-5">
      <span className="font-bold font-[Sen] text-xl">Latest Transactions</span>
      <table className="w-[100%] border-spacing-6 p-14">
        <tbody>
          <tr>
            <th className="items-start flex text-sm">Customer</th>
            <th style={{ textAlign: "left" }} className="text-sm">
              Date
            </th>
            <th style={{ textAlign: "left" }} className="text-sm">
              Amount
            </th>
            <th style={{ textAlign: "left" }} className="text-sm">
              Status
            </th>
          </tr>
          <tr>
            <td className="flex items-center py-3">
              <img
                className="h-[40px] w-[40px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nRj7LkgNF5dxllJnnDy0EgQYQPLJJClNeg&usqp=CAU"
              />
              <span className="ml-3">Aaliya Qureshi</span>
            </td>
            <td className="">2 jun 2023</td>
            <td>200/-</td>
            <td>
              <StatusUser
                type="Approved"
                className="px-2 text-sm  font-[Sen] py-1 p-1 rounded bg-[#e5faf2] text-[#3bb077]"
              />
            </td>
          </tr>
          <tr>
            <td className="flex items-center py-3">
              <img
                className="h-[40px] w-[40px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nRj7LkgNF5dxllJnnDy0EgQYQPLJJClNeg&usqp=CAU"
              />
              <span className="ml-3">Aaliya Qureshi</span>
            </td>
            <td>2 jun 2023</td>
            <td>200/-</td>
            <td>
              <StatusUser
                type="Pending"
                className="px-2 text-sm  font-[Sen] py-1 p-1 rounded bg-[#ebf1fe] text-[#2a7ade]"
              />
            </td>
          </tr>
          <tr>
            <td className="flex items-center py-3">
              <img
                className="h-[40px] w-[40px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nRj7LkgNF5dxllJnnDy0EgQYQPLJJClNeg&usqp=CAU"
              />
              <span className="ml-3">Aaliya Qureshi</span>
            </td>
            <td>2 jun 2023</td>
            <td>200/-</td>
            <td>
              <StatusUser
                type="Approved"
                className="px-2 text-sm  font-[Sen] py-1 p-1 rounded bg-[#e5faf2] text-[#3bb077]"
              />
            </td>
          </tr>
          <tr>
            <td className="flex items-center py-3">
              <img
                className="h-[40px] w-[40px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nRj7LkgNF5dxllJnnDy0EgQYQPLJJClNeg&usqp=CAU"
              />
              <span className="ml-3">Aaliya Qureshi</span>
            </td>
            <td>2 jun 2023</td>
            <td>200/-</td>
            <td>
              <StatusUser
                type="Approved"
                className="px-2 text-sm  font-[Sen] py-1 p-1 rounded bg-[#e5faf2] text-[#3bb077]"
              />
            </td>
          </tr>
          <tr>
            <td className="flex items-center py-3">
              <img
                className="h-[40px] w-[40px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nRj7LkgNF5dxllJnnDy0EgQYQPLJJClNeg&usqp=CAU"
              />
              <span className="ml-3">Aaliya Qureshi</span>
            </td>
            <td>2 jun 2023</td>
            <td>200/-</td>
            <td>
              <StatusUser
                type="Declined"
                className="px-2 text-sm  font-[Sen] py-1 p-1 rounded bg-[#fff0f1] text-[#d95087]"
              />
            </td>
          </tr>
          <tr>
            <td className="flex items-center py-3">
              <img
                className="h-[40px] w-[40px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nRj7LkgNF5dxllJnnDy0EgQYQPLJJClNeg&usqp=CAU"
              />
              <span className="ml-3">Aaliya Qureshi</span>
            </td>
            <td>2 jun 2023</td>
            <td>200/-</td>
            <td>
              <StatusUser
                type="Pending"
                className="px-2 text-sm  font-[Sen] py-1 p-1 rounded bg-[#ebf1fe] text-[#2a7ade]"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Widgetlg;
