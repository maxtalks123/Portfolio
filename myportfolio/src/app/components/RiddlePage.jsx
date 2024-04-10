import RevealButton from "./RevealButton";
export default async function RiddlePage() {
  const riddle = await fetch("https://riddles-api.vercel.app/random");
  const result = await riddle.json();
  return (
    <div className="bg-violet-900 flex-column text-center text-lg p-5 m-3 mx-auto max-w-fit">
      <h1 className="underline text-3xl">
        Try a riddle, courtesy of riddle API:
      </h1>
      <h2>{result.riddle}</h2>
      <RevealButton result={result.answer} />
      {/* <p>{result.answer}</p> */}
    </div>
  );
}
