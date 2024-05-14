import Link from "next/link";

export default function Content() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 gap-14 max-w-5xl m-auto">
      <img src="https://github.com/csorlandi.png" className="rounded-xl" />
      <div className="flex flex-col flex-1 gap-7">
        <h1 className="text-5xl font-bold leading-none">Hello there.</h1>
        <div className="flex flex-col gap-4">
          <p>I'm <strong>Claudio</strong>, and I love building <strong>innovative user interfaces</strong>.</p>
          <p>As well as <Link href="https://github.com/csorlandi" target="_blank" className="underline">coding</Link> and designing, you can find me making <Link href="http://www.youtube.com/channel/UCa1tAB1GHyR__DqSPTdeQ7Q" target="_blank" className="underline">videos</Link> and creating content on <Link href="https://linkedin.com/in/csorlandi" target="_blank" className="underline">Linkedin</Link>.</p>
          <p>Currently crafting at <Link href="https://mvst.co" target="_blank" className="underline">MVST</Link>.</p>
        </div>
      </div>
    </main>
  )
}