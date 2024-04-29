import Plushie from "./logo";

export function HomeHeader() {
  return (
    <header className="flex items-center gap-4 justify-between w-full">
      <Plushie />
      <h1>Wallet Collector By Flushies</h1>
    </header>
  );
}
