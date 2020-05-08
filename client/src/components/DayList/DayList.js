import React from 'react';
import Time from '../Time';
import timeList from '../../timeList';
import { Table } from 'semantic-ui-react';
import { useSelector } from "react-redux";

const DayList = () => {
  const times = useSelector((state) => state.times);
  console.log(times)
  console.log(times.startTime)
  console.log(times.endTime)

  const start = timeList.indexOf(times.startTime);
  const end = timeList.indexOf(times.endTime);
  const timeSlice = timeList.slice(start, end + 1);
  const time = timeSlice.map((time, index) => {
    return (
      <tbody key={index}>
        <tr>
          <Time time={time} />
        </tr>
        <tr>
          <td> &nbsp; :15</td>
        </tr>
        <tr>
          <td> &nbsp; :30</td>
        </tr>
        <tr>
          <td> &nbsp; :45</td>
        </tr>
      </tbody>
    );
  });

  return (
    <Table
      compact
      striped
      inverted
      style={{
        border: "solid",
        borderColor: "white",
        borderSize: "1px"
      }}
    >
      <thead>
        <tr />
      </thead>
      {time}
    </Table>
  );
};

export default DayList;
