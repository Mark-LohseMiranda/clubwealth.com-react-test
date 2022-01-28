import React, {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Users from "./components/Users/Users"
import user from "./APIs/user";
import "bootstrap/dist/css/bootstrap.css";
import "react-tabs/style/react-tabs.css";
import './App.css';

function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    user.getRandomUserNames().then((response) => {
      setUserData(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Home</Tab>
          <Tab>Users</Tab>
          <Tab>Cats</Tab>
          <Tab>Countries</Tab>
          <Tab>Covid</Tab>
          <Tab>SpaceX</Tab>
        </TabList>
        <TabPanel>Welcome</TabPanel>
        <TabPanel><Users userData={userData}/></TabPanel>
        <TabPanel>Cats</TabPanel>
        <TabPanel>Countries</TabPanel>
        <TabPanel>Covid</TabPanel>
        <TabPanel>SpaceX</TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
