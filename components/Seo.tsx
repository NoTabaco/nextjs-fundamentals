import Head from "next/head";
import React from "react";

export default function Seo({ title }: { title: string }) {
  return (
    <Head>
      <title>{`${title} | Next Movies`}</title>
    </Head>
  );
}
