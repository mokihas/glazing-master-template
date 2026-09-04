import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { ArrowRight, Phone, Play } from "lucide-react"
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema"

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      
      {/* SECTION 1 - HERO (Architectural Elegance) */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden border-b border-border">
        
        {/* Right Side GHL Embed or Fallback */}
        <div className="absolute inset-0 w-full h-full lg:w-[45%] lg:left-auto lg:right-0 bg-muted z-0 flex items-center justify-center border-l border-border">
          {siteConfig.ghl?.heroFormEmbedCode && siteConfig.ghl.heroFormEmbedCode.includes('<') && !siteConfig.ghl.heroFormEmbedCode.includes('Paste your GHL') ? (
            <div 
              className="w-full h-full bg-white flex items-center justify-center p-8 lg:p-12 overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: siteConfig.ghl.heroFormEmbedCode }}
            />
          ) : (
            <div className="w-full h-full relative">
              <img 
                src={siteConfig.heroImage} 
                alt={`${siteConfig.businessName} Architectural Glazing`}
                className="w-full h-full object-cover object-center mix-blend-multiply opacity-50" 
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/50 backdrop-blur-sm">
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4">Lead Capture</span>
                <p className="text-white text-sm max-w-sm">Replace this image by dropping your GoHighLevel (GHL) Form Embed Code into siteConfig.ts under ghl.heroFormEmbedCode</p>
              </div>
            </div>
          )}
           <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent lg:block hidden pointer-events-none" />
           <div className="absolute inset-0 bg-background/90 lg:hidden block pointer-events-none" />
        </div>
        
        <div className="container relative z-10 animate-fade-up">
          <div className="max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-3">
               <span className="w-12 h-[1px] bg-secondary" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">
                 Bespoke Glazing in {siteConfig.city}
               </span>
            </div>
            
            <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1.05] tracking-[-0.02em] text-foreground mb-8">
              Clarity in <br/>
              <span className="text-muted-foreground">Every Detail.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg mb-12">
              Elevating modern architecture through precision glass installation, bespoke residential mirrors, and imposing commercial facades.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/request-a-quote">Start a Project</Link>
              </Button>
              <Link href="/projects" className="group flex items-center gap-3 text-sm font-bold tracking-[0.1em] uppercase text-foreground hover:text-secondary transition-colors">
                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-secondary transition-colors">
                  <Play className="w-4 h-4 ml-1" />
                </span>
                View Showreel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - STATS / TRUST */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-border">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "Safety Record" },
              { value: "24/7", label: "Emergency Response" }
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col ${i !== 0 ? 'pl-12' : ''}`}>
                <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</span>
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - SERVICES */}
      <section className="py-32 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3">
                 <span className="w-8 h-[1px] bg-secondary" />
                 <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Architectural Glazing Services.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              From structural commercial glass to bespoke residential installations, we engineer transparency.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {siteConfig.services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.name}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - THE APPROACH (Visual break) */}
      <section className="relative py-40 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src={siteConfig.heroImage} alt="Architectural glass" className="w-full h-full object-cover object-center mix-blend-overlay opacity-30" />
        </div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
           <h2 className="text-[2.5rem] md:text-[4rem] font-bold leading-[1.1] tracking-tight mb-8">
             "Glass is not merely a material; it is the medium through which architecture breathes."
           </h2>
           <p className="text-muted-foreground uppercase tracking-[0.2em] text-xs font-bold">
             The {siteConfig.businessName !== "[BUSINESS NAME]" ? siteConfig.businessName : "GlazeCorp"} Philosophy
           </p>
        </div>
      </section>

      {/* SECTION 5 - PROJECTS */}
      <section className="py-32 bg-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
             <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3">
                 <span className="w-8 h-[1px] bg-secondary" />
                 <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Selected Works</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Featured Projects.
              </h2>
            </div>
            <Link href="/projects" className="group flex items-center text-xs font-bold tracking-[0.15em] uppercase text-foreground transition-colors hover:text-secondary">
              View All Projects <ArrowRight className="ml-3 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {siteConfig.projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA */}
      <section className="py-32 bg-background border-t border-border">
        <div className="container flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-10">
             <span className="w-8 h-[1px] bg-foreground"></span>
          </div>
          <h2 className="text-[3rem] md:text-[5rem] font-bold tracking-tight text-foreground leading-none mb-10">
            Let's build <br/>
            <span className="text-muted-foreground">something brilliant.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" asChild>
              <Link href="/request-a-quote">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Our Office</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
