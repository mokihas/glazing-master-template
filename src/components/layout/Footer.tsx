import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div>
            <Link className="logo" href="/">{siteConfig.businessName}<span>WINDOWS &amp; DOORS &middot; {siteConfig.city.toUpperCase()}</span></Link>
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
              <li><Link href="/services/windows">Replacement windows</Link></li>
              <li><Link href="/services/doors">Front and back doors</Link></li>
              <li><Link href="/services/bifold">Bi-folds and sliders</Link></li>
              <li><Link href="/services/sash">Sliding sash</Link></li>
              <li><Link href="/services/conservatories">Conservatories</Link></li>
              <li><Link href="/services/repairs">Repairs and misted units</Link></li>
            </ul>
          </div>
          <div>
            <h4>Useful</h4>
            <ul>
              <li><Link href="/prices">Price guide</Link></li>
              <li><Link href="/finance">Finance</Link></li>
              <li><Link href="/guarantee">Our guarantee</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/areas">Areas we cover</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="wrap legal">
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} {siteConfig.legalBusinessName} &middot; Company {siteConfig.companyRegistrationNumber} &middot; 
            FENSA {siteConfig.fensaNumber} &middot; VAT {siteConfig.vatNumber} &middot; 
            <Link href="/privacy-policy">Privacy</Link> &middot; <Link href="/terms-and-conditions">Terms</Link>
          </p>
        </div>
      </footer>

      <div className="sticky">
        <a className="call" href={`tel:` + siteConfig.phone.replace(/\s+/g, '')}>Call {siteConfig.phone}</a>
        <Link className="quote" href="/request-a-quote">Get a fixed price</Link>
      </div>
    </>
  );
}
