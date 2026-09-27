import { useEffect, useState, type ReactNode } from 'react';
import {
  Activity, ArrowRight, AudioLines, BrainCircuit, ChevronDown, Ear,
  ExternalLink, Eye, FileText, Menu, ScanEye, Smartphone, Users, X,
} from 'lucide-react';

const waitlistUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSefoPfNw_EgICDDiSPj_fE_V48oujlK7JKjVndEYlHPVXmqkQ/viewform';

const navItems = [
  ['Overview', '#overview'], ['How It Works', '#how-it-works'],
  ['Technology', '#technology'], ['Prototype', '#prototype'],
  ['Team', '#team'], ['Research', '#research'],
];

const processSteps = [
  { icon: AudioLines, title: 'Sound Stimulus', description: 'A series of sounds is played through the smartphone-based workflow.' },
  { icon: Eye, title: 'Pupil Response', description: 'The eye responds involuntarily as the auditory system processes sound.' },
  { icon: ScanEye, title: 'Eye Capture', description: 'A customized clip-on pupillometer records changes in pupil size.' },
  { icon: BrainCircuit, title: 'Signal Analysis', description: 'Software extracts the response signal for processing and AI analysis.' },
  { icon: Activity, title: 'Screening Output', description: 'The analyzed response supports an accessible hearing-screening workflow.' },
];

const technologies = [
  { icon: Smartphone, title: 'Smartphone-Based System', description: 'The smartphone supports the user interaction, sound-stimulus workflow, and on-device analysis described by the research team.' },
  { icon: Eye, title: 'Pupillometry', description: 'The system measures changes in pupil size associated with auditory stimulation—an involuntary response that does not depend on a button press.' },
  { icon: BrainCircuit, title: 'Signal Processing & AI', description: 'Software converts recorded eye data into a pupil-response signal and applies signal processing and deep-learning analysis.' },
  { icon: Ear, title: 'Accessible Screening', description: 'The research explores a path toward hearing screening outside traditional clinical settings, including at-home use.' },
];

const sources = [
  { label: 'University at Buffalo', title: 'Seeing Sound', href: 'https://www.buffalo.edu/home/how/articlehost.host.html/content/shared/www/eub/here-is-how/25-26/hearing-loss.detail.html' },
  { label: 'UB News', title: 'New hearing loss test checks the eyes—not the ears', href: 'https://www.buffalo.edu/ai-data-science/news-events/news/articles.host.html/content/shared/university/news/news-center-releases/2025/11/hearing-loss-test-eyes-ai.detail.html' },
  { label: 'UBNow', title: 'Hearing test and cognitive decline', href: 'https://www.buffalo.edu/ubnow/campus.host.html/content/shared/university/news/ub-reporter-articles/stories/2025/12/hearing-test-cognitive-decline.detail.html' },
  { label: 'AudioSight', title: 'Official project website', href: 'https://audiosight.auspexmedix.com/' },
];

