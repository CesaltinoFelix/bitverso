"use client";
import React from "react";
import useSWR from "swr";

const Dashboard = () => {
    const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "https:jsonhttps://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Dashboard</div>;
};

export default Dashboard;
