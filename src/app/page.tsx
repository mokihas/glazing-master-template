import { siteConfig } from "@/config/siteConfig"
import Script from "next/script"

export default function Home() {
  return (
    <>
      <div className="ec-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-bg-slide is-active"><span>Hero photo 1 &middot; windows</span></div>
          <div className="hero-bg-slide"><span>Hero photo 2 &middot; doors</span></div>
          <div className="hero-bg-slide"><span>Hero photo 3 &middot; conservatories</span></div>
          <div className="hero-bg-slide"><span>Hero photo 4 &middot; porches</span></div>
        </div>
        <div className="hero-bg-overlay"></div>

        <div className="ec-announce">The only {siteConfig.city} installer offering a 15-year guarantee</div>

        <div className="ec-navrow">
          <div className="wrap">
            <a className="ec-brand" href="/">
              <span className="ec-brand-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M12 3v18M4 12h16" />
                </svg>
              </span>
              {siteConfig.businessName}
            </a>
            <ul className="ec-nav-links">
              <li><a href="/services/windows">Windows</a></li>
              <li><a href="/services/doors">Doors</a></li>
              <li><a href="/areas">Areas</a></li>
              <li><a href="/prices">Prices</a></li>
              <li><a href="/reviews">Reviews</a></li>
              <li><a href="/about">About</a></li>
            </ul>
            <div className="ec-navright">
              <a className="ec-navphone" href={`tel:` + siteConfig.phone.replace(/\s+/g, '')}>{siteConfig.phone}</a>
              <a className="ec-btn-solid-ec" href="/request-a-quote">Book a survey</a>
            </div>
          </div>
        </div>

        <div className="ec-body">
          <h1 className="ec-h1" aria-label="New windows, doors, conservatories and porches">
            New
            <span className="rot" aria-hidden="true">
              <span className="rot-track">
                <span className="rot-w is-on">windows</span>
                <span className="rot-w">doors</span>
                <span className="rot-w">conservatories</span>
                <span className="rot-w">porches</span>
              </span>
            </span>
          </h1>
          <p className="ec-h2">for {siteConfig.city} homeowners who want a warmer, quieter house without the hard sell</p>
          <a className="btn ec-cta" href="/request-a-quote">Book a free survey</a>
          <p className="ec-cta-note">
            Fixed price, valid 90 days. No salesman, no pressure, gone in 20 minutes.<br />
            or call <a href={`tel:` + siteConfig.phone.replace(/\s+/g, '')}>{siteConfig.phone}</a> &mdash; we answer 8am&ndash;6pm
          </p>
          <div className="hero-dots" role="group" aria-label="Hero photos"></div>
        </div>

        <div className="stats stats--boxed">
          <ul>
            <li><b>2,800</b><span>windows fitted</span></li>
            <li><b>17 yrs</b><span>fitting in {siteConfig.city} and {siteConfig.state}</span></li>
            <li><b>4.6 wks</b><span>average survey to fit day</span></li>
            <li><b>10 yrs</b><span>insurance-backed guarantee</span></li>
          </ul>
        </div>

        <div className="ec-trustcard">
          <h3>Trusted by</h3>
          <div className="ec-press">
            {siteConfig.trustBadges.map((badge, i) => (
              <img key={i} src={badge.image} alt={badge.name} style={{ height: '34px', width: 'auto' }} />
            ))}
          </div>
          <div className="ec-divider"></div>
          <div className="ec-review">
            <svg className="w-5 h-5" viewBox="0 0 24 24" style={{ height: '24px', width: '24px' }}>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span style={{ marginLeft: '10px' }}><b>{siteConfig.reviews.aggregateRating}</b> out of 5 &middot; {siteConfig.reviews.totalReviews} Google reviews</span>
          </div>
        </div>
      </div>

      <section className="trust">
        <div className="wrap">
          <div className="google-reviews-head">
            <svg className="w-5 h-5" viewBox="0 0 24 24" style={{ height: '28px', width: '28px' }}>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span style={{ marginLeft: '10px' }}><b>{siteConfig.reviews.aggregateRating}</b> out of 5 &middot; {siteConfig.reviews.totalReviews} Google reviews</span>
          </div>
          <div className="google-reviews-grid">
            {siteConfig.testimonials.slice(0,3).map((test, i) => (
              <div key={i} className="google-review-card">
                <p className="stars" aria-label="Rated 5 out of 5">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                <blockquote>{test.text}</blockquote>
                <cite>{test.name}, posted on Google</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad alt">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="dsp">Tell us what the job is and we&apos;ll price that job.</h2>
            <p className="lede">Four routes, four different quotes. Pick the one that matches what you&apos;re actually replacing.</p>
          </div>
          <div className="panes">
            <a className="pane" href="/services/windows">
              <div className="pane-kicker">Warmer rooms, quieter street</div>
              <h3>Replacing windows</h3>
              <p>Two windows or the whole front elevation. Priced per opening, scaffold included where it&apos;s needed.</p>
              <span className="pane-go">Price my windows</span>
            </a>
            <a className="pane" href="/services/doors">
              <div className="pane-kicker">In and out in one day</div>
              <h3>One front or back door</h3>
              <p>Composite, uPVC or aluminium. Old door out, new one in and locking properly before we leave.</p>
              <span className="pane-go">Price a door</span>
            </a>
            <a className="pane" href="/services/whole-house">
              <div className="pane-kicker">Staged over two or three days</div>
              <h3>Whole house</h3>
              <p>Every window and both doors. One survey, one price, one team, and you keep the house watertight throughout.</p>
              <span className="pane-go">Book a whole-house survey</span>
            </a>
            <a className="pane" href="/services/conservatories">
              <div className="pane-kicker">Drawing before you commit a penny</div>
              <h3>Conservatory or extension</h3>
              <p>Glazed roofs, bi-folds and sliders. Building control and structural sign-off handled by us.</p>
              <span className="pane-go">Talk it through</span>
            </a>
          </div>
        </div>
      </section>

      <section className="proof pad">
        <div className="wrap">
          <div>
            <div className="bigstat">91%</div>
            <h2 className="dsp" style={{ fontSize: 'clamp(21px,2.2vw,26px)', marginTop: '14px' }}>
              of our jobs were fitted within six weeks of the survey.
            </h2>
            <p className="src">Source: every domestic install we completed between 1 January and 31 December 2025 &mdash; 214 jobs. Figures updated each January.</p>
          </div>
          <div className="chart">
            <div className="bar-row"><span>2&ndash;3 weeks</span><div className="bar" style={{ width: '39%' }}></div><span>18%</span></div>
            <div className="bar-row"><span>4 weeks</span><div className="bar" style={{ width: '67%' }}></div><span>31%</span></div>
            <div className="bar-row"><span>5 weeks</span><div className="bar" style={{ width: '56%' }}></div><span>26%</span></div>
            <div className="bar-row"><span>6 weeks</span><div className="bar" style={{ width: '35%' }}></div><span>16%</span></div>
            <div className="bar-row"><span>7 weeks +</span><div className="bar late" style={{ width: '20%' }}></div><span>9%</span></div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap" style={{ paddingTop: 'var(--section)' }}>
          <div className="sec-head">
            <h2 className="dsp">The five things that happen, in order.</h2>
            <p className="lede">Nobody phones you afterwards to renegotiate. The number on the quote is the number on the invoice.</p>
          </div>
        </div>
        <div className="steps">
          <div className="step"><div className="step-n">1</div><h3>Survey</h3><p>45 minutes. Every opening measured to the millimetre, plus a look at lintels, sills and anything the last fitter got wrong.</p></div>
          <div className="step"><div className="step-n">2</div><h3>Fixed price</h3><p>Emailed within 24 hours, itemised per opening. Valid 90 days. No pressure discount attached to it.</p></div>
          <div className="step"><div className="step-n">3</div><h3>Manufacture</h3><p>Made to your measurements by our local fabricator. Frame colour and glass spec confirmed in writing before it&apos;s cut.</p></div>
          <div className="step"><div className="step-n">4</div><h3>Fit day</h3><p>Dust sheets down, old units out, new ones in, everything sealed and the skip loaded. House is watertight every night.</p></div>
          <div className="step"><div className="step-n">5</div><h3>Sign-off</h3><p>We walk the job with you, adjust anything stiff, then register it with FENSA. Certificate lands inside 20 days.</p></div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="dsp">Our seven-point guarantee</h2>
            <p className="lede">The same promises on every job, from a single sash to a full house.</p>
          </div>
          <div className="guarantee-grid">
            <article className="guarantee-card">
              <div className="guarantee-head">
                <svg className="guarantee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
                <h3 className="guarantee-title">Reliable</h3>
              </div>
              <p>You&apos;re busy and we&apos;ll work around that. You get a confirmed fitting date the week before, a call the morning we set off, and a realistic finish time.</p>
              <p>No open-ended &quot;sometime that week&quot;.</p>
            </article>
            <article className="guarantee-card">
              <div className="guarantee-head">
                <svg className="guarantee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20h16" /><path d="M7 20v-5h10v5" /><path d="M9 15V4h6v11" /></svg>
                <h3 className="guarantee-title">Clean</h3>
              </div>
              <p>Dust sheets down before the first frame comes out. Old units, offcuts, silicone waste and packaging leave with us the same day.</p>
              <p>We hoover through, wipe the glass down, and wear shoe covers indoors.</p>
            </article>
            <article className="guarantee-card">
              <div className="guarantee-head">
                <svg className="guarantee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 13h4l3 3h4" /><path d="M20 11V6a2 2 0 0 0-4 0" /><path d="M16 10V4a2 2 0 0 0-4 0v6" /><path d="M12 10V5a2 2 0 0 0-4 0v8" /></svg>
                <h3 className="guarantee-title">Courteous</h3>
              </div>
              <p>Friendly and respectful to you, your property, your family and your neighbours.</p>
              <p>We work around pets and children, keep every opening secured while we&apos;re on site, and never leave a property unsealed overnight.</p>
            </article>
            <article className="guarantee-card">
              <div className="guarantee-head">
                <svg className="guarantee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
                <h3 className="guarantee-title">Trustworthy</h3>
              </div>
              <p>Every fitter is DBS-checked, fully insured and directly employed by us.</p>
              <p>No unvetted subcontractors turning up at your door in an unmarked van.</p>
            </article>
            <article className="guarantee-card">
              <div className="guarantee-head">
                <svg className="guarantee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9h8" /><path d="M8 12h5" /></svg>
                <h3 className="guarantee-title">Honest</h3>
              </div>
              <p>Sometimes we find rotten timber, a failed lintel or damaged reveals once the old frame is out.</p>
              <p>We stop, show you, explain the options and the cost, and only carry on once you&apos;ve agreed. Otherwise the quoted price is the price you pay.</p>
            </article>
            <article className="guarantee-card">
              <div className="guarantee-head">
                <svg className="guarantee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 20l7-7" /><path d="M14 4l6 6-3 3-6-6z" /><path d="M11 7L8 4H4v4l3 3" /></svg>
                <h3 className="guarantee-title">Professional</h3>
              </div>
              <p>FENSA-registered and manufacturer-trained on every system we install.</p>
              <p>We keep our accreditations current and register your installation with building control.</p>
            </article>
            <article className="guarantee-card guarantee-card--wide">
              <div className="guarantee-head">
                <svg className="guarantee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="5" /><path d="M9 13l-2 8 5-3 5 3-2-8" /></svg>
                <h3 className="guarantee-title">Covered</h3>
              </div>
              <p>Your frames and sealed units come with a 10-year manufacturer guarantee.</p>
              <p>We add 5 years of our own on top, covering the installation itself &mdash; seals, fixings, finish and weathertightness. Backed by an insurance-backed guarantee, so the cover stands even if we don&apos;t.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="pad alt">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="dsp">Recent jobs, and what the customer said afterwards.</h2>
          </div>
          <div className="jobs">
            {siteConfig.projects.slice(0,3).map((job, i) => (
              <article key={i} className="job">
                <div className="job-img">Project photo &middot; 4:3<br />{job.title}</div>
                <div className="job-body">
                  <div className="job-meta">{job.location} &middot; {job.title}</div>
                  <p className="stars" aria-label="Rated 5 out of 5">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                  <blockquote>{job.description}</blockquote>
                  <cite>Verified Review</cite>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="dsp">Why local homeowners choose us over the rest</h2>
          </div>
          <div className="compare-wrap">
            <table className="compare">
              <thead>
                <tr>
                  <th>What matters to you</th>
                  <th className="compare-us">{siteConfig.businessName}</th>
                  <th>National chains</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Deal directly with the owner</td><td className="compare-us">&#10003; Yes</td><td>Call centre</td></tr>
                <tr><td>No high-pressure sales reps</td><td className="compare-us">&#10003; Yes</td><td className="compare-no">&#10007; No</td></tr>
                <tr><td>Traditional putty-work specialists</td><td className="compare-us">&#10003; Yes</td><td className="compare-no">&#10007; Rare</td></tr>
                <tr><td>Transparent fixed pricing</td><td className="compare-us">&#10003; Yes</td><td>Hidden extras</td></tr>
                <tr><td>Own team &mdash; never subcontracted</td><td className="compare-us">&#10003; Yes</td><td>Often subbed</td></tr>
                <tr><td>17+ years serving your area</td><td className="compare-us">&#10003; Yes</td><td>Out-of-town</td></tr>
                <tr><td>5 years&apos; extra warranty this month</td><td className="compare-us">&#10003; Free</td><td className="compare-no">&#10007; No</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="owner pad">
        <div className="wrap">
          <div className="portrait">Owner photo &middot; 4:5<br />On site, no studio backdrop</div>
          <div>
            <h2 className="dsp">You'll meet {siteConfig.founder} at the survey, and again on fit day.</h2>
            <p className="lede" style={{ marginTop: '16px' }}>{siteConfig.founder} fitted windows for other firms for eleven years before starting this business in {siteConfig.yearEstablished}, tired of installing units measured wrong by a salesman who was never coming back.</p>
            <p className="lede">So here the person who measures your house is the person who fits it. There is no commission, no evening appointment, and no price that drops by a third if you sign tonight. Four fitters, all employed, all local.</p>
            <p className="sig">{siteConfig.founder}, owner</p>
          </div>
        </div>
      </section>

      <section className="cover pad alt">
        <div className="wrap">
          <div className="cover-top">
            <div>
              <h2 className="dsp">Where we work.</h2>
              <p className="lede" style={{ marginTop: '18px' }}>We stay within 40 minutes of the workshop so a callback in year seven is a phone call, not a claim form.</p>
              <p style={{ fontSize: '16px', color: 'var(--mute)' }}>Outside these districts? Ring anyway &mdash; if we can&apos;t do it, we&apos;ll tell you who can.</p>
            </div>
            <div className="cover-map">
              <div className="cover-map-embed">Google Map embed &middot; placeholder<br />{siteConfig.streetAddress}</div>
              <a className="cover-map-link" href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">View on Google Maps &rarr;</a>
            </div>
          </div>
          <div className="cover-areas">
            <div>
              <h3>{siteConfig.city}</h3>
              <ul className="districts">
                <li><a href="#">{siteConfig.city} Central</a></li>
                <li><a href="#">{siteConfig.city} North</a></li>
                <li><a href="#">{siteConfig.city} South</a></li>
                <li><a href="#">{siteConfig.city} East</a></li>
                <li><a href="#">{siteConfig.city} West</a></li>
              </ul>
            </div>
            <div>
              <h3>{siteConfig.state}</h3>
              <ul className="districts">
                <li><a href="#">Surrounding Area 1</a></li>
                <li><a href="#">Surrounding Area 2</a></li>
                <li><a href="#">Surrounding Area 3</a></li>
                <li><a href="#">Surrounding Area 4</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="finance">
        <div className="wrap">
          <div className="finance-panel">
            <div>
              <h2 className="dsp">Spread it over two years at 0%.</h2>
              <p>A &pound;6,400 whole-house job is &pound;266 a month for 24 months with nothing to pay for the first three. Subject to status. Credit provided by a third-party lender; we&apos;re a credit broker, not a lender.</p>
            </div>
            <a className="btn btn-light" href="/finance">See the finance options</a>
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="wrap">
          <div className="sec-head"><h2 className="dsp">The questions we get asked every week.</h2></div>
          <div className="faq">
            {siteConfig.faqs.map((faq, i) => (
              <details key={i} open={i === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final pad alt" id="quote">
        <div className="wrap">
          <div>
            <h2 className="dsp">Start with the job you&apos;ve got.</h2>
            <p className="lede" style={{ marginTop: '12px' }}>Same four routes. Or fill the form and we&apos;ll ring you back within one working hour.</p>
            <div className="panes" style={{ marginTop: '24px' }}>
              <a className="pane" href="/services/windows">
                <h3 style={{ fontSize: '16.5px', marginBottom: '10px' }}>Replacing windows</h3>
                <span className="pane-go">Price my windows</span>
              </a>
              <a className="pane" href="/services/doors">
                <h3 style={{ fontSize: '16.5px', marginBottom: '10px' }}>One front or back door</h3>
                <span className="pane-go">Price a door</span>
              </a>
              <a className="pane" href="/services/whole-house">
                <h3 style={{ fontSize: '16.5px', marginBottom: '10px' }}>Whole house</h3>
                <span className="pane-go">Book a survey</span>
              </a>
              <a className="pane" href="/services/conservatories">
                <h3 style={{ fontSize: '16.5px', marginBottom: '10px' }}>Conservatory or extension</h3>
                <span className="pane-go">Talk it through</span>
              </a>
            </div>
          </div>

          <form name="quote" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="quote" />
            <p className="hp"><label>Leave blank <input name="bot-field" /></label></p>
            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Get a fixed price</h3>
            <label htmlFor="job">What&apos;s the job?</label>
            <select id="job" name="job" required>
              <option value="">Choose one&hellip;</option>
              <option>Replacing windows</option>
              <option>One front or back door</option>
              <option>Whole house</option>
              <option>Conservatory or extension</option>
              <option>Something else</option>
            </select>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" autoComplete="name" required />
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" required />
            <label htmlFor="postcode">Postcode</label>
            <input id="postcode" name="postcode" autoComplete="postal-code" required />
            <label htmlFor="detail">Anything we should know (optional)</label>
            <textarea id="detail" name="detail" rows={3} placeholder="e.g. six windows front and back, 1930s semi"></textarea>
            <button className="btn" type="submit">Request my fixed price</button>
            <p className="formnote">We ring back within one working hour, 8am&ndash;6pm Mon&ndash;Sat. We don&apos;t pass your details to anyone and we don&apos;t book evening appointments.</p>
          </form>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div>
            <a className="logo" href="/">{siteConfig.businessName}<span>WINDOWS &amp; DOORS &middot; {siteConfig.city.toUpperCase()}</span></a>
            <p style={{ marginTop: '18px', maxWidth: '38ch' }}>
              {siteConfig.streetAddress}<br />
              <a className="foot-phone" href={`tel:` + siteConfig.phone.replace(/\s+/g, '')}>{siteConfig.phone}</a><br />
              {siteConfig.email}
            </p>
            <p style={{ fontSize: '14px' }}>Mon&ndash;Fri 8am&ndash;6pm &middot; Sat 9am&ndash;1pm</p>
          </div>
          <div>
            <h4>What we fit</h4>
            <ul>
              <li><a href="/services/windows">Replacement windows</a></li>
              <li><a href="/services/doors">Front and back doors</a></li>
              <li><a href="/services/bifold">Bi-folds and sliders</a></li>
              <li><a href="/services/sash">Sliding sash</a></li>
              <li><a href="/services/conservatories">Conservatories</a></li>
              <li><a href="/services/repairs">Repairs and misted units</a></li>
            </ul>
          </div>
          <div>
            <h4>Useful</h4>
            <ul>
              <li><a href="/prices">Price guide</a></li>
              <li><a href="/finance">Finance</a></li>
              <li><a href="/guarantee">Our guarantee</a></li>
              <li><a href="/reviews">Reviews</a></li>
              <li><a href="/areas">Areas we cover</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
          <div className="wrap legal">
            <p style={{ margin: 0 }}>
              &copy; {new Date().getFullYear()} {siteConfig.legalBusinessName} &middot; Company {siteConfig.companyRegistrationNumber} &middot; 
              FENSA {siteConfig.fensaNumber} &middot; VAT {siteConfig.vatNumber} &middot; 
              <a href="/privacy-policy">Privacy</a> &middot; <a href="/terms-and-conditions">Terms</a>
            </p>
          </div>
      </footer>

      <div className="sticky">
        <a className="call" href={`tel:` + siteConfig.phone.replace(/\s+/g, '')}>Call {siteConfig.phone}</a>
        <a className="quote" href="/request-a-quote">Get a fixed price</a>
      </div>

      <Script id="motion-script" strategy="afterInteractive">
        {`
        (function () {
          'use strict';
          var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          var EASE = 'cubic-bezier(.16,1,.3,1)';

          var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-bg-slide'));
          var track = document.querySelector('.rot-track');
          var words = track ? Array.prototype.slice.call(track.querySelectorAll('.rot-w')) : [];
          var dotsWrap = document.querySelector('.hero-dots');
          var count = Math.max(slides.length, words.length);
          var cur = 0, timer = null, dots = [];

          function fit() {
            if (!track || !words[cur]) return;
            track.style.width = words[cur].offsetWidth + 'px';
          }
          if (track && words.length > 1) {
            track.classList.add('is-js');
            fit();
            if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
            window.addEventListener('resize', fit);
          }

          function go(n) {
            if (n === cur) return;
            if (slides[cur]) slides[cur].classList.remove('is-active');
            if (slides[n]) slides[n].classList.add('is-active');
            if (words[cur] && words[n]) {
              var out = words[cur], inn = words[n];
              out.classList.remove('is-on');
              out.classList.add('is-out');
              inn.style.transition = 'none';
              inn.classList.remove('is-out');
              void inn.offsetWidth;
              inn.style.transition = '';
              inn.classList.add('is-on');
            }
            dots.forEach(function (d, i) { d.setAttribute('aria-current', i === n ? 'true' : 'false'); });
            cur = n;
            fit();
          }
          function start() {
            clearInterval(timer);
            if (!reduce) timer = setInterval(function () { go((cur + 1) % count); }, 4500);
          }
          if (dotsWrap && count > 1) {
            for (var d = 0; d < count; d++) {
              var b = document.createElement('button');
              b.type = 'button';
              b.setAttribute('aria-label', 'Show photo ' + (d + 1));
              b.setAttribute('aria-current', d === 0 ? 'true' : 'false');
              (function (i) { b.addEventListener('click', function () { go(i); start(); }); })(d);
              dotsWrap.appendChild(b);
              dots.push(b);
            }
          }
          if (count > 1) start();

          if (reduce || !('IntersectionObserver' in window)) return;

          var heroBits = document.querySelectorAll('.ec-h1, .ec-h2, .ec-cta, .ec-cta-note, .hero-dots, .stats--boxed, .ec-trustcard');
          heroBits.forEach(function (el, i) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity .9s ' + EASE + ' ' + (150 + i * 90) + 'ms, transform .9s ' + EASE + ' ' + (150 + i * 90) + 'ms';
          });
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              heroBits.forEach(function (el) {
                el.style.opacity = '1'; el.style.transform = 'none';
                setTimeout(function () { el.style.opacity = ''; el.style.transform = ''; el.style.transition = ''; }, 2000);
              });
            });
          });

          function hide(el, delay) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(36px)';
            el.style.transition = 'opacity .9s ' + EASE + ' ' + delay + 'ms, transform .9s ' + EASE + ' ' + delay + 'ms';
          }
          function show(el) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            setTimeout(function () { el.style.opacity = ''; el.style.transform = ''; el.style.transition = ''; }, 1600);
          }
          var singles = Array.prototype.slice.call(document.querySelectorAll(
            '.sec-head, .owner .wrap > div:last-child, .cover-top > div, .finance-panel, ' +
            '.compare-wrap, .faq details, form, .portrait, .bigstat, .chart'
          ));
          singles.forEach(function (el) { hide(el, 0); });

          var groups = Array.prototype.slice.call(document.querySelectorAll(
            '.panes, .jobs, .steps, .guarantee-grid, .google-reviews-grid, .districts'
          ));
          groups.forEach(function (g) {
            Array.prototype.forEach.call(g.children, function (c, i) { hide(c, i * 80); });
          });

          var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
              if (!e.isIntersecting) return;
              if (groups.indexOf(e.target) !== -1) Array.prototype.forEach.call(e.target.children, show);
              else show(e.target);
              io.unobserve(e.target);
            });
          }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
          singles.concat(groups).forEach(function (el) { io.observe(el); });
        })();
        `}
      </Script>
    </>
  );
}

