import { Bubble } from "./components/bubble";

export function App() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-[76rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_36%,rgba(1,4,7,0.62)_100%)] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-[28px] backdrop-saturate-[135%]">
        <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/5 bg-[radial-gradient(circle_at_top_left,rgba(125,214,255,0.11),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(0,153,255,0.12),transparent_26%),rgba(2,7,12,0.56)]" />
        <Bubble />
      </div>
    </main>
  );
}
