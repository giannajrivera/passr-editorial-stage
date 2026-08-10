import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/copyright")({
  head: () => ({
    meta: [
      { title: "Copyright Policy — Passr" },
      { name: "description", content: "Intellectual property rights and DMCA notification guidelines for Passr." },
    ],
  }),
  component: CopyrightPage,
});

function CopyrightPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-[900px] px-6 pb-32 pt-40 md:px-12 md:pt-48">
        {/* Top Category Label */}
        <p className="eyebrow text-muted-foreground">Legal</p>
        
        {/* Main Title */}
        <h1 className="font-display mt-8 text-[clamp(2rem,5vw,3.5rem)] leading-[0.98] tracking-[-0.03em]">
          Copyright Policy
        </h1>
        
        {/* Content Container */}
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground md:text-base">
          
          <p className="text-xs uppercase tracking-wider font-semibold text-foreground">
            Last Updated: August 10, 2026
          </p>

          <p>
            Passr, Inc. (&ldquo;<strong>Passr</strong>,&rdquo; &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>our</strong>,&rdquo; or &ldquo;<strong>us</strong>&rdquo;) respects the intellectual property rights of others and expects our users to do the same.
          </p>

          <p>
            It is Passr&apos;s policy, in appropriate circumstances and at our discretion, to disable and/or terminate the accounts of users who repeatedly infringe, or are repeatedly charged with infringing, the copyrights or other intellectual property rights of others.
          </p>

          {/* Section 1 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">1. Our Content</h2>
            <p>
              All content on our website, browser extension, and mobile application(s) — including the Passr name, logo, design, graphics, text, comparison tools, software, and underlying code — is the property of Passr or its licensors and is protected by U.S. and international copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise exploit any of our content without our prior written permission, except as permitted under applicable law (such as fair use) or as expressly authorized by us.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">2. Third-Party and Marketplace Content</h2>
            <p>
              Ticket listings, pricing, availability, seat maps, Event details, artist/team/venue names and imagery, and related content displayed through Passr may originate from third-party ticketing and resale marketplaces (&ldquo;<strong>Marketplaces</strong>&rdquo;) or other third parties, and are the property of their respective owners. Passr does not claim ownership over Marketplace listings or content; we display and compare this content under applicable data-use terms, partner agreements, and/or fair use principles for the purpose of price and availability comparison.
            </p>
            <p>
              If you are a Marketplace, venue, artist, league, or rights holder and have concerns about how your content is displayed or compared through Passr, please contact us at{' '}
              <a href="mailto:copyright@passr.com" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">
                copyright@passr.com
              </a>.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">3. Trademarks</h2>
            <p>
              &ldquo;Passr&rdquo; and the Passr logo are trademarks of Passr. All other trademarks, service marks, artist names, team names, league names, venue names, and logos displayed through the Services (including those of Marketplaces, sports leagues, artists, and venues) are the property of their respective owners and are used solely for identification and comparison purposes. Their appearance on Passr does not imply endorsement of, sponsorship by, or affiliation with Passr, unless expressly stated.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">4. Notification of Copyright Infringement (DMCA)</h2>
            <p>
              In accordance with the Digital Millennium Copyright Act of 1998 (&ldquo;<strong>DMCA</strong>&rdquo;), the text of which is available on the U.S. Copyright Office website at{' '}
              <a href="https://copyright.gov" target="_blank" rel="noopener noreferrer" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">
                http://copyright.gov
              </a>
              , Passr will respond expeditiously to claims of copyright infringement committed using our Services that are reported to Passr&apos;s Designated Copyright Agent, identified below.
            </p>
            <p>
              If you are a copyright owner, or authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, you may report alleged copyright infringement taking place on or through our Services by submitting a DMCA Notice of Alleged Infringement (&ldquo;<strong>Notice</strong>&rdquo;) to our Designated Copyright Agent. Upon receipt of a valid Notice, Passr will take whatever action it deems appropriate in its sole discretion, including removing or disabling access to the challenged material.
            </p>
            
            <h3 className="text-base font-semibold text-foreground pt-2">What to Include in Your DMCA Notice</h3>
            <p>
              To be effective, your Notice must include the following:
            </p>
            <ol className="list-decimal pl-5 space-y-3 marker:text-muted-foreground">
              <li>
                Identification of the copyrighted work you claim has been infringed, or — if multiple works are covered by this Notice — a representative list of the works claimed to have been infringed.
              </li>
              <li>
                Identification of the material you claim is infringing (or is the subject of infringing activity) and that is to be removed or disabled, with information reasonably sufficient to permit us to locate it — at minimum, the URL or specific location on our Services where the material appears.
              </li>
              <li>
                Your mailing address, telephone number, and, if available, email address.
              </li>
              <li>
                The following two statements, included in the body of the Notice:
                <ul className="list-disc pl-5 mt-2 space-y-2 marker:text-muted-foreground italic">
                  <li>
                    &ldquo;I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use).&rdquo;
                  </li>
                  <li>
                    &ldquo;I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed.&rdquo;
                  </li>
                </ul>
              </li>
              <li>
                Your full legal name and your electronic or physical signature.
              </li>
            </ol>

            <h3 className="text-base font-semibold text-foreground pt-2">Where to Send Your Notice</h3>
            <p>
              Deliver your completed Notice to Passr&apos;s Designated Copyright Agent:
            </p>
            <div className="border-l-2 border-foreground/20 pl-4 my-4 bg-muted/10 p-4 rounded-r text-sm space-y-1 text-foreground font-mono">
              <p>Copyright Agent c/o Passr, Inc.</p>
              <p>Attn: Legal Department</p>
              <p>123 Main Street</p>
              <p>Wilmington, DE 19801</p>
              <p className="pt-2 font-sans text-xs">
                Email:{' '}
                <a href="mailto:copyright@passr.com" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">
                  copyright@passr.com
                </a>
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">5. Counter-Notification</h2>
            <p>
              If you believe content you posted or that relates to you was removed or disabled as a result of a mistake or misidentification, you may submit a counter-notification to our Designated Copyright Agent (contact information above) that includes:
            </p>
            <ol className="list-decimal pl-5 space-y-3 marker:text-muted-foreground">
              <li>
                Identification of the material that was removed or disabled, and its location on the Services before removal.
              </li>
              <li>
                A statement, under penalty of perjury, that you have a good faith belief the material was removed or disabled as a result of mistake or misidentification.
              </li>
              <li>
                Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the federal district court for the judicial district in which your address is located (or, if outside the U.S., any judicial district in which Passr may be found), and that you will accept service of process from the person who filed the original Notice or their agent.
              </li>
              <li>
                Your physical or electronic signature.
              </li>
            </ol>
            <p className="pt-2">
              Upon receipt of a valid counter-notification, we may, in our discretion, restore the removed material unless the original complaining party informs us that they have filed a legal action seeking a court order to restrain the alleged infringer from engaging in infringing activity.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">6. Repeat Infringers</h2>
            <p>
              Consistent with the DMCA and other applicable law, Passr maintains a policy of terminating, in appropriate circumstances, the accounts of users who are determined to be repeat infringers.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">7. Contact Us</h2>
            <p>
              Questions about this Copyright Policy? Contact us at{' '}
              <a href="mailto:copyright@passr.com" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">
                copyright@passr.com
              </a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
