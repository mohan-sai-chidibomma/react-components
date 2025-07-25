import React from "react";

import "./table.css";
export default function Table() {
  return (
    <table className="table">
      <thead className="thead">
        <tr className="tr">
          <th className="th">Plan</th>
          <th className="th">1 Month</th>
          <th className="th">3 Month</th>
          <th className="th">6 Month</th>
        </tr>
      </thead>
      <tbody className="tbody">
        <tr className="tr">
          <th className="th">Silver</th>
          <td className="td">$100</td>
          <td className="td">$300</td>
          <td className="td">$500</td>
        </tr>
        <tr className="tr">
          <th className="th">Gold</th>
          <td className="td">$150</td>
          <td className="td">$450</td>
          <td className="td">$750</td>
        </tr>
        <tr className="tr">
          <th className="th">Platinum</th>
          <td className="td">$200</td>
          <td className="td">$600</td>
          <td className="td">$1000</td>
        </tr>
        <tr className="tr">
          <th className="th">Diamond</th>
          <td className="td">$250</td>
          <td className="td">$700</td>
          <td className="td">$1200</td>
        </tr>
      </tbody>
    </table>
  );
}
