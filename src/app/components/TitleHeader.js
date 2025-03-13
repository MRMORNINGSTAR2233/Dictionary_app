// /app/components/TitleHeader.js
import Head from "next/head";

export default function TitleHeader() {
  return (
    <Head>
      <title>Dictionary App</title>
      <meta
        name="description"
        content="A modern dictionary app built with Next.js, React, and shadcn UI components."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
