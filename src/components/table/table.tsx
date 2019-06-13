import React from 'react';

export const Table = ({ activities }) => (
  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {activities.map(activity => (
        <tr key={activity.name}>
          <td>{activity.name}</td>
          <td>{activity.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
