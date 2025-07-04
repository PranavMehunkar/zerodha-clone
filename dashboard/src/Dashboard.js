import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./components/Apps";
import Funds from "./components/Funds";
import Holdings from "./components/Holdings";

import Orders from "./components/Orders";
import Positions from "./components/Positions";
import Summary from "./components/Summary";
import WatchList from "./components/WatchList";
import { GeneralContextProvider } from "./components/GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
