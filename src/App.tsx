import React from 'react';
import './Styles/App.scss';
import testData from './testData';
import ReactTimelineEvents from './Components/ReactTimelineEvents';

const App: React.FC = (props) => {
  let data: object = testData;
  return (
      <ReactTimelineEvents data={data} />
  );
};

export default App;
