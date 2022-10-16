import React, { useEffect, useState } from "react";
import { Search } from "../../components/Form";

import { Threads } from "../../components/ThreadListing";
import { getThreads } from "./Thread.handler";

const HomeThread = () => {
  const [threads, setThreads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      getThreads(setThreads, setIsLoading);
    };

    getData();
  }, []);

  return (
    <div>
      <div className='page-wrap-header'>
        <h1>Welcome to Forim</h1>
        <Search setThreads={setThreads} setIsLoading={setIsLoading} />
      </div>
      <Threads threads={threads} isLoading={isLoading} />
    </div>
  );
};

export default HomeThread;
