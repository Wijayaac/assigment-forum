import React, { useEffect, useState } from "react";

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
  }, [threads.length]);

  return (
    <div>
      <h1>Forim</h1>
      <Threads threads={threads} isLoading={isLoading} />
    </div>
  );
};

export default HomeThread;
