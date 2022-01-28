import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Users</Tab>
          <Tab>Cats</Tab>
          <Tab>Countries</Tab>
          <Tab>Covid</Tab>
          <Tab>SpaceX</Tab>
        </TabList>
        <TabPanel>Users</TabPanel>
        <TabPanel>Cats</TabPanel>
        <TabPanel>Countries</TabPanel>
        <TabPanel>Covid</TabPanel>
        <TabPanel>SpaceX</TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
