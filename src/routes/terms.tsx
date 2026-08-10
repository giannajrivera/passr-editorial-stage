import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Passr" },
      { name: "description", content: "The terms that govern your use of Passr." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-[900px] px-6 pb-32 pt-40 md:px-12 md:pt-48">
        {/* Category Label */}
        <p className="eyebrow text-muted-foreground">Legal</p>
        
        {/* Main Title */}
        <h1 className="font-display mt-8 text-[clamp(2rem,5vw,3.5rem)] leading-[0.98] tracking-[-0.03em]">
          Terms of Service
        </h1>
        
        {/* Content Container */}
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground md:text-base">
          
          <p className="text-xs uppercase tracking-wider font-semibold text-foreground">
            Last Updated: August 10, 2026
          </p>

          <p>
            These Terms of Service (&ldquo;<strong>Terms</strong>&rdquo;) apply to your access to and use of the website located at <span className="text-foreground">passr.com</span> (or any successor links) and all associated web pages and websites (the &ldquo;<strong>Site</strong>&rdquo;) provided by Passr, Inc. (&ldquo;<strong>Passr</strong>,&rdquo; &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>our</strong>,&rdquo; or &ldquo;<strong>us</strong>&rdquo;), our browser extension, our mobile application(s) (each an &ldquo;<strong>App</strong>&rdquo;), and any related online services (including the Site, the extension, and the App, together the &ldquo;<strong>Services</strong>&rdquo;).
          </p>

          {/* Dispute Resolution Warning Banner */}
          <div className="border-l-2 border-foreground/20 pl-4 my-6 text-xs uppercase tracking-wide bg-muted/30 p-4 rounded-r">
            <span className="font-bold text-foreground">SECTION 16 (DISPUTE RESOLUTION AND BINDING ARBITRATION)</span> OF THESE TERMS CONTAINS PROVISIONS GOVERNING HOW CLAIMS THAT YOU AND WE HAVE AGAINST EACH OTHER ARE RESOLVED. BY AGREEING TO THESE TERMS, YOU AND PASSR AGREE TO RESOLVE MOST DISPUTES SOLELY ON AN INDIVIDUAL BASIS AND NOT AS A CLASS ARBITRATION, CLASS ACTION, ANY OTHER KIND OF REPRESENTATIVE PROCEEDING, OR BY JURY TRIAL. IF YOU DO NOT WISH TO ARBITRATE DISPUTES WITH PASSR, YOU MAY OPT OUT OF ARBITRATION BY FOLLOWING THE INSTRUCTIONS PROVIDED IN SECTION 16(j).
          </div>

          <p>
            If you do not agree to these Terms, do not use our Services.
          </p>

          <p>
            We may indicate that different or additional terms, conditions, guidelines, policies, or rules apply in relation to some of our Services (&ldquo;<strong>Supplemental Terms</strong>&rdquo;). Any Supplemental Terms become part of your agreement with us if you use the applicable Services, and if there is a conflict between these Terms and the Supplemental Terms, the Supplemental Terms will control for that conflict.
          </p>

          <p>
            We may make changes to these Terms. The &ldquo;Last Updated&rdquo; date above indicates when these Terms were last changed. If we make future changes, we may provide you with notice of such changes, such as by sending an email, providing a notice through our Services, or updating the date at the top of these Terms. Unless we say otherwise in our notice, the amended Terms will be effective immediately, and your continued use of our Services after we provide such notice will confirm your acceptance of the changes. If you do not agree to the amended Terms, you must immediately stop using our Services.
          </p>

          {/* Section 1 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">1. What Passr Is (and Isn&apos;t)</h2>
            <p>
              Passr is a price comparison and alert tool for tickets to live, in-person events — including concerts, music festivals, sporting events, comedy shows, theater and Broadway performances, conventions (including comic cons and fan expos), and other ticketed experiences (collectively, &ldquo;<strong>Events</strong>&rdquo;). Passr aggregates and compares publicly available and partner-provided listing data across third-party ticketing and resale marketplaces (each, a &ldquo;<strong>Marketplace</strong>&rdquo;) — including primary ticketing platforms and secondary/resale marketplaces — to help you identify pricing, fees, and availability across sources before you buy.
            </p>
            <p>
              <strong>Passr does not sell, issue, hold inventory of, act as a seller or reseller of, or guarantee any ticket.</strong> We are not a party to, and do not broker, any transaction between you and a Marketplace. When you click through from Passr to complete a purchase, that purchase is made entirely on and governed entirely by the Marketplace&apos;s own terms, policies, seller identity, and pricing at the time of purchase — not by Passr.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">2. Eligibility and Use Restrictions</h2>
            <p>
              <strong>(a) Age.</strong> Users under 18 years of age (or the age of legal majority where you live) may not use our Services. If you are a parent or guardian and believe your child under 18 is using our Services without your consent, please contact us at support@passr.com.
            </p>
            <p>
              <strong>(b) Jurisdiction.</strong> You may only use our Services in jurisdictions authorized by Passr. Use of our Services is currently authorized only in the United States.
            </p>
            <p>
              <strong>(c) Personal Use Only.</strong> You may only use our Services for personal, family, or household purposes, expressly excluding any commercial use (including, without limitation, using Passr to source inventory for a resale or brokerage business). You may not share your account or Service access with others.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">3. Your Information</h2>
            <p>
              You may provide certain information to Passr in connection with your access to or use of our Services, or we may otherwise collect information about you when you access or use our Services. You agree to receive emails, push notifications, SMS or text messages, and other communications from Passr via the Services using the contact information you provide or your consent. You represent and warrant that any information you provide to Passr is accurate.
            </p>
            <p>
              For information about how we collect, use, share, and otherwise process information about you, please see our <a href="/privacy-policy" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">Privacy Policy</a>.
            </p>
            <p>
              <strong>(a) Event and Alert Preferences.</strong> If you set up price alerts, follow specific artists, teams, venues, or Events, or otherwise configure tracking preferences, we use that information to power the comparison and notification features of the Services.
            </p>
            <p>
              <strong>(b) Optional Account Integrations.</strong> If Passr offers optional integrations — such as connecting a calendar, email, or a Marketplace account to auto-detect tickets you already hold — you can configure and connect them directly within your personal profile dashboard view.
            </p>
            <p>
              <strong>(c) Disconnection and Deletion.</strong> You may disconnect any optional integration at any time through your account settings. Upon disconnection, associated access credentials and any data derived solely from that integration will be deleted from our systems in accordance with our <a href="/privacy-policy" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">Privacy Policy</a>.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">4. Accounts</h2>
            <p>
              You must create an account with Passr to use some or all of our Services. You may not share or permit others to use your individual account credentials. You will promptly update your account information if it changes. You must use a strong, unique password. You must maintain the security of your account and promptly notify us if you discover or suspect unauthorized access. We reserve the right to reject, require you to change, or reclaim usernames, including on behalf of businesses or individuals holding legal or trademark rights in those usernames.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">5. Alerts, Promotions, and Rewards</h2>
            <p>
              <strong>(a) Price and Availability Alerts.</strong> If you opt in to price alerts or availability notifications, we will do our best to notify you promptly of relevant changes (such as a price drop, new listing, or restock), but we do not guarantee the timeliness, accuracy, or completeness of any alert. Ticket availability and pricing on Marketplaces can change or sell out — including entire allocations selling out — before you are able to act on an alert.
            </p>
            <p>
              <strong>(b) Promotions.</strong> Any sweepstakes, contests, giveaways, referral programs, or similar promotions (&ldquo;<strong>Promotions</strong>&rdquo;) made available through the Services may be governed by rules separate from these Terms. If you participate in a Promotion, please review its applicable rules as well as our Privacy Policy. If Promotion rules conflict with these Terms, the Promotion rules govern for that conflict.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">6. Rights and Enforcement</h2>
            <p>
              <strong>(a) Ownership; Limited License.</strong> The Services, including all text, graphics, images, comparison data presentation, software, and other content contained therein (excluding third-party Marketplace content, see Section 9), and all intellectual property rights therein, are owned by Passr or our licensors and protected under U.S. and foreign law. Except as explicitly stated in these Terms, all rights in and to the Services are reserved by us or our licensors. Subject to your compliance with these Terms, you are granted a limited, nonexclusive, nontransferable, non-sublicensable, revocable license to access and use our Services, including installing and using our extension and App, for your own personal, noncommercial use on a device you own or control. Any other use, without our prior written permission, is strictly prohibited, will terminate this license, and will violate our intellectual property rights. If you fail to comply with these Terms, you must immediately stop using the applicable extension or App and uninstall it from your device.
            </p>
            <p>
              <strong>(b) Prohibited Conduct.</strong> You agree not to: (i) post or transmit content that infringes, misappropriates, or violates a third party&apos;s rights, or that is fraudulent, false, misleading, defamatory, obscene, or promotes discrimination, hatred, harassment, or violence; (ii) scrape, mirror, extract, index, or frame the Services or Passr&apos;s name, trademarks, logos, or listing/pricing data without our express written consent; (iii) access or tamper with non-public areas of the Services or our systems; (iv) probe, scan, or test the vulnerability of any Passr system, or breach any security or authentication measure; (v) circumvent any technological measure implemented to protect the Services; (vi) use bots, spiders, crawlers, or other automated means to access or query the Services beyond normal individual use of the extension or App; (vii) send unsolicited advertising, spam, or solicitation through the Services; (viii) use the Services for any commercial purpose, including automated ticket purchasing, scalping operations, or bulk inventory sourcing; (ix) attempt to decompile, disassemble, or reverse-engineer any Passr software; (x) interfere with the Services&apos; operation, including via viruses, overloading, or flooding; (xi) collect personal information about other users without their express permission; (xii) impersonate any person or entity; (xiii) violate any applicable law, including laws governing automated ticket-buying software (e.g., the U.S. BOTS Act) or state anti-scalping statutes; or (xiv) encourage or enable any other person to do any of the foregoing.
            </p>
            <p>
              <strong>(c) Passr&apos;s Enforcement Rights.</strong> Passr is not obligated to monitor use of the Services but has the right to do so to operate the Services, ensure compliance with these Terms, and comply with applicable law. We may remove or disable access to any content or suspend or terminate accounts at any time and without notice, in our sole discretion, including if we believe conduct is objectionable, fraudulent, or violates these Terms. We may cooperate with law enforcement authorities. You are solely responsible for your interactions with Marketplaces and other users; Passr is not a party to and bears no responsibility for those interactions.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">7. Trademarks</h2>
            <p>
              Passr and our logos, product names, and the look and feel of the Services are trademarks of Passr and may not be copied, imitated, or used without our prior written permission. You agree not to remove, alter, or obscure any copyright, trademark, or proprietary rights notice incorporated in or accompanying the Services. All other trademarks, event names, artist names, team names, league names, and venue names referenced through the Services (including on Event and listing pages) are the property of their respective owners and are used for identification and comparison purposes only. Reference to any Event, team, artist, venue, or Marketplace does not imply endorsement, sponsorship, or affiliation between Passr and that party unless expressly stated.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">8. Feedback</h2>
            <p>
              You may voluntarily submit questions, comments, suggestions, or other information about Passr or our Services (&ldquo;<strong>Feedback</strong>&rdquo;). You understand that we may use Feedback for any purpose, commercial or otherwise, without acknowledgment or compensation to you, including to develop or improve the Services. Passr will exclusively own all improvements to, or new features of, the Services based on any Feedback. We may treat Feedback as nonconfidential.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">9. Third-Party Marketplaces and Your Interactions With Them</h2>
            <p>
              <strong>(a) Facilitation, Not Sale.</strong> Our Services enable you to intentionally interact with one or more Marketplaces to view or purchase tickets. We provide information about, and links to, Marketplace listings (&ldquo;<strong>Third-Party Content</strong>&rdquo;) as a service to you, to facilitate your intentional interaction with those Marketplaces. When you use our Services to interact with a Marketplace, you direct us to disclose relevant data to that Marketplace, which will handle it in accordance with its own privacy policy. Your dealings, transactions, and correspondence with a Marketplace — including payment, delivery, seat assignment, ticket transfer, authenticity, and any dispute — are solely between you and that Marketplace. Passr does not own, issue, hold, deliver, or sell any ticket displayed, offered, or made available through the Services. Passr&apos;s Return &amp; Resale Policy explains how ticket-specific issues (cancellations, refunds, exchanges, resale) are handled — and confirms that Passr does not process or accept those requests directly.
            </p>
            <p>
              <strong>(b) Accuracy of Listing Information.</strong> Listing information on the Services — including price, fees, seat location, availability, and delivery method — is aggregated from Marketplaces and can change quickly or become inaccurate due to factors outside our control (e.g., a listing selling out, a Marketplace updating its price, or a sync delay between Passr and the Marketplace). We do not warrant that pricing, availability, seat/section details, or any other listing information is accurate, complete, current, or error-free at the moment you view or click through it. We reserve the right to correct errors or update information at any time without notice, and all listing information is subject to change without notice. Any offer displayed via our Services is void where prohibited.
            </p>
            <p>
              <strong>(c) No Responsibility for Ticket Authenticity or Validity.</strong> You acknowledge that Passr is a comparison and discovery platform and is not the issuer, primary seller, or reseller of any ticket. Passr is not required to and does not verify that tickets listed by a Marketplace are authentic, valid, correctly priced, accurately described, or compliant with applicable law (including state resale/scalping laws or a venue&apos;s or artist&apos;s ticket transfer policies). You agree to conduct your own due diligence — including reviewing a Marketplace&apos;s buyer guarantee, refund policy, and seller verification practices — before purchasing.
            </p>
            <p>
              <strong>(d) No Obligation to Monitor.</strong> We have no obligation to monitor Third-Party Content and may block, delist, or disable access to any Marketplace or listing through our Services at any time, for any reason, without notice. Your access to and use of Marketplace content may be subject to that Marketplace&apos;s own terms of service and privacy policy, which you are responsible for reviewing.
            </p>
            <p>
              <strong>(e) Affiliate Relationships.</strong> Passr participates in affiliate and referral programs with certain Marketplaces and may earn a commission or other compensation when you complete a purchase through a link surfaced in our Service. This does not affect the price you pay. We aim to rank and surface listings based on price, relevance, and availability to you — not based on which Marketplace pays us the highest commission — but you should know these affiliate relationships exist. As an affiliate partner, we earn commissions from qualifying purchases made through our referral links.
            </p>
          </div>
          
          {/* Section 10 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">10. Automated Features and Alerts</h2>
            <p>
              Some features of the Services use automated processes, algorithms, or machine learning to detect, match, rank, or price-compare listings and to generate alerts based on your preferences and activity (&ldquo;<strong>Automated Features</strong>&rdquo;). Passr does not guarantee that Automated Features will identify every available listing, the lowest available price, or that an alert will be delivered in time for you to act on it. You are responsible for independently verifying pricing and availability on the Marketplace before completing any purchase. By using the Services, you grant Passr a non-exclusive, worldwide, royalty-free license to use and process your preference and activity data to operate, maintain, and improve the Automated Features.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">11. User Content; Copyright Policy</h2>
            <p>
              <strong>(a) Posting Content.</strong> Our Services may allow you to store or share content such as reviews, comments, saved lists, or communications with us (&ldquo;<strong>User Content</strong>&rdquo;). Passr does not claim ownership of your User Content, and nothing in these Terms restricts any rights you may have to it.
            </p>
            <p>
              <strong>(b) License to Your User Content.</strong> By making User Content available through the Services, you grant Passr a non-exclusive, transferable, worldwide, royalty-free license, with the right to sublicense, to use, copy, modify, create derivative works from, distribute, publicly display, and publicly perform your User Content in connection with operating, providing, and promoting the Services.
            </p>
            <p>
              <strong>(c) Your Responsibility.</strong> You are solely responsible for your User Content and represent that you have all rights necessary to grant the license above, and that your User Content does not infringe or violate any third party&apos;s rights or any applicable law.
            </p>
            <p>
              <strong>(d) Removal.</strong> You may remove your User Content by deleting it. Some content may persist in backups or as necessary for record-keeping; to the fullest extent permitted by law, we are not responsible for the failure to remove or delete User Content.
            </p>
            <p>
              <strong>(e) Copyright/DMCA.</strong> Passr respects copyright law and expects users to do the same. Please see our Copyright Policy for information on reporting alleged infringement.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">12. Indemnification</h2>
            <p>
              To the fullest extent permitted by applicable law, you will indemnify, defend, and hold harmless Passr and our officers, directors, agents, partners, and employees (individually and collectively, the &ldquo;<strong>Passr Parties</strong>&rdquo;) from and against any losses, liabilities, claims, demands, damages, expenses, or costs (&ldquo;<strong>Claims</strong>&rdquo;) arising out of or related to: (a) your access to or use of the Services; (b) your Feedback or User Content; (c) any transaction or dispute between you and a Marketplace; (d) your violation of these Terms; (e) your violation, misappropriation, or infringement of any third party&apos;s rights; or (f) your conduct in connection with the Services. You will promptly notify the Passr Parties of any such Claim, cooperate in its defense, and pay associated fees and costs (including attorneys&apos; fees). Passr will control the defense or settlement of any such Claim, at Passr&apos;s sole option.
            </p>
          </div>

          {/* Section 13 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">13. Disclaimers</h2>
            <div className="border-l-2 border-foreground/20 pl-4 my-4 space-y-3 bg-muted/10 p-4 rounded-r text-xs tracking-wide">
              <p className="font-semibold text-foreground uppercase">
                (a) YOUR USE OF OUR SERVICES AND ANY CONTENT PROVIDED THEREIN (INCLUDING THIRD-PARTY CONTENT) IS AT YOUR SOLE RISK. EXCEPT AS OTHERWISE PROVIDED IN WRITING BY US AND TO THE FULLEST EXTENT PERMITTED BY LAW, OUR SERVICES AND ANY CONTENT PROVIDED THEREIN ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT REPRESENT OR WARRANT THAT PRICING, AVAILABILITY, OR OTHER LISTING INFORMATION DISPLAYED THROUGH THE SERVICES IS ACCURATE, COMPLETE, RELIABLE, CURRENT, OR ERROR-FREE, OR THAT ACCESS TO THE SERVICES WILL BE UNINTERRUPTED.
              </p>
              <p className="font-semibold text-foreground uppercase">
                (b) PASSR IS NOT THE ISSUER, ORIGINAL SELLER, OR RESELLER OF ANY TICKET AND EXPRESSLY DISCLAIMS ANY LIABILITY FOR TICKET AUTHENTICITY, VALIDITY, DELIVERY, PRICING ACCURACY, EVENT CANCELLATION OR RESCHEDULING, OR ANY DEFECT OR HARM ARISING FROM A TICKET PURCHASED THROUGH A MARKETPLACE. ANY CLAIM RELATED TO A TICKET&apos;S AUTHENTICITY, VALIDITY, OR DELIVERY MUST BE DIRECTED TO THE APPLICABLE MARKETPLACE OR SELLER.
              </p>
            </div>
            <p>
              <strong>(c)</strong> All disclaimers in this section are made for the benefit of Passr, the Passr Parties, and our respective licensors, suppliers, and service providers, as well as their successors and assigns.
            </p>
          </div>
          {/* Section 14 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">
              14. Limitation of Liability
            </h2>
            <div className="border-l-2 border-foreground/20 pl-4 my-4 space-y-3 bg-muted/10 p-4 rounded-r text-xs tracking-wide">
              <p className="font-semibold text-foreground uppercase">
                (a) TO THE FULLEST EXTENT PERMITTED BY LAW, PASSR AND THE PASSR PARTIES WILL NOT BE LIABLE TO YOU UNDER ANY THEORY OF LIABILITY — WHETHER CONTRACT, TORT, NEGLIGENCE, WARRANTY, OR OTHERWISE — FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, PUNITIVE, OR SPECIAL DAMAGES, OR LOST PROFITS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="font-semibold text-foreground uppercase">
                (b) THE TOTAL LIABILITY OF PASSR AND THE PASSR PARTIES FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES IS LIMITED TO THE GREATER OF $100 USD OR THE AMOUNT YOU PAID PASSR (IF ANY) IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </div>
            <p>
              <strong>(c)</strong> These limitations will not limit or exclude liability for gross negligence, fraud, or intentional misconduct, or for any matter in which liability cannot be excluded under applicable law. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above may not apply to you.
            </p>
          </div>

          {/* Section 15 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">15. Release</h2>
            <p>
              To the fullest extent permitted by law, you release Passr and the Passr Parties from responsibility, liability, and claims of every kind, known and unknown, arising out of or related to disputes between you and a Marketplace, or the acts or omissions of any Marketplace or other third party. If you are a California consumer, you waive your rights under California Civil Code &sect; 1542, which provides that a general release does not extend to claims a party does not know or suspect to exist in their favor at the time of signing, which if known would have materially affected their settlement.
            </p>
          </div>

          {/* Section 16 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">16. Dispute Resolution and Binding Arbitration</h2>
            <div className="border-l-2 border-foreground/20 pl-4 my-4 bg-muted/10 p-4 rounded-r text-xs tracking-wide font-semibold text-foreground uppercase">
              PLEASE READ THIS SECTION CAREFULLY. IT REQUIRES YOU AND PASSR TO ARBITRATE CERTAIN DISPUTES AND LIMITS THE MANNER IN WHICH YOU AND PASSR CAN SEEK RELIEF FROM EACH OTHER. ARBITRATION PRECLUDES YOU AND PASSR FROM SUING IN COURT OR HAVING A JURY TRIAL. YOU AND PASSR AGREE THAT ARBITRATION WILL BE SOLELY ON AN INDIVIDUAL BASIS AND NOT AS A CLASS ARBITRATION, CLASS ACTION, OR OTHER REPRESENTATIVE PROCEEDING.
            </div>
            <p>
              <strong>(a) Claims Covered.</strong> This Section applies to all disputes between you and Passr arising from or relating to these Terms or the Services (a &ldquo;<strong>Claim</strong>&rdquo;), except as excluded in Section 16(c).
            </p>
            <p>
              <strong>(b) Informal Resolution First.</strong> Before filing an arbitration, you and Passr agree to try, in good faith, to resolve any Claim informally for 45 days after written notice is sent. Notices to Passr should be sent to <span className="text-foreground">legal@passr.com</span>. The notice must include your name, address, email, phone number, a description of the Claim and the relief sought, and your personal signature.
            </p>
            <p>
              <strong>(c) Exceptions.</strong> Small claims court actions (that do not permit class relief) and disputes exclusively involving intellectual property rights are not subject to arbitration.
            </p>
            <p>
              <strong>(d) Binding Individual Arbitration.</strong> Claims not resolved informally will be resolved by binding individual arbitration administered by the American Arbitration Association (&ldquo;<strong>AAA</strong>&rdquo;) under its Consumer Arbitration Rules (or Commercial Rules if you are not an individual consumer), in accordance with the Federal Arbitration Act.
            </p>
            <p>
              <strong>(e) Procedure and Location.</strong> Arbitration will be conducted by a single arbitrator in English. For Claims under $10,000, the arbitrator will decide based on written submissions unless a hearing is deemed necessary. Larger Claims may proceed by video, phone, or, if necessary, in person, per AAA Rules.
            </p>
            <p>
              <strong>(f) Fees.</strong> Each party is responsible for arbitration fees per the applicable AAA rules and these Terms, except as AAA rules or law otherwise require Passr to bear a greater share for consumer claims.
            </p>
            <p>
              <strong>(g) Frivolous Claims.</strong> A claimant who brings a Claim found by the arbitrator to be frivolous or filed for an improper purpose may be required to pay the defending party&apos;s costs and fees.
            </p>
            <p>
              <strong>(h) Confidentiality.</strong> The parties will cooperate to seek arbitrator protection for confidential or proprietary information exchanged during arbitration.
            </p>
            <p>
              <strong>(i) Injunctive/Public Relief.</strong> The arbitrator may award relief only to the individual party seeking it and only to the extent necessary for that party&apos;s individual claim. Claims for public injunctive relief must be litigated in court and are stayed pending resolution of individual arbitration claims.
            </p>
            <p>
              <strong>(j) Opting Out.</strong> You may opt out of this arbitration section within 30 days of first accepting these Terms by emailing <span className="text-foreground">legal@passr.com</span> with your full name, address, email, and a clear statement that you wish to opt out of arbitration.
            </p>
            <p>
              <strong>(k) Rejecting Future Changes.</strong> You may reject any future change to this Section 16 (except changes to the notice address) by emailing <span className="text-foreground">legal@passr.com</span> within 30 days of the change, with your full name, address, and email, and a clear statement of rejection.
            </p>
            <div className="border-l-2 border-foreground/20 pl-4 my-4 bg-muted/10 p-4 rounded-r text-xs tracking-wide font-semibold text-foreground uppercase">
              (l) Class Action Waiver. YOU AND PASSR AGREE THAT EACH MAY BRING CLAIMS ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS PART OF ANY CLASS OR REPRESENTATIVE PROCEEDING. If this waiver is found unenforceable, the entirety of this Section 16 is null and void.
            </div>
            <p>
              <strong>(m) Severability.</strong> Other than Section 16(l), if any part of this Section is found invalid or unenforceable, the remaining parts still apply.
            </p>
          </div>

          {/* Section 17 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">17. Governing Law and Venue</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, without regard to conflict-of-law principles. For any dispute not subject to arbitration under Section 16, the state and federal courts located in Wilmington, Delaware will have exclusive jurisdiction, and you waive any objection to venue there.
            </p>
          </div>
          
          {/* Section 18 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">18. Modifying and Terminating Our Services</h2>
            <p>
              We may modify the Services, or suspend or discontinue all or part of them, at any time. We may provide advance notice of significant changes, such as by email or in-app notice. All modifications are governed by these Terms unless we state otherwise in writing. You may stop using the Services at any time; doing so terminates these Terms as to you. We are not responsible for any loss related to your inability to access the Services.
            </p>
          </div>

          {/* Section 19 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">19. Severability</h2>
            <p>
              If any part of these Terms (other than Section 16) is found unenforceable or unlawful, that provision will be severed without affecting the enforceability of the remaining Terms, and will be revised to the extent required to make it enforceable while preserving the parties&apos; intent.
            </p>
          </div>

          {/* Section 20 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">20. Export Control</h2>
            <p>
              You are responsible for complying with U.S. export control laws. You represent that you are not located in, or a resident or national of, any country subject to a U.S. government embargo, and that you are not on any U.S. government restricted-party list.
            </p>
          </div>

                    {/* Section 21 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">21. Miscellaneous</h2>
            <p>
              Our failure to enforce any right or provision will not be a waiver of that right. These Terms are the entire agreement between you and Passr regarding the Services and supersede all prior agreements. Section headings are for convenience only. &ldquo;Including&rdquo; means &ldquo;including without limitation.&rdquo; These Terms confer no third-party beneficiary rights except as stated in Section 22. Communications between us may be conducted electronically.
            </p>
            <p className="pt-2">
              <strong>Questions or complaints:</strong> Please reach out to our team at <a href="mailto:support@passr.com" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">support@passr.com</a>.
            </p>
          </div>

          {/* Section 22 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">22. Additional Terms for Mobile Devices</h2>
            <p>
              <strong>(a) iOS.</strong> If you access the Services via our iOS App, you acknowledge these Terms are between you and Passr, not Apple Inc. (&ldquo;<strong>Apple</strong>&rdquo;). Apple is not responsible for the App or its content. Usage is subject to Apple&apos;s App Store Terms of Service, which govern in the event of conflict where more restrictive.
            </p>
            <p>
              <strong>(b) Android.</strong> If you access the Services via our Android App, similar terms apply with respect to Google LLC and the Google Play Store&apos;s applicable terms.
            </p>
            <p>
              <strong>(c) Scope of License.</strong> Your license to use a mobile App is limited to a device you own or control, as permitted by the applicable app store&apos;s usage rules.
            </p>
            <p>
              <strong>(d) No Maintenance Obligation by Platform.</strong> Apple and Google have no obligation to provide maintenance or support for the App.
            </p>
            <p>
              <strong>(e) Warranty.</strong> Any applicable App warranty claims are the sole responsibility of Passr, not Apple or Google, to the extent required by law.
            </p>
            <p>
              <strong>(f) Product and IP Claims.</strong> Passr, not Apple or Google, is responsible for addressing claims relating to the App, including product liability, legal/regulatory compliance claims, consumer protection claims, and third-party intellectual property infringement claims to the extent required under these Terms.
            </p>
            <p>
              <strong>(g) Push Notifications.</strong> If enabled, you may receive push notifications from Passr. Message and data rates from your carrier may apply.
            </p>
            <p>
              <strong>(h) Third-Party Beneficiary.</strong> Apple, Google, and their subsidiaries are third-party beneficiaries of this Section 22 and may enforce it against you.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