function PhotoCredit({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-xs leading-relaxed text-[#032d4f]/55">{children} Credit: Meredith Forrest Kulwicki, University at Buffalo.</p>;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#032d4f]">
      <a href="#main-content" className="sr-only z-[60] rounded-full bg-white px-5 py-3 text-[#032d4f] focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>

      <nav aria-label="Primary navigation" className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'border-b border-[#032d4f]/10 bg-[#f0f0ea]/95 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" aria-label="AudioSight home" onClick={() => setIsMenuOpen(false)}>
            <img src={isScrolled || isMenuOpen ? '/logo_dark.png' : '/logo_light.png'} alt="AudioSight" className="h-11 w-auto" />
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-[#032d4f]/75 hover:text-[#032d4f]' : 'text-white/85 hover:text-white'}`}>{label}</a>
            ))}
            <a href={waitlistUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#95b1ee] px-5 py-2.5 text-sm font-semibold text-[#032d4f] transition hover:bg-white">Join Waitlist</a>
          </div>
          <button type="button" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} className={`rounded-lg p-2 lg:hidden ${isScrolled || isMenuOpen ? 'text-[#032d4f]' : 'text-white'}`}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="border-t border-[#032d4f]/10 bg-[#f0f0ea] px-4 pb-5 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col pt-3">
              {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-3 font-medium text-[#032d4f]/80 hover:bg-[#95b1ee]/15">{label}</a>)}
              <a href={waitlistUrl} target="_blank" rel="noreferrer" className="mt-2 rounded-full bg-[#95b1ee] px-5 py-3 text-center font-semibold text-[#032d4f]">Join Waitlist</a>
            </div>
          </div>
        )}
      </nav>

      <main id="main-content">
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#032d4f] pt-24">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#95b1ee]/20 blur-3xl" />
          <div className="absolute -bottom-48 -left-24 h-96 w-96 rounded-full bg-[#95b1ee]/10 blur-3xl" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                {['AI', 'Digital Health', 'Mobile Sensing', 'Hearing', 'Pupillometry'].map((tag) => <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">{tag}</span>)}
              </div>
              <img src="/logo_light.png" alt="AudioSight" className="mb-7 h-20 w-auto sm:h-24" />
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#95b1ee]">AI-powered hearing research</p>
              <h1 className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Hearing screening through the eyes</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">AudioSight explores a new approach to hearing screening by measuring involuntary pupil responses to sound with a smartphone-based pupil measurement system and AI-driven signal analysis.</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#how-it-works" className="inline-flex items-center rounded-full bg-[#95b1ee] px-7 py-3.5 font-semibold text-[#032d4f] transition hover:-translate-y-0.5 hover:bg-white">See how it works <ArrowRight className="ml-2" size={19} /></a>
                <a href="#research" className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">Explore the research</a>
              </div>
            </div>
            <figure className="relative mx-auto w-full max-w-2xl lg:mx-0">
              <div className="absolute -inset-4 rounded-[2rem] border border-white/10" />
              <img src="/images/audiosight-pupil-test.jpg" alt="Elizabeth Rivera Rosario fits the AudioSight eye-reading device in front of Wei Bo" className="relative aspect-[16/10] w-full rounded-3xl object-cover shadow-2xl shadow-black/30" />
              <figcaption className="mt-4 text-xs leading-relaxed text-white/55">Elizabeth Rivera Rosario fits the eye-reading device in front of Wei Bo. Credit: Meredith Forrest Kulwicki, University at Buffalo.</figcaption>
            </figure>
          </div>
          <a href="#overview" aria-label="Scroll to overview" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 motion-safe:animate-bounce"><ChevronDown size={30} /></a>
        </section>

        <section id="overview" className="scroll-mt-20 bg-[#f0f0ea] py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#032d4f]/55">Overview</p><h2 className="text-4xl font-bold leading-tight sm:text-5xl">A different signal for hearing screening</h2></div>
            <div className="space-y-6 text-lg leading-relaxed text-[#032d4f]/70">
              <p>Traditional behavioral hearing assessments rely on a person actively responding to instructions and sounds. Access can be limited, and active-response testing may be challenging for some people experiencing cognitive decline.</p>
              <p>Developed by researchers at the University at Buffalo and UB spinout Auspex Medix, AudioSight investigates whether involuntary changes in pupil size can support a more accessible hearing-screening workflow. The research combines a smartphone, a customized clip-on pupillometer, and software analysis.</p>
              <div className="rounded-2xl border border-[#032d4f]/10 bg-white p-6 text-base"><strong className="text-[#032d4f]">Research focus:</strong> AudioSight is an investigational screening approach. It is not presented here as a replacement for a clinical diagnosis or a professional hearing evaluation.</div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#032d4f]/55">How it works</p><h2 className="text-4xl font-bold sm:text-5xl">From sound to pupil-response signal</h2><p className="mt-5 text-lg leading-relaxed text-[#032d4f]/65">The system observes an involuntary physiological response while sounds play, then converts the recorded eye data into a signal for analysis.</p></div>
            <div className="grid gap-4 md:grid-cols-5">
              {processSteps.map((step, index) => { const Icon = step.icon; return (
                <div key={step.title} className="relative"><div className="h-full rounded-2xl bg-[#f0f0ea] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"><div className="mb-5 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#032d4f] text-white"><Icon size={24} /></div><span className="text-sm font-bold text-[#032d4f]/30">0{index + 1}</span></div><h3 className="text-lg font-bold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#032d4f]/65">{step.description}</p></div>{index < processSteps.length - 1 && <ArrowRight aria-hidden="true" size={18} className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#95b1ee] md:block" />}</div>
              ); })}
            </div>
            <div className="mt-12 rounded-3xl bg-[#032d4f] px-6 py-8 text-center text-white sm:px-10"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#95b1ee]">Analysis pipeline</p><p className="mt-4 text-base font-medium leading-loose text-white/85 sm:text-lg">Eye Video <span className="mx-2 text-[#95b1ee]">→</span> Eye / Pupil Detection <span className="mx-2 text-[#95b1ee]">→</span> Pupil Diameter Extraction <span className="mx-2 text-[#95b1ee]">→</span> Time-Series Processing <span className="mx-2 text-[#95b1ee]">→</span> AI Analysis <span className="mx-2 text-[#95b1ee]">→</span> Screening Interpretation</p></div>
          </div>
        </section>

        <section id="technology" className="scroll-mt-20 bg-[#f0f0ea] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#032d4f]/55">Technology</p><h2 className="text-4xl font-bold sm:text-5xl">A compact research system</h2><p className="mt-5 text-lg leading-relaxed text-[#032d4f]/65">AudioSight brings stimulus delivery, eye measurement, signal extraction, and analysis into one smartphone-centered workflow.</p></div>
            <div className="grid gap-6 sm:grid-cols-2">
              {technologies.map((technology) => { const Icon = technology.icon; return <article key={technology.title} className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#95b1ee]/25 text-[#032d4f]"><Icon size={28} /></div><h3 className="text-2xl font-bold">{technology.title}</h3><p className="mt-4 leading-relaxed text-[#032d4f]/65">{technology.description}</p></article>; })}
            </div>
          </div>
        </section>

        <section id="prototype" className="scroll-mt-20 bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#032d4f]/55">Hardware & prototype</p><h2 className="text-4xl font-bold sm:text-5xl">Built around the smartphone</h2><p className="mt-5 text-lg leading-relaxed text-[#032d4f]/65">The prototype pairs a smartphone with a customized clip-on pupillometer positioned to observe the eye while the app presents a series of sounds.</p></div>
            <div className="grid gap-6 lg:grid-cols-2">
              <figure className="rounded-3xl bg-[#f0f0ea] p-4 sm:p-6"><img src="/images/audiosight-pupil-test.jpg" alt="AudioSight smartphone and pupillometer positioned in front of a participant's eye" className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" /><PhotoCredit>The smartphone-controlled setup records involuntary changes in pupil size as sounds play.</PhotoCredit></figure>
              <figure className="rounded-3xl bg-[#f0f0ea] p-4 sm:p-6"><img src="/images/audiosight-researchers.jpg" alt="Wenyao Xu and Wei Sun examine the AudioSight smartphone-controlled hearing test" className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" /><PhotoCredit>Wenyao Xu and Wei Sun examine the smartphone-controlled hearing test.</PhotoCredit></figure>
            </div>
          </div>
        </section>

        <section id="team" className="scroll-mt-20 bg-[#032d4f] py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <figure><img src="/images/audiosight-research-team.jpg" alt="AudioSight research team: Owen Llodra, Elizabeth Rivera Rosario, Wenyao Xu, Wei Sun, and Wei Bo" className="aspect-[16/10] w-full rounded-3xl object-cover shadow-2xl shadow-black/20" loading="lazy" /><figcaption className="mt-4 text-xs leading-relaxed text-white/55">From left: Owen Llodra, Elizabeth Rivera Rosario, Wenyao Xu, Wei Sun, and Wei Bo. Credit: Meredith Forrest Kulwicki, University at Buffalo.</figcaption></figure>
            <div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#95b1ee]">Research team</p><h2 className="text-4xl font-bold sm:text-5xl">University at Buffalo & Auspex Medix</h2><p className="mt-5 leading-relaxed text-white/70">AudioSight is being advanced by a multidisciplinary team spanning computer science, communicative disorders, and digital health research.</p>
              <div className="mt-9 space-y-4">
                <a href="https://engineering.buffalo.edu/computer-science-engineering/people/faculty-directory/wenyao-xu.html" target="_blank" rel="noreferrer" className="group flex items-start justify-between rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"><div><h3 className="text-xl font-bold">Wenyao Xu</h3><p className="mt-1 text-sm leading-relaxed text-white/65">Professor and Director of Research<br />Department of Computer Science and Engineering<br />University at Buffalo</p></div><ExternalLink className="mt-1 text-[#95b1ee]" size={19} /></a>
                <a href="https://arts-sciences.buffalo.edu/cds/faculty/faculty-directory/wei-sun.html" target="_blank" rel="noreferrer" className="group flex items-start justify-between rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"><div><h3 className="text-xl font-bold">Wei Sun</h3><p className="mt-1 text-sm leading-relaxed text-white/65">Associate Professor<br />Department of Communicative Disorders and Sciences<br />University at Buffalo</p></div><ExternalLink className="mt-1 text-[#95b1ee]" size={19} /></a>
              </div>
            </div>
          </div></div>
        </section>

        <section id="research" className="scroll-mt-20 bg-[#f0f0ea] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#032d4f]/55">Research & sources</p><h2 className="text-4xl font-bold sm:text-5xl">Evidence behind the project</h2><p className="mt-5 text-lg leading-relaxed text-[#032d4f]/65">Learn more about the prior research and the official University at Buffalo reporting behind AudioSight.</p></div>
            <a href="https://cse.buffalo.edu/~wenyaoxu/papers/conference/xu-bsn2024b.pdf" target="_blank" rel="noreferrer" className="group grid gap-7 rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#95b1ee]/25"><FileText size={30} /></div><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#032d4f]/45">Related prior research · IEEE BSN 2024</p><h3 className="mt-2 text-2xl font-bold">AudioPupil: A Low-Cost Embedded Medical Device for Hearing Disorder Screening</h3><p className="mt-3 leading-relaxed text-[#032d4f]/65">Sen Jiang, Chuhui Liu, Ahmet Y. Demirbas, Wei Sun, and Wenyao Xu. AudioPupil is presented as related prior research and is not described here as identical to AudioSight.</p></div><ExternalLink className="text-[#032d4f]/45 group-hover:text-[#032d4f]" size={24} /></a>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="group flex min-h-44 flex-col justify-between rounded-2xl border border-[#032d4f]/10 p-6 transition hover:-translate-y-1 hover:border-[#95b1ee] hover:bg-white"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#032d4f]/45">{source.label}</p><h3 className="mt-3 text-lg font-bold leading-snug">{source.title}</h3></div><ExternalLink className="mt-6 text-[#032d4f]/40 group-hover:text-[#032d4f]" size={20} /></a>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="relative overflow-hidden rounded-3xl bg-[#032d4f] px-6 py-14 text-center text-white sm:px-12 sm:py-16"><div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#95b1ee]/20 blur-3xl" /><Users className="relative mx-auto mb-6 text-[#95b1ee]" size={38} /><h2 className="relative text-4xl font-bold sm:text-5xl">Follow AudioSight’s progress</h2><p className="relative mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">Join the waitlist for project updates and opportunities to learn more about AudioSight.</p><a href={waitlistUrl} target="_blank" rel="noreferrer" className="relative mt-8 inline-flex items-center rounded-full bg-[#95b1ee] px-8 py-4 text-lg font-semibold text-[#032d4f] transition hover:-translate-y-0.5 hover:bg-white">Join the Waitlist <ArrowRight className="ml-2" size={20} /></a></div></div></section>
      </main>

      <footer className="border-t border-white/10 bg-[#032d4f] py-12 text-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8"><div><img src="/logo_light.png" alt="AudioSight" className="mx-auto h-14 w-auto md:mx-0" /><p className="mt-3 text-sm text-white/55">AI-Powered HearingTech for Aging Well</p></div><div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/65"><a href="#overview" className="hover:text-white">Overview</a><a href="#technology" className="hover:text-white">Technology</a><a href="#team" className="hover:text-white">Team</a><a href="#research" className="hover:text-white">Research</a></div><p className="text-sm text-white/45">© {new Date().getFullYear()} AudioSight. All rights reserved.</p></div></footer>
    </div>
  );
}

export default App;
