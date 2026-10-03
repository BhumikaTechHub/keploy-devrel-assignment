import Tutorial from '@/content/keploy-echo-postgres.mdx'

import Sidebar from '@/app/components/Sidebar'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-400 font-bold text-slate-950">
              K
            </span>
            <span>Keploy Guide</span>
          </a>

          <div className="hidden items-center gap-3 text-sm text-slate-400 sm:flex">
            <span>Echo</span>
            <span>•</span>
            <span>PostgreSQL</span>
            <span>•</span>
            <span>Keploy</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[220px_minmax(0,760px)] lg:gap-16">
        <Sidebar />

        {/* Main documentation */}
        <div className="min-w-0 px-6 py-12 sm:px-8 lg:px-0 lg:py-16">
          {/* Hero */}
          <header className="mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Keploy DevRel Assignment
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Echo + PostgreSQL
              <span className="mt-2 block text-emerald-400">
                with Keploy
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              A hands-on walkthrough of recording API traffic, capturing
              PostgreSQL interactions, and replaying dependency-free tests.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {['Go', 'Echo', 'PostgreSQL', 'Docker', 'Keploy', 'MDX'].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            {/* Result */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
                <p className="text-2xl font-bold text-emerald-300">3 / 3</p>
                <p className="mt-1 text-sm text-slate-400">Tests passed</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-2xl font-bold">0</p>
                <p className="mt-1 text-sm text-slate-400">Tests failed</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-2xl font-bold">5.14s</p>
                <p className="mt-1 text-sm text-slate-400">Replay time</p>
              </div>
            </div>
          </header>

          <article className="doc-content">
            <Tutorial />
          </article>

          <footer className="mt-20 border-t border-white/10 py-8 text-sm text-slate-500">
            Built from a real local Echo + PostgreSQL + Keploy run.
          </footer>
        </div>
      </div>
    </main>
  )
}
