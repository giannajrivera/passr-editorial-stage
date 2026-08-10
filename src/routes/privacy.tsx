import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Passr" },
      { name: "description", content: "How Passr collects, uses, and protects your data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-[900px] px-6 pb-32 pt-40 md:px-12 md:pt-48">
        {/* Top Category Label */}
        <p className="eyebrow text-muted-foreground">Legal</p>
        
        {/* Main Title */}
        <h1 className="font-display mt-8 text-[clamp(2rem,5vw,3.5rem)] leading-[0.98] tracking-[-0.03em]">
          Privacy Policy
        </h1>
        
        {/* Content Container */}
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground md:text-base">
          
          <p className="text-xs uppercase tracking-wider font-semibold text-foreground">
            Last Updated: August 10, 2026
          </p>

          <p>
            This Privacy Policy describes how Passr, Inc. (&ldquo;<strong>Passr</strong>,&rdquo; &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>our</strong>,&rdquo; or &ldquo;<strong>us</strong>&rdquo;) collects, uses, discloses, and otherwise processes information about you. This Privacy Policy applies to information we collect when you access or use our website, browser extension, mobile application(s), and other online products and services that link to this Privacy Policy (collectively, our &ldquo;<strong>Services</strong>&rdquo;), and when you otherwise interact with us, such as through customer support or social media. We may provide different or additional privacy notices for certain offerings, in which case those notices supplement or replace the disclosures below.
          </p>

          <p>
            We may change this Privacy Policy from time to time. If we do, we will update the &ldquo;Last Updated&rdquo; date above. If we make material changes, we may provide additional notice (such as an in-app notification or email). We encourage you to review this Privacy Policy periodically.
          </p>

          {/* Section 1 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">1. Collection of Information</h2>
            <p>
              The information we collect about you depends on how you interact with us.
            </p>
            
            <h3 className="text-base font-semibold text-foreground pt-2">Information You Provide to Us</h3>
            <p>
              We collect information you provide directly, such as when you create an account, fill out a form, contact customer support, sign up for alerts or marketing communications, or otherwise communicate with us. This may include your name, email address, phone number, username, password, and any preferences you set, such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-muted-foreground">
              <li>Artists, teams, leagues, venues, or Events you follow</li>
              <li>Price alert thresholds and notification preferences</li>
              <li>General location or city, used to surface nearby Events</li>
              <li>Contents of communications you submit to us (e.g., support tickets, feedback)</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground pt-4">Information We Collect Automatically</h3>
            <ul className="list-disc pl-5 space-y-3 marker:text-muted-foreground">
              <li>
                <strong className="text-foreground">Device, Usage, and Activity Information.</strong> We collect information about how you access our Services, including your device and network (hardware model, operating system, browser type and version, mobile network, IP address, unique device identifiers). We also collect activity information such as pages, listings, and Event pages you view; links you click; search terms; and, where the browser extension is active, the ticketing/Marketplace pages you visit so we can perform price comparisons and surface relevant alerts on your behalf.
              </li>
              <li>
                <strong className="text-foreground">Cookies and Similar Tracking Technologies.</strong> We use cookies, pixels, SDKs, and local storage to remember your preferences, keep you logged in, and understand aggregate usage of the Services. See Section 3 and Section 5 below for more detail and your choices.
              </li>
              <li>
                <strong className="text-foreground">Approximate and Precise Location.</strong> We may derive your approximate location from your IP address to show relevant nearby Events. If you separately grant permission (e.g., through your device or browser), we may also collect precise location for the same purpose. You can withdraw this permission at any time through your device or browser settings.
              </li>
            </ul>

            <h3 className="text-base font-semibold text-foreground pt-4">Information We Collect From Other Sources</h3>
            <ul className="list-disc pl-5 space-y-3 marker:text-muted-foreground">
              <li>
                If you create or log into your Passr account through a third-party platform (such as Apple or Google), we receive certain information from that platform, such as your name, email address, language preference, and profile picture, consistent with that platform&apos;s authorization procedures.
              </li>
              <li>
                <strong className="text-foreground">From Marketplaces.</strong> When you click through from Passr to complete a purchase on a Marketplace, that Marketplace may share limited transaction confirmation data with us — such as whether a purchase occurred and the value of that purchase — for purposes of tracking affiliate/referral commissions. We do not receive your full payment card details, government ID, or other sensitive checkout information from Marketplaces.
              </li>
            </ul>

            <h3 className="text-base font-semibold text-foreground pt-4">Information We Derive</h3>
            <p>
              We may draw inferences from the information we collect — for example, inferring which artists, teams, or types of Events you&apos;re likely interested in based on your browsing and alert activity, in order to improve relevance of comparisons and notifications.
            </p>
            <p>
              <strong className="text-foreground">What We Do Not Do.</strong> Passr does not engage in cookie-stuffing. We do not misattribute affiliate credit for purchases you did not make through us. We do not sell your personal information to data brokers.
            </p>
          </div>


                    {/* Section 2 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">2. Use of Information</h2>
            <p>
              We use the information described above to:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-muted-foreground">
              <li>Operate the Services, including matching and comparing listings across Marketplaces and generating price/availability alerts</li>
              <li>Maintain your account and preferences</li>
              <li>Personalize your experience, including which Events, artists, or listings we surface to you</li>
              <li>Send you technical notices, security alerts, support messages, and other transactional or relationship communications</li>
              <li>Send you marketing communications (see Section 5 for opt-out instructions)</li>
              <li>Monitor and analyze trends, usage, and activity to improve the Services</li>
              <li>Target and measure advertising on third-party platforms (see Section 3)</li>
              <li>Facilitate Promotions and process any associated entries or rewards</li>
              <li>Detect, investigate, respond to, and help prevent fraud, abuse, bot activity, or other activity that violates our Terms of Service or applicable law</li>
              <li>Track and pay out affiliate commissions owed to us by Marketplaces</li>
              <li>Comply with our legal and financial obligations</li>
              <li>Carry out any other purpose disclosed to you at the time information was collected</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">3. Targeted Advertising and Analytics</h2>
            <p>
              We may engage third parties to provide analytics services, serve advertisements, and perform related services on our behalf and across the web and mobile apps. These partners may use cookies, pixels, SDKs, device identifiers, and similar technologies to collect information about your use of our Services and other sites/apps, including IP address, browser and device information, pages viewed, time spent, links clicked, and conversion information. This is used to deliver advertising targeted to you on other companies&apos; sites or apps, measure ad effectiveness, and better understand usage of our Services.
            </p>
            <p>
              You can learn more about interest-based advertising, or opt out of having your browsing information used for behavioral advertising by companies participating in the Digital Advertising Alliance, at <a href="https://aboutads.info" target="_blank" rel="noopener noreferrer" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">www.aboutads.info/choices</a>. Your device may also include settings that let you limit ad tracking.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">4. Disclosure of Information</h2>
            <p>
              We disclose personal information in the following ways:
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-muted-foreground">
              <li>
                <strong className="text-foreground">Vendors and Service Providers.</strong> Companies that perform services on our behalf, such as web hosting, fraud prevention, customer support tools, analytics, and marketing platforms, under agreements that limit their use of your data to providing services to us.
              </li>
              <li>
                <strong className="text-foreground">Marketplaces You Choose to Interact With.</strong> When you click through to complete a purchase, we may share limited data with the Marketplace necessary to facilitate the referral/affiliate relationship. We do not share your full account profile with a Marketplace unless you choose to transact with them directly (at which point their own privacy policy governs the information you provide to them).
              </li>
              <li>
                <strong className="text-foreground">Law Enforcement and Legal Proceedings.</strong> We may disclose information in response to lawful requests by public authorities, subpoenas, or where required by law.
              </li>
              <li>
                <strong className="text-foreground">To Protect Rights.</strong> We may disclose information if we believe it&apos;s necessary to investigate or prevent violations of our Terms, protect the rights, property, or safety of Passr, our users, or the public, or address fraud or security issues (including bot-driven ticket-buying activity).
              </li>
              <li>
                <strong className="text-foreground">Professional Advisors.</strong> We may disclose information to our legal, financial, insurance, and other professional advisors where necessary to obtain advice or manage our business.
              </li>
              <li>
                <strong className="text-foreground">Corporate Transactions.</strong> We may disclose information in connection with a merger, acquisition, financing, or sale of company assets.
              </li>
              <li>
                <strong className="text-foreground">With Your Consent.</strong> We share information with third parties when you direct us to or otherwise provide consent.
              </li>
            </ul>
            <p className="pt-2">
              We also use and disclose aggregated or de-identified information that cannot reasonably be used to identify you (for example, aggregate trends in ticket pricing across Marketplaces).
            </p>
          </div>

                    {/* Section 5 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">5. Your Choices and Rights</h2>
            
            <p>
              <strong className="text-foreground">Account Information.</strong> You can access, correct, or delete certain information in your Passr account at any time by logging in and visiting your account settings.
            </p>
            
            <p>
              <strong className="text-foreground">Cookies and Tracking Technologies.</strong> You can adjust your browser settings to remove or reject cookies, and manage extension permissions through your browser&apos;s extension settings. Disabling certain technologies may limit some functionality, such as saved alerts or personalized comparisons.
            </p>
            
            <p>
              <strong className="text-foreground">Marketing Communications.</strong> You may opt out of marketing emails at any time by clicking &ldquo;unsubscribe&rdquo; in any such email, or adjusting your notification preferences in your account settings.
            </p>
            
            <p>
              <strong className="text-foreground">Text/SMS Opt-Out.</strong> If you receive text messages from us, reply STOP, QUIT, CANCEL, OPT-OUT, or UNSUBSCRIBE, or follow any other opt-out instructions provided. If you consent to receive marketing texts from us, we will not permit third parties to rely on that consent to text you for marketing purposes, unless they are texting on our behalf, you separately authorized them, or it is otherwise permitted by law.
            </p>
            
            <p>
              <strong className="text-foreground">Location.</strong> You may withdraw permission for precise location collection at any time through your device or browser settings.
            </p>
            
            <p>
              <strong className="text-foreground">Links to Marketplaces and Other Third-Party Sites.</strong> Our Services link to Marketplaces and other third-party sites we do not control (&ldquo;<strong>Third-Party Sites</strong>&rdquo;). We are not responsible for the content, functionality, or privacy practices of Third-Party Sites. Any information you provide directly to a Third-Party Site is governed by that site&apos;s own privacy policy, not this one. Review the applicable privacy policy before interacting with a Third-Party Site.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">6. Data Retention</h2>
            <p>
              We retain your information for as long as your account is active, or as needed to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your account and associated data at any time by contacting us (Section 12) or using in-app account deletion tools, if available.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">7. Data Security</h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards designed to protect your information, including encryption and access controls where appropriate. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">8. Children&apos;s Privacy</h2>
            <p>
              Passr is not directed to children under 13 (or the relevant minimum age in your jurisdiction), and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us at <a href="mailto:privacy@passr.com" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">privacy@passr.com</a> and we will take steps to delete it.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">9. International Users</h2>
            <p>
              If you access Passr from outside the country where our servers are located, your information may be transferred to, stored, and processed in that country, which may have different data protection laws than your home jurisdiction. By using Passr, you consent to this transfer, subject to applicable law.
            </p>
          </div>


                    {/* Section 10 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">
              10. Information We Receive From Third-Party Sign-In Providers
            </h2>
            <p>
              If you sign in to Passr using Google or Apple, this section describes our related practices. To the extent we receive information from Google that is subject to the Google API Services User Data Policy, our use of that information adheres to that policy, including its Limited Use requirements. When you authenticating using these platforms, we access your basic profile identity markers (such as your verified email address and account nickname) to securely create and authorize your account profile session.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">
              11. State and Regional Privacy Rights
            </h2>
            <p>
              Depending on where you live, you may have additional rights regarding your personal information, including the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-muted-foreground">
              <li>Know/access the categories and specific pieces of personal information we hold about you</li>
              <li>Request correction of inaccurate personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information, or of targeted advertising (as those terms are defined under applicable law)</li>
              <li>Limit the use of sensitive personal information</li>
              <li>Appeal a denial of a rights request</li>
              <li>Not receive discriminatory treatment for exercising your rights</li>
            </ul>
            <p className="pt-2">
              Residents of California, Virginia, Colorado, Connecticut, Utah, and other states with comprehensive privacy laws, as well as residents of the EU/EEA and UK (under GDPR), may exercise applicable rights by contacting us using the information in Section 12. We will verify your request and respond within the timeframe required by applicable law. We respect browser privacy flags and evaluate localized optimization switches (such as Global Privacy Control signals) sent across our network requests.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">
              12. Contact Us
            </h2>
            <p>
              Questions about this Privacy Policy or your privacy rights? Contact us at{' '}
              <a href="mailto:privacy@passr.com" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">
                privacy@passr.com
              </a>
              , or write to us at our mailing address: Passr, Inc., Attn: Legal Department, 123 Main Street, Wilmington, DE 19801.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
