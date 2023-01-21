import Page from "@/app/[...route]/page";
import React from "react";

export default async function Home() {
  return (
    <Page params={{ route: ['/'] }} />
  );
}
