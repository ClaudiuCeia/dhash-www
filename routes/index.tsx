import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";
import Playground from "../islands/Playground.tsx";

export default function Home() {
  return (
    <html>
      <Head>
        <title>ts-duckling playground</title>
        <link rel="icon" type="image/png" href="/logo.png" />
        <script
          src="https://kit.fontawesome.com/4ffecce698.js"
          crossOrigin="anonymous"
        ></script>
        {/* <link rel="stylesheet" href={asset("style.css")} /> */}
      </Head>
      <body class="bg(gray-900) text(gray-400) h-screen">
        <Navbar />
        <div class="p-4 mx-auto max-w-screen-lg">
          A TypeScript library for Deno that parses text into structured data.
          <a href="https://github.com/ClaudiuCeia/ts-duckling" target="_blank">
            Get source code and documentation here
          </a>
          . If you just want to give it a try, simply type, paste, or choose
          your sample text in the textarea below. You can click on the
          recognized entities to see the raw response from ts-duckling.
        </div>
        <div class="p-4 mx-auto max-w-screen-lg">
          <Playground />
        </div>
      </body>
    </html>
  );
}