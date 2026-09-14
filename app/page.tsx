'use client'

import { useState } from 'react'
import { CalendarDays, ChevronDown, Compass, MapPin, Sparkles, Wallet } from 'lucide-react'

const personalityTags = [
  'Relaxed',
  'Packed',
  'Budget',
  'Luxury',
  'Instagrammable',
  'Foodie',
  'Adventure',
  'Romantic',
  'Family',
  'Backpacker',
]

export default function Page() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Adventure'])
  const [isTagMenuOpen, setIsTagMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function toggleTag(tag: string) {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    )
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
              <Compass className="size-5" strokeWidth={2.4} aria-hidden="true" />
            </div>
            <span className="font-sans text-lg font-bold tracking-tight">TripLens</span>
          </div>
          <span className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Plan beautifully
          </span>
        </header>

        <section className="flex flex-1 items-center justify-center py-12 lg:py-16">
          <div className="grid w-full max-w-5xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
            <div className="max-w-md">
              <h1 className="text-balance font-sans text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-primary sm:text-6xl">
                Where will you wander?
              </h1>
              <p className="mt-6 max-w-sm text-pretty font-sans text-base leading-7 text-muted-foreground">
                Tell us what makes a trip feel like yours. We&apos;ll turn the details into a thoughtful itinerary worth looking forward to.
              </p>
              <div className="mt-10 flex items-center gap-4 border-t border-border pt-5">
                <div className="flex -space-x-2">
                  <span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-secondary font-mono text-[10px] font-bold text-secondary-foreground">A</span>
                  <span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-primary font-mono text-[10px] font-bold text-primary-foreground">M</span>
                  <span className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-accent font-mono text-[10px] font-bold text-accent-foreground">J</span>
                </div>
                <p className="font-sans text-xs leading-5 text-muted-foreground">Loved by curious travelers<br />in 40+ countries</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-border bg-card p-5 shadow-[0_20px_70px_-35px_var(--primary)] sm:p-7">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">01 / Trip details</p>
                  <h2 className="mt-2 font-sans text-2xl font-bold tracking-tight text-primary">Build your escape</h2>
                </div>
                <div className="rounded-xl bg-secondary px-3 py-2 text-center">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-secondary-foreground">Step</p>
                  <p className="font-mono text-sm font-bold text-secondary-foreground">1 of 1</p>
                </div>
              </div>

              <div className="space-y-5">
                <label className="block">
                  <span className="mb-2 block font-sans text-sm font-semibold text-primary">Destination</span>
                  <span className="relative block">
                    <MapPin className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                    <input required name="destination" type="text" placeholder="Where to next?" className="h-13 w-full rounded-2xl border border-input bg-background pl-11 pr-4 font-sans text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-ring/15" />
                  </span>
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block font-sans text-sm font-semibold text-primary">Start date</span>
                    <span className="relative block">
                      <CalendarDays className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                      <input required name="startDate" type="date" className="h-13 w-full rounded-2xl border border-input bg-background pl-11 pr-3 font-sans text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-ring/15" />
                    </span>
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-sans text-sm font-semibold text-primary">End date</span>
                    <span className="relative block">
                      <CalendarDays className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                      <input required name="endDate" type="date" className="h-13 w-full rounded-2xl border border-input bg-background pl-11 pr-3 font-sans text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-ring/15" />
                    </span>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block font-sans text-sm font-semibold text-primary">Budget</span>
                  <span className="relative block">
                    <Wallet className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                    <span className="pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 font-mono text-sm text-muted-foreground">$</span>
                    <input required min="0" name="budget" type="number" placeholder="2,500" className="h-13 w-full rounded-2xl border border-input bg-background pl-16 pr-4 font-mono text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-ring/15" />
                  </span>
                </label>

                <div className="block">
                  <span className="mb-2 block font-sans text-sm font-semibold text-primary">Your trip personality</span>
                  <div className="relative">
                    <button type="button" onClick={() => setIsTagMenuOpen((open) => !open)} aria-expanded={isTagMenuOpen} aria-haspopup="listbox" className="flex h-13 w-full items-center justify-between rounded-2xl border border-input bg-background px-4 text-left outline-none transition hover:border-primary focus:border-primary focus:ring-4 focus:ring-ring/15">
                      <span className="truncate pr-3 font-sans text-sm text-foreground">{selectedTags.length ? selectedTags.join(', ') : 'Choose what moves you'}</span>
                      <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform ${isTagMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {isTagMenuOpen && (
                      <div role="listbox" aria-multiselectable="true" className="absolute z-10 mt-2 grid w-full grid-cols-2 gap-1 rounded-2xl border border-border bg-card p-2 shadow-xl sm:grid-cols-3">
                        {personalityTags.map((tag) => (
                          <button key={tag} type="button" role="option" aria-selected={selectedTags.includes(tag)} onClick={() => toggleTag(tag)} className={`rounded-xl px-3 py-2.5 text-left font-sans text-xs font-semibold transition ${selectedTags.includes(tag) ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'}`}>
                            {tag}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button type="submit" className="mt-7 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 font-sans text-sm font-bold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-ring/25">
                {submitted ? 'Itinerary request received' : 'Generate Itinerary'}
              </button>
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground">No generic plans. Just your kind of trip.</p>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}

