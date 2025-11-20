import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils";
import styles from "./CaseStudy.module.css";

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const caseStudies = {
    "reqtify": {
  title: "Reqtify",
  imageSrc: "portfolio/Spotify.png",
  description: "UX Case Study: ReqTify - Optimizing Content Availability on Spotify This project was executed as part of the Startup Campus UI/UX Design 2025 program.",
  demo: "https://www.figma.com/board/QMwPmcta4QEIcOhLQMol7V/Spotify-Research---Team-1?node-id=0-1&t=9l5QqLpsoWVQurpV-1",
  source: "https://www.figma.com/design/CKFhVcvDKB5PxwtMAn3Aea/Team-1---Prototype?node-id=0-1&t=k9KKeZfPhl5oNao3-1",
  caseStudyTitle: "ReqTify: Optimizing Content Availability on Spotify",
  caseStudySubtitle: "A UX Case Study on Reducing Listening Disruption Through Smart Notifications and Alternative Recommendations",
  content: (
    <div className={styles.caseStudyContent}>
      {/* 1. Problem We Wanted to Solve */}
      <section className={styles.section}>
        <h2>1. Problem We Wanted to Solve</h2>
        <div className={styles.imageWithCaption}>
          <p className={styles.caption}>
            <a href="https://www.figma.com/board/QMwPmcta4QEIcOhLQMol7V/Spotify-Research---Team-1?node-id=1-2&t=9l5QqLpsoWVQurpV-1" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
              See detail here → UX Research
            </a>
          </p>
        </div>
        <p>The fundamental issue we sought to address was the <strong>disrupted listening experience caused by content friction and availability gaps</strong> on the Spotify platform. Through extensive UX research, we confirmed that a major pain point for users was the unpredictable disappearance of songs from their personal playlists—often referred to as "greyed out" songs—due to external factors such as licensing limitations or slow content distribution.</p>
        
        <h3>The consequences of this problem were significant:</h3>
        <ul>
          <li><strong>Interrupted Flow:</strong> Users' moments of enjoyment, such as listening while studying, commuting (KRL), or relaxing were suddenly cut short.</li>
          <li><strong>Lack of Transparency:</strong> Users were left confused about why the song was unavailable.</li>
          <li><strong>Time Consumption:</strong> Users were forced to manually search for replacement songs, which was a time-consuming and frustrating task.</li>
        </ul>
        
        <p>If left unsolved, this friction could decrease user comfort and potentially motivate users to seek alternative streaming platforms. We focused on answering the question: <strong>How can we ensure the application experience remains optimal despite potential technical or content barriers?</strong></p>
      </section>

      {/* 2. My Role & Team Composition */}
      <section className={styles.section}>
        <h2>2. My Role & Team Composition</h2>
        <div className={styles.imageWithCaption}>
          <img
            src={getImageUrl("casestudy/reqtify-team.JPG")}
            alt="Team 1 structure and collaboration process"
            className={styles.contentImage}
          />
        </div>
        <p>This project was conducted by <strong>Team 1</strong> as part of the Startup Campus UI/UX Design 2025 program. The team composition included four members: <strong>Sabrina Natasya Bilbina (Group Chair/Researcher)</strong>, Emir Abdillah Aziz (Researcher), Joe Fadlan Wahid (Researcher), and Muhammad Ryan Diaz Novando (Researcher).</p>

        <h3>My key responsibilities:</h3>
        <ul>
          <li>Leading methodology selection (In-Depth Interview, Secondary Research, Survey)</li>
          <li>Conducting In-Depth Interviews with 5 users</li>
          <li>Analyzing data via Affinity Diagram and Empathy Maps</li>
          <li>Defining the core problem statement</li>
          <li>Prioritizing solutions using the HMW method</li>
          <li>Facilitating Usability Testing of the final prototype</li>
        </ul>
        
        <p><strong>Award Recognition:</strong> Awarded "Best Task" in the UX Research for All challenge, scoring 91/100 for Ideation and 94.25/100 for UX Research.</p>
      </section>

      {/* 3. What Made the Problem Interesting & Challenging */}
      <section className={styles.section}>
        <h2>3. What Made the Problem Interesting & Challenging</h2>
        <p>The challenge was inherently interesting because it required <strong>balancing user emotional needs</strong> (loyalty to curated playlists, desire for uninterrupted access) with <strong>complex business constraints</strong> (external music licensing and distribution agreements).</p>

        <h3>3.1. What were the options</h3>
        <p>During the Ideation phase, several opportunities were mapped based on user pain points:</p>
        <ul>
          <li><strong>Transparency and Recovery:</strong> Implement a feature that provides clear, transparent information when a song is unavailable, along with an option to find an immediate replacement. (This became the focus: ReqTify)</li>
          <li><strong>Proactive Management:</strong> Implement a "Playlist Checker" that alerts users if a song is going to be removed due to licensing issues.</li>
          <li><strong>Content Expansion (High Effort):</strong> Develop advanced technology like an AI system to auto-generate lyrics or translations for tracks that lack official lyrics.</li>
          <li><strong>Loyalty Incentives (Business Model):</strong> Introduce early access to new songs for Premium users or create interactive ad rewards for Free users to tolerate frequent advertisements.</li>
        </ul>

        <h3>3.2. What were the constraints you were forced to balance</h3>
        <ul>
          <li><strong>Content Control:</strong> We could not solve the root problem of licensing limitations. The solution had to focus on managing the consequences of this limitation effectively.</li>
          <li><strong>Experience Across Tiers (Business Model):</strong> Our research showed that the majority of Indonesian users are on the Free plan (61% globally vs. 39% Premium). The solution needed to enhance the core experience for all users without undermining the value proposition of the Premium tier.</li>
          <li><strong>UI Clutter:</strong> Spotify's interface, which integrates music and podcasts, is already perceived by some users as "cluttered". The new feature needed to integrate seamlessly without adding complexity to the navigation.</li>
        </ul>
      </section>

      {/* 4. Why Other Ideas Didn't Work */}
      <section className={styles.section}>
        <h2>4. Why Other Ideas Didn't Work</h2>
        <p>Instead of tackling high-effort structural challenges like negotiating faster content distribution or implementing HiFi audio (a high user desire), we focused on a solution categorized as <strong>High Value, Low Effort</strong>.</p>
        
        <p>For instance, addressing AI-generated lyrics or lossless audio would require immense resources (High Effort) and technological infrastructure, delaying the delivery of immediate user relief. Our chosen solution, ReqTify, was a simpler flow (a notification and recommendation tool) that provided immediate high value by reducing friction when users were already frustrated.</p>
      </section>

      {/* 5. Why ReqTify Worked: Our UX-Driven Solution */}
      <section className={styles.section}>
        <h2>5. Why ReqTify Worked: Our UX-Driven Solution</h2>
        <div className={styles.imageWithCaption}>
          <p className={styles.caption}>
            <a href="https://www.figma.com/design/CKFhVcvDKB5PxwtMAn3Aea/Team-1---Prototype?node-id=0-1&t=k9KKeZfPhl5oNao3-1" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
              See detail here → UI Design & Prototype
            </a>
          </p>
        </div>
        <p>We chose the feature <strong>ReqTify (Notification of unavailable songs and recommendation of alternatives)</strong> because it offered the most targeted solution to a highly critical pain point (losing favorite songs in playlists), optimizing the user journey efficiently.</p>

        <h3>✅ Direct Pain Relief:</h3>
        <ul>
          <li>It provided a solution where users previously had none, restoring a sense of control over their personalized content.</li>
        </ul>

        <h3>✅ UX Efficiency:</h3>
        <ul>
          <li>The feature eliminated the need for manual searching by immediately offering relevant, similar songs that the user could preview and add to their playlist.</li>
        </ul>

        <h3>✅ Business Case (Loyalty):</h3>
        <ul>
          <li>By proactively solving technical frustrations, the feature increased user satisfaction, reinforcing loyalty to Spotify as the "companion" platform, and reducing the risk of users seeking competitors.</li>
        </ul>
      </section>

      {/* 6. Results & Validation */}
      <section className={styles.section}>
        <h2>6. Results & Validation</h2>
        <p>The solution was tested via <strong>Remote Usability Testing with four respondents</strong>. The target success score for usability (SEQ scale 1-7) was 5.5 or higher.</p>

        <h3>Success Metrics (Measurable Outcomes):</h3>
        <div className={styles.metricsTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Feature Tested</th>
                <th>Metric (Average Score 1–7)</th>
                <th>Status</th>
                <th>Supporting Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ease of Understanding (Notification)</td>
                <td>6.625</td>
                <td>Sudah OK! (Met Goal)</td>
                <td>The feature flow was generally perceived as clear</td>
              </tr>
              <tr>
                <td>Ease of Understanding (Recommendation Page)</td>
                <td>6.625</td>
                <td>Sudah OK! (Met Goal)</td>
                <td>Steps for replacing the song were rated as clear and easy to follow</td>
              </tr>
              <tr>
                <td>User Acceptance</td>
                <td>100%</td>
                <td>High Success</td>
                <td>All four respondents expressed strong desire to use the feature</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Failure/Improvement Metrics:</h3>
        <p>Although the overall SEQ scores were high, the testing successfully identified crucial friction points that require iteration:</p>
        <ul>
          <li><strong>Ambiguous Wording:</strong> The use of the generic "oke" button in the notification was confusing; users suggested removing it entirely as the 'X' button already provided closure.</li>
          <li><strong>Interrupted Flow:</strong> The transition to a new page to view recommendations disrupted the user flow. Users overwhelmingly suggested changing this to an overlay or pop-up from the bottom for a more practical and seamless experience, especially on mobile.</li>
          <li><strong>Recommendation Range:</strong> Users requested that the recommendation list include songs from lesser-known artists within the same genre to increase variety.</li>
        </ul>
      </section>

      {/* 7. Limitations & Future Plans */}
      <section className={styles.section}>
        <h2>7. Limitations & Future Plans</h2>
        <p>The primary limitation of ReqTify is its <strong>reactive nature</strong>; it is a mitigation strategy, not a prevention strategy. It manages the frustration after the song is gone, rather than solving the systemic issues of licensing and slow content release.</p>

        <h3>🛠️ What We'd Improve with More Time & Resources:</h3>
        <p>If granted infinite time and resources, the team would focus on high-effort, high-impact changes identified during the research:</p>
        
        <h4>Premium Audio Quality Overhaul:</h4>
        <ul>
          <li>Fulfill the widespread user expectation for lossless audio/HiFi and improved resolution for music videos and podcasts.</li>
        </ul>

        <h4>Advanced Search & Content Generation:</h4>
        <ul>
          <li>Implement highly requested features such as "hum to search" (searching by melody) and utilize AI to generate accurate, real-time lyrics and translations for the currently unsupported catalog.</li>
        </ul>

        <h4>Deep Loyalty & Monetization Integration:</h4>
        <ul>
          <li>Develop exclusive Premium features to strengthen loyalty, such as Early Access to new releases from favorite artists.</li>
          <li>Introduce systems for interactive advertising in the Free tier, rewarding users (e.g., 30 minutes ad-free for watching a specific ad) to make the high ad volume more tolerable and thus retain Free users while maintaining monetization.</li>
        </ul>

        <h4>Social/Community Features:</h4>
        <ul>
          <li>Implement a comment section on songs, a feature frequently requested by users, to foster a sense of community and deeper engagement.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className={styles.conclusion}>
        <h2>💬 Why It Matters</h2>
        <p>
          <strong>ReqTify isn't just a feature—it's a commitment to user-centric design in the face of technical limitations.</strong> 
          By addressing the emotional impact of disrupted listening experiences with thoughtful notifications and intelligent recommendations, 
          we transform moments of frustration into opportunities for discovery and maintain Spotify's position as the go-to music companion for millions of users.
        </p>
      </section>
    </div>
  )
},
    "beauty-preneur": {
      title: "Beauty Preneur",
      imageSrc: "portfolio/beautypreneur.png",
      description: "Empowering Underserved Women Through UX: Case Study of BeautyPreneur - Exploring how we designed a user-focused platform to support Indonesian women in rural areas to access beauty education and build sustainable microenterprises.",
      demo: "https://www.figma.com/design/3SeByBQJphBao3gjcTNl2j/FS1-Cut-nyak-dien---Mockup-UI-Design---Prototype?node-id=2021-5&p=f&t=c05eltrGT17C6QHs-0",
      source: "https://github.com/cut-nyak-dien-PI-2024/FE-BeautyPreneur",
      caseStudyTitle: "Empowering Underserved Women Through UX: Case Study of BeautyPreneur",
      caseStudySubtitle: "Exploring how we designed a user-focused platform to support Indonesian women in rural areas to access beauty education and build sustainable microenterprises.",
      content: (
        <div className={styles.caseStudyContent}>
          {/* 1. Understanding the Problem */}
          <section className={styles.section}>
            <h2>1. Understanding the Problem</h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/beauty-problem.jpg")}
                alt="UX Research insights showing poverty statistics and challenges"
                className={styles.contentImage}
              />
              <p className={styles.caption}>
                <a href="https://www.figma.com/board/OyQCJOrYgPYRpjOyiHNi2N/UX-Research--FS1--Team-Cut-Nyak-Dien--Perempuan-dan-Kemiskinan-?node-id=0-1&t=6yhGNt4dsih9mhRk-1" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
                  See detail here → UX Research
                </a>
              </p>
            </div>
            <p>In Indonesia, <strong>9.68% of women live below the poverty line</strong>, often facing deeper systemic issues like limited access to education, employment, and support networks. Our initial research revealed:</p>
            <ul>
              <li><strong>80%</strong> of surveyed women struggle to find job opportunities due to financial and educational constraints.</li>
              <li><strong>66.7%</strong> dropped out of school because of financial hardship.</li>
            </ul>
            <p>Many women aspired to become makeup artists (MUAs) to gain financial independence, but faced challenges:</p>
            <ul>
              <li>Expensive beauty training.</li>
              <li>Inflexible class schedules.</li>
              <li>Limited access to verified training programs.</li>
              <li>Few career pathways or professional networks.</li>
            </ul>
            <p><strong>BeautyPreneur aims to bridge this gap</strong> by providing affordable, accessible, and credible beauty education designed for women from underserved backgrounds.</p>
          </section>

          {/* 2. My Role in the Project */}
          <section className={styles.section}>
            <h2>2. My Role in the Project</h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/beauty-team.jpg")}
                alt="The BeautyPreneur team during a virtual project coordination meeting as part of the Perempuan Inovasi Scholarship program"
                className={styles.contentImage}
              />
              <p className={styles.caption}>The BeautyPreneur team during a virtual project coordination meeting as part of the Perempuan Inovasi Scholarship program.</p>
            </div>
            <p>As part of the <strong>Cut Nyak Dien team during the Perempuan Inovasi Fullstack Scholarship</strong>, I worked as both a <strong>UI/UX Designer and Frontend Developer</strong>, collaborating with 3 teammates (2 Backend, 1 Frontend).</p>

            <h3>My key contributions:</h3>
            <ul>
              <li>Conducted and synthesized UX research to identify user needs.</li>
              <li>Designed user flow, wireframes, and high-fidelity prototypes.</li>
              <li>Developed frontend using React, focusing on the homepage and Makeup Budget List.</li>
              <li>Ensured accessibility and mobile responsiveness for smartphone users.</li>
            </ul>
            <p>This role strengthened my understanding of how human-centered design can empower communities and address inequality.</p>
          </section>

          {/* 3. From Problem to Product: UX Journey & Pivot */}
          <section className={styles.section}>
            <h2>3. From Problem to Product: UX Journey & Pivot</h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/beauty-pivot.jpg")}
                alt="UX Research showing the pivot from crowdfunding to training platform"
                className={styles.contentImage}
              />
            </div>
            <p>Initially, we planned to build a <strong>crowdfunding platform for women</strong>. But after mentor feedback, we realized it didn't directly address the core user pain points.</p>

            <h3>🔁 What We Explored:</h3>
            <ul>
              <li>Refine crowdfunding.</li>
              <li>Merge with training/job board.</li>
              <li>Start from scratch with validated needs.</li>
            </ul>

            <p>We chose to pivot and focus on a clear, research-backed solution:</p>
            <p><strong>A platform to help women access verified, budget-friendly MUA training tailored to their location, level, and schedule.</strong></p>
          </section>

          {/* 4. Why Other Ideas Didn't Work */}
          <section className={styles.section}>
            <h2>4. Why Other Ideas Didn't Work</h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/beauty-alternatives.jpg")}
                alt="UX Research showing why alternative ideas were rejected"
                className={styles.contentImage}
              />
            </div>
            <ul>
              <li><strong>Crowdfunding lacked immediate relevance</strong> to user goals (training, jobs).</li>
              <li>Other niches lacked research validation and required more infrastructure.</li>
              <li>We needed something <strong>feasible, specific, and aligned with user urgency</strong>.</li>
            </ul>
          </section>

          {/* 5. Why BeautyPreneur Worked: Our UX-Driven MVP */}
          <section className={styles.section}>
            <h2>5. Why BeautyPreneur Worked: Our UX-Driven MVP</h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/beauty-solution.jpg")}
                alt="UX Research showing the MVP features and user validation"
                className={styles.contentImage}
              />
            </div>
            <p>We focused on a <strong>minimum viable product (MVP)</strong> based on the strongest insights:</p>

            <h3>✅ Problem-Solution Fit:</h3>
            <ul>
              <li>Affordable makeup training.</li>
              <li>Filter by price, level, location.</li>
              <li>Budget planning with Makeup Budget List.</li>
              <li>Community support & verified trainers.</li>
            </ul>

            <h3>✅ Feasible Within Constraints:</h3>
            <ul>
              <li>Tight deadlines.</li>
              <li>Limited backend capability.</li>
              <li>Prioritized user flow: search, filter, book.</li>
            </ul>

            <h3>✅ Differentiator from Competitors:</h3>
            <ul>
              <li>Transparent course info.</li>
              <li>Verified instructor badges.</li>
              <li>Integrated booking & payment.</li>
            </ul>

            <h3>✅ Social Impact Potential:</h3>
            <ul>
              <li>Aligned with BPS poverty data & MUA trend.</li>
              <li>Builds skills and pathways to self-reliance.</li>
            </ul>
          </section>

          {/* 6. Results & Recognition */}
          <section className={styles.section}>
            <h2>6. Results & Recognition</h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/beauty-results.jpg")}
                alt="Documentation of 3rd place achievement at Demo Day"
                className={styles.contentImage}
              />
              <p className={styles.caption}>Documention 3rd Place</p>
            </div>

            <h3>🏆 Demo Day Achievement</h3>
            <ul>
              <li><strong>Top 3 finalist</strong> at Perempuan Inovasi 2024.</li>
              <li>Scored <strong>92.8/100</strong> from judges.</li>
              <li>Presented to national parliament representative <strong>Dr. Hetifah Sjaifudian</strong>.</li>
            </ul>

            <h3>👥 Booth Engagement:</h3>
            <ul>
              <li>10+ visitors, strong curiosity from women about affordable beauty training.</li>
            </ul>

            <h3>📱 Usability Testing:</h3>
            <ul>
              <li><strong>92%</strong> would recommend BeautyPreneur to others.</li>
              <li><strong>80%</strong> interested in joining MUA training.</li>
            </ul>

            <h3>🚨 Bug Handling:</h3>
            <ul>
              <li>Fixed QR code and DATA API redirect issue quickly during Demo Day.</li>
            </ul>
          </section>

          {/* 7. Limitations & Future Plans */}
          <section className={styles.section}>
            <h2>7. Limitations & Future Plans</h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/beauty-wireframe.jpg")}
                alt="Wireframe showing future improvements and features"
                className={styles.contentImage}
              />
              <p className={styles.caption}>
                <a href="https://www.figma.com/design/3SeByBQJphBao3gjcTNl2j/FS1-Cut-nyak-dien---Mockup-UI-Design---Prototype?node-id=2911-623&t=FT8AVikiljVDipuy-1" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
                  See detail → Wireframe
                </a>
              </p>
            </div>

            <h3>🛠️ What We'd Improve with More Time:</h3>
            <ul>
              <li>Better UI/UX for first-time digital learners.</li>
              <li><strong>Smarter Makeup Quiz:</strong> personalized recommendations based on user features.</li>
              <li><strong>Halal Product List:</strong> filterable halal-certified beauty products for Muslim users.</li>
            </ul>
            <p>Each enhancement moves us closer to a product that's not just functional, but transformational.</p>
          </section>

          {/* Conclusion */}
          <section className={styles.conclusion}>
            <h2>💬 Why It Matters</h2>
            <p>
              <strong>BeautyPreneur isn't just a tech product.</strong> It's a tool for economic independence and dignity.
              Through inclusive UX and thoughtful problem-solving, we open doors for women to learn, grow, and thrive  on their own terms.
            </p>
          </section>
        </div>
      )
    },
    "kparkir": {
      title: "K'Parkir",
      imageSrc: "portfolio/K'parkir.png",
      description: "A smart parking app designed to reduce time spent searching for parking in Jakarta. K'Parkir integrates real-time availability, navigation, to improve urban mobility and reduce illegal parking.",
      demo: "https://www.figma.com/design/tgp09Q84VoR5j3PSiz56OG/UI-Design-K%E2%80%99Parkir--TEAM-4FA-?node-id=0-1&t=0kYNLicYsYJAGJzN-1",
      source: "https://www.canva.com/design/DAG2sQv1ZgY/mg5SR5hQ9SBsEZ4eeCfjfg/edit?utm_content=DAG2sQv1ZgY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      caseStudyTitle: "K'Parkir: A Digital Solution for Seamless Parking in Jakarta",
      caseStudySubtitle: "Transforming Urban Mobility Through Real-Time Parking Availability and Community-Based Parking Solutions",
      content: (
        <div className={styles.caseStudyContent}>
          {/* 1. Understanding the Problem */}
          <section className={styles.section}>
            <h2>1. Understanding the Problem</h2>
              <p className={styles.caption}>
                <a href="https://www.figma.com/board/oIsRuCA2kL2aZBhOT3mipN/UX-Research-K%E2%80%99Parkir--TEAM-4FA-?node-id=1-4&t=MV77AxodCAXIEZbx-1" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
                  See Detail Here : UX Research
                </a>
              </p>

            <p>The core problem addressed by K'Parkir is the difficulty for private vehicle users in Jakarta to find safe, available parking in city centers during peak hours.</p>
            <p>The issue is critical due to several factors:</p>

            <h3>Limited Land and Uneven Distribution:</h3>
            <p>The supply of formal parking spaces is far less than the demand, with a conservative vehicle-to-parking capacity ratio reaching 10:1 in city centers. Vehicle growth (around 4-5% annually) far exceeds the growth of formal parking facilities.</p>

            <h3>Inefficiency and Wasted Time:</h3>
            <p>Users, such as students and office workers (like the persona Raziq), often have to spend 5 to 20 minutes (sometimes up to 30 minutes daily for 28% of drivers) cruising to find a slot. This wasted time leads to frustration, stress, and missed activities/meetings.</p>

            <h3>Lack of Transparency and Security:</h3>
            <p>The scarcity of formal parking drives users to park in illegal/wild parking areas. This lack of regulation leads to high anxiety regarding vehicle security (fear of theft or damage) and non-transparent, fluctuating costs set by illegal attendants.</p>

            <p>This systemic parking failure severely slows urban mobility in Jakarta, resulting in an estimated loss of up to Rp 17.2 trillion per year due to congestion and searching for parking.</p>
          </section>

          {/* 2. My Role in the Project */}
          <section className={styles.section}>
            <h2>2.My Role in the Project</h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/reqtify-team.JPG")}
                alt="Team 4FA structure and collaboration process"
                className={styles.contentImage}
              />
            </div>
            <p>The project was conducted by Team 1 (4FA), consisting of Sabrina Natasya Bilbina, Emir Abdillah Aziz, Joe Fadlan Wahid, and Muhammad Ryan Diaz Novando.</p>
            <p>As a member of Team 1 (4FA), our responsibilities covered the end-to-end UX process for K'Parkir, including:</p>

            <h3>UX Research:</h3>
            <p>Conducting Desk Research, Online Surveys (43 respondents), In-Depth Interviews (6 participants), Competitive Analysis, and creating User Personas/Journey Maps.</p>

            <h3>Ideation and Solution Development:</h3>
            <p>Generating ideas to solve the key pain points and prioritizing the main features (Live Park View and ParkShare).</p>

            <h3>Prototyping and Testing:</h3>
            <p>Developing the UI design and conducting remote Usability Testing on the "Live Park View" feature with three respondents.</p>

            <h3>Business Modeling:</h3>
            <p>Developing the Business Model Canvas, outlining key activities, resources, and revenue streams.</p>
          </section>

          {/* 3. What Made the Problem Interesting & Challenging */}
          <section className={styles.section}>
            <h2>3. What Made the Problem Interesting & Challenging </h2>

            <h3>3.1. What makes the problem interesting or challenging?</h3>
            <p>The challenge is multifaceted, involving human behavior, technology adoption, and governmental policy:</p>
            <p><strong>Behavioral Resistance:</strong> Although 93% of respondents are interested in a real-time parking application, the vast majority (74.4%) still revert to manually circulating or asking officers (41.9%) when looking for parking. Only about 7% currently use digital parking applications.</p>
            <p><strong>Economic Impact:</strong> The potential for financial leakage from illegal parking is immense, estimated at Rp 700 billion per year. Improving parking management contributes to both regional revenue and urban mobility.</p>
            <p><strong>Infrastructural and Policy Barriers:</strong> The successful implementation of digital systems is challenged by high initial costs for sensors and infrastructure, differing regional regulations, and lack of consistent policy enforcement on the ground.</p>

            <h3>3.2. What were the options?</h3>
            <p>Based on research, users typically employ these strategies when searching for parking:</p>
            <ul>
              <li><strong>Cruising/Circling the Area:</strong> Employed by 74.4% of respondents.</li>
              <li><strong>Asking Officers/People:</strong> Used by 41.9% of respondents.</li>
              <li><strong>Using Existing Digital Apps:</strong> Only 7% use current parking search apps.</li>
              <li><strong>Parking Illegally:</strong> Often chosen when necessary, despite users preferring legal, safer options.</li>
            </ul>

            <h3>3.3. What were the constraints you were forced to balance?</h3>
            <p>We had to balance several key constraints:</p>

            <p><strong>Real-Time Data Accuracy vs. Operational Complexity:</strong> The biggest user need is real-time availability. Achieving this requires balancing expensive infrastructure (sensors) with the need for immediate, accurate updates from field officers, many of whom lack adequate digital tools.</p>

            <p><strong>User Desire for Proximity/Safety vs. Land Scarcity:</strong> Users highly prioritize parking close to their destination and choose safe, legal spots. However, formal spaces are insufficient. The solution had to creatively expand parking supply without sacrificing user security or convenience.</p>

            <p><strong>Affordability vs. System Cost:</strong> Digital systems incur high initial costs. While users are willing to pay slightly higher rates for proximity, they strongly resist large tariff increases. The business model must be sustainable without alienating price-sensitive users.</p>
          </section>

          {/* 4. Why Other Ideas Didn't Work */}
          <section className={styles.section}>
            <h2>4. Why Other Ideas Didn't Work </h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/Compotitor Analisis K'PARKIR.png")}
                alt="Competitive analysis of PARKEE, JakParkir, and Jukir showing feature gaps"
                className={styles.contentImage}
              />
              <p className={styles.caption}>Existing digital solutions, such as PARKEE, JakParkir, and Jukir, already exist in the market</p>
            </div>
            <p><strong>Key competitive gap:</strong> While competitors support digital payment, most struggle to provide real-time availability information across a wide range of locations and suffer from technical instability, preventing them from solving the fundamental user pain point of wasted time cruising for an empty slot.</p>
          </section>

          {/* 5. Why K'Parkir Worked */}
          <section className={styles.section}>
            <h2>5.  Why K'Parkir Worked</h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("portfolio/K'parkir.png")}
                alt="K'Parkir solution features: Live Park View and ParkShare"
                className={styles.contentImage}
              />
              <p className={styles.caption}>
                <a href="https://www.figma.com/design/tgp09Q84VoR5j3PSiz56OG/UI-Design-K%E2%80%99Parkir--TEAM-4FA-?node-id=0-1&t=zEZyTWMxDNMeYGVH-1" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
                  See Detail here : UI Design & Prototype
                </a>
              </p>
            </div>
            <p>The final solution, K'Parkir, was chosen because it directly addresses the critical gaps identified in user research and competitive analysis, focusing on real-time availability, navigation, and increasing official capacity.</p>

            <p>The two main chosen features are:</p>

            <h3>Live Park View:</h3>
            <p>Provides real-time information on empty parking slots and direct navigation to the nearest available space. This directly solves the major pain points of circling/cruising and lack of information, which 93% of users are interested in.</p>

            <h3>ParkShare:</h3>
            <p>A system that collaborates with local residents or private landowners to officially rent out their empty lots for public parking. This addresses the core constraint of insufficient formal parking capacity by transforming informal spaces into safe, regulated areas, thus expanding the city's official parking supply.</p>

            <p>These features are highly aligned with user needs: info on empty slots (83.7%), navigation (69.8%), and info on fees/security.</p>
          </section>

          {/* 6. Results & Validation */}
          <section className={styles.section}>
            <h2>6. Results & Validation</h2>
            <p>The success of K'Parkir is measured across three key areas: Project Achievement, User Experience/Usability, and Business Case Viability.</p>
            <h4>Measurable Outcomes: Project Achievement</h4>
            <ul>
              <li> K'Parkir Secured 1st Place in the Final Project Showcase</li>
              <li>The project achieved a high final score of 96/100</li>
            </ul>

            <p>Usability Testing (UT) was conducted on the Live Park View feature with three respondents using a remote video in-depth interview method.</p>
            <p><strong>Ease of Use:</strong> The average Single Ease Question (SEQ) score was 6/7, indicating the design is considered "Already OK" and meets user needs. All respondents understood the main function quickly.</p>
            <p><strong>Visual Appeal:</strong> The average visual appeal score was 6.33/7, also rated as "Already OK".</p>
            <p><strong>Efficiency:</strong> Respondents found the feature helpful in finding parking efficiently and in real-time.</p>

            <h3>Success Metrics (Business Case Model)</h3>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/Business Model Canvas (BMC) K'PARKIR.png")}
                alt="Business Model Canvas showing revenue streams and success metrics"
                className={styles.contentImage}
              />
              <p className={styles.caption}>The Business Model Canvas (BMC) outlines measurable success metrics focusing on three key segments</p>
            </div>

            <p><strong>Revenue Streams (Business Model):</strong> Revenue generation is structured through diversified channels:</p>
            <ul>
              <li>B2B Collaboration: Partnership fees with official parking managers.</li>
              <li>Subscriptions: Fee charged to ParkShare Partners (landowners).</li>
              <li>Advertising: Promotions for local MSMEs (UMKM) located near parking areas.</li>
              <li>Data Insight Sales: Providing mobility data analysis to third parties or the government.</li>
            </ul>
          </section>

          {/* 7. Limitations & Future Plans */}
          <section className={styles.section}>
            <h2>7. Limitations & Future Plans</h2>

            <h3>Limitations of the Final Solution</h3>
            <p><strong>Real-Time Data Dependence:</strong> The effectiveness of Live Park View depends heavily on fast, continuous updates. Currently, the system relies on developing the Officer Update Status tool, which is a future scope.</p>
            <p><strong>Visual Polish:</strong> While the UI was rated highly, feedback suggested minor improvements to make the visual appearance more attractive compared to commercial applications.</p>
            <p><strong>Connectivity Issues:</strong> Like all digital systems, K'Parkir is susceptible to technical failures, such as poor internet connectivity, which can hamper real-time updates or payment processing.</p>
            <p><strong>Partnership Dependency:</strong> The success of the ParkShare feature relies on establishing widespread cooperation with local citizens and property owners, which requires significant effort and resources for verification and community building.</p>

            <h3>What we'd do with Infinite Time or Resources (Future Scope)</h3>
            <p>With infinite time and resources, the focus would be on integrating robust infrastructure and advanced security features, which were prioritized as "What Next" steps:</p>
            <p><strong>Full Infrastructure Deployment:</strong> Implementing the planned feature: Officer Update Status. This involves developing an official application/dashboard for field officers to update real-time slot availability, maintenance status, and other conditions instantly and accurately.</p>
            <p><strong>Advanced Security Integration:</strong> Implementing integration with CCTV security systems that can be accessed via the application and partnering with certified security providers for all registered lots to meet the high user demand for vehicle security.</p>
            <p><strong>Booking Feature:</strong> Developing a Booking/Reservation Feature that allows users to pre-book a parking slot before arrival, especially crucial during peak hours, thereby guaranteeing a spot and eliminating cruising time entirely.</p>
            <p><strong>Operational Professionalism:</strong> Creating an employment program that provides training and stable income for parking attendants, ensuring professional conduct and consistency in service delivery.</p>
          </section>
        </div>
      )
    },
    "sibi": {
      title: "SIBI (Sistem Ibu Bahagia)",
      imageSrc: "portfolio/sibi.png",
      description: "A mental health companion for Indonesian mothers during pregnancy and postpartum. Features anonymous chat, bonding classes, and access to local resources.",
      demo: "https://www.figma.com/design/xQs3X179UkOsKJBj0axGhP/Basic-Course---4.2-Landing-Page-Design-Challenge--Sabrina-Natasya-Bilbina-?node-id=2009-1322&t=jCoNeCbhKa2sqkOg-1",
      source: "https://medium.com/design-bootcamp/case-study-ux-designing-sibi-a-mental-health-companion-for-indonesian-mothers-5e27043eb9a2",
      // JUDUL DAN SUBTITLE KHUSUS UNTUK SIBI
      caseStudyTitle: "Designing SIBI: A Mental Health Companion for Indonesian Mothers",
      caseStudySubtitle: "How We Used Human Centered Design to Support the Mental Wellbeing of Pregnant and Postpartum Women in Underserved Areas",
      content: (
        <div className={styles.caseStudyContent}>
          {/* 1. Understanding the Problem */}
          <section className={styles.section}>
            <h2>1. Understanding the Problem</h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/sibi-problem.jpg")}
                alt="Maternal mental health statistics in Indonesia showing 12.6% of mothers experience mental disorders"
                className={styles.contentImage}
              />
              <p className={styles.caption}>
                <a href="https://www.figma.com/design/xQs3X179UkOsKJBj0axGhP/Basic-Course---4.2-Landing-Page-Design-Challenge--Sabrina-Natasya-Bilbina-?node-id=2009-1322&t=vlfQ4snJZrtWmZee-1" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
                  See detail here → Project Brief
                </a>
              </p>
            </div>
            <p>In Indonesia, <strong>maternal mental health remains a critical yet overlooked issue</strong>. As of 2024, 12.6% of Indonesian mothers experience mental disorders such as anxiety and depression during or after pregnancy. Our research revealed:</p>
            <ul>
              <li><strong>70%</strong> of mothers with mental health issues do not seek professional help due to stigma and limited access.</li>
              <li><strong>57-67%</strong> of mothers experience postpartum baby blues, extreme fatigue, and emotional exhaustion.</li>
            </ul>
            <p>Mothers aged 15–24, especially those with unplanned pregnancies or living in urban pressure zones, are particularly vulnerable. Yet very few have accessible, trusted, and stigma-free platforms to seek support.</p>
            <p><strong>SIBI aims to bridge this gap</strong> by providing a safe, anonymous, and supportive mental health companion for Indonesian mothers during their pregnancy and postpartum journey.</p>
          </section>

          {/* 2. My Role in the Project */}
          <section className={styles.section}>
            <h2>2. My Role in the Project</h2>
            <p>I <strong>initiated and led the research, ideation, and design of the SIBI app</strong> as a solo designer. This included:</p>

            <h3>My key contributions:</h3>
            <ul>
              <li>Conducting problem mapping and user research with Indonesian mothers</li>
              <li>Identifying pain points and target user segments</li>
              <li>Designing solution ideas and platform structure</li>
              <li>Writing copy and defining UX writing tone for emotional safety</li>
              <li>Visualizing features and flows based on real user needs</li>
            </ul>
            <p>This project was a solo UX case study built under the human-centered design approach, with consultation from mentors specializing in maternal mental health and digital health strategies.</p>
          </section>

          {/* 3. What Made the Problem Interesting & Challenging */}
          <section className={styles.section}>
            <h2>3. What Made the Problem Interesting & Challenging</h2>
            <h3>🔍 Options Explored:</h3>
            <ul>
              <li><strong>General health apps</strong> already exist, but none focused on maternal mental health</li>
              <li><strong>Social media forums</strong> offer peer-to-peer sharing but are unmoderated and unsafe</li>
              <li><strong>WhatsApp groups or midwife support</strong> but access is uneven and lacks mental health expertise</li>
            </ul>

            <h3>🚧 Constraints Faced:</h3>
            <ul>
              <li><strong>High stigma:</strong> Talking about mental health is seen as weakness</li>
              <li><strong>Lack of professional access</strong> in rural/semi-urban areas</li>
              <li><strong>Low digital literacy</strong> in some target segments</li>
              <li><strong>Mothers are often isolated and time-constrained</strong> solutions had to be simple, mobile-first, and emotionally safe</li>
            </ul>
          </section>

          {/* 4. Other Ideas Considered (But Rejected) */}
          <section className={styles.section}>
            <h2>4. Other Ideas Considered (But Rejected)</h2>
            <ul>
              <li><strong>Pure Chatbot Only:</strong> Lacked human empathy and might discourage trust in sensitive conversations</li>
              <li><strong>Content-Heavy App:</strong> Passive experience; did not support emotional release or peer support</li>
              <li><strong>Web-Only Resource Library:</strong> Lacked emotional warmth and support dynamics needed by users</li>
            </ul>
            <p>We needed something that balanced <strong>professional guidance with human connection</strong> while maintaining privacy and accessibility.</p>
          </section>

          {/* 5. Why I Chose This Final Solution */}
          <section className={styles.section}>
            <h2>5. Why I Chose This Final Solution</h2>
            <p>We focused on a <strong>human-centered, emotionally safe, mobile-first platform</strong> tailored for young mothers, especially those without support systems.</p>

            <h3>✅ Key Features:</h3>
            <ul>
              <li><strong>Anonymous Chat & Hotline:</strong> Mothers can text trained mentors or psychologists without fear of being judged</li>
              <li><strong>Partner Classes:</strong> Bonding activities like prenatal yoga and communication sessions that involve both parents</li>
              <li><strong>Location-Based Resources:</strong> Help users discover the nearest midwives, psychologists, or support groups</li>
              <li><strong>Emergency Contact Directory:</strong> Direct connection to Puskesmas, midwives, and psychologists via WhatsApp or call</li>
            </ul>

            <h3>✅ Emotional Safety First:</h3>
            <ul>
              <li>Anonymous participation to reduce stigma</li>
              <li>Trained, empathetic moderators and mentors</li>
              <li>Culturally appropriate content and language</li>
            </ul>

            <h3>✅ Accessibility Focus:</h3>
            <ul>
              <li>Low-data usage considerations</li>
              <li>Simple, intuitive interface for varying digital literacy levels</li>
            </ul>

            <p>This balance of <strong>professional guidance, anonymity, and easy access</strong> was essential to build trust and encourage help-seeking behavior.</p>
          </section>

          {/* 6. Measurable Outcomes (Projected) */}
          <section className={styles.section}>
            <h2>6. Measurable Outcomes (Projected)</h2>
            <p>Since this was a concept prototype, the following were envisioned outcomes:</p>

            <h3>📈 Engagement Metrics:</h3>
            <ul>
              <li>Chat session counts and duration</li>
              <li>Location-based service searches and connections</li>
              <li>Class participation rates</li>
              <li>Return user frequency</li>
            </ul>

            <h3>🎯 Long-term Vision:</h3>
            <ul>
              <li>Reduced postpartum depression cases through early intervention</li>
              <li>Stronger community support networks for mothers</li>
              <li>Improved maternal child bonding and family wellbeing</li>
            </ul>
          </section>

          {/* 7. Limitations & Future Directions */}
          <section className={styles.section}>
            <h2>7. Limitations & Future Directions</h2>
            <h3>🛠️ Current Limitations:</h3>
            <ul>
              <li>Verified psychologist and midwife networks not yet integrated</li>
              <li>No behavior change incentives or habit-building tools</li>
              <li>Limited integration with national health systems (BPJS, Puskesmas)</li>
            </ul>

            <h3>🚀 Future Enhancements:</h3>
            <ul>
              <li><strong>Co-creation process</strong> with real mothers, midwives, and psychologists</li>
              <li><strong>MVP usability testing</strong> with both urban and rural users</li>
              <li><strong>Gamified check-ins</strong> and emotional wellbeing trackers</li>
              <li><strong>Offline functionality</strong> for basic features and resources</li>
              <li><strong>Partnerships</strong> with local health centers and communities</li>
            </ul>
            <p>Each enhancement moves us closer to a platform that's not just functional, but truly transformative for maternal mental health in Indonesia.</p>
          </section>

          {/* Conclusion */}
          <section className={styles.conclusion}>
            <h2>💬 Why It Matters</h2>
            <p>
              <strong>SIBI isn't just another health app.</strong> It's a lifeline for mothers who feel alone in their struggle.
              By combining human-centered design with deep cultural understanding, we create a safe space where Indonesian mothers can find support,
              reduce stigma, and build healthier families starting with their own mental wellbeing.
            </p>
          </section>
        </div>
      )
    },
    "hermoney": {
      title: "HerMoney",
      imageSrc: "portfolio/hermoney.png",
      description: "A financial education platform empowering women through structured courses on budgeting, saving, and investing to break the cycle of poverty.",
      demo: "https://hermoney.netlify.app/",
      source: "https://github.com/sabrintsya/HerMoney",
      // JUDUL DAN SUBTITLE KHUSUS UNTUK HERMONEY
      caseStudyTitle: "Breaking the Cycle: A UX Case Study on Women, Poverty, and Financial Education",
      caseStudySubtitle: "How UX design can empower women by addressing key challenges in financial education, tackling issues of inequality and dependency",
      content: (
        <div className={styles.caseStudyContent}>
          {/* 1. Understanding the Problem */}
          <section className={styles.section}>
            <h2>1. The Problem I Wanted to Solve</h2>
            <div className={styles.imageWithCaption}>
              <img
                src={getImageUrl("casestudy/hermoney-problem.jpg")}
                alt="Financial inequality statistics showing women's challenges in financial literacy"
                className={styles.contentImage}
              />
              <p className={styles.caption}>
                <a href="https://www.canva.com/design/DAGS66yHX1k/y8DTfRJjnUDphUqYJdpKtg/edit" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
                  See detail here → Research Presentation
                </a>
              </p>
            </div>
            <p>Research shows that women face unique financial challenges compared to men, which often keeps them in a cycle of poverty.</p>

            <h3>Key Pain Points (based on research):</h3>
            <ul>
              <li><strong>Limited access to financial education</strong> → According to the OECD (2021), only 30% of women reported feeling confident in making financial decisions compared to 50% of men.</li>
              <li><strong>Income inequality</strong> → The World Bank notes that women globally earn 20% less than men on average for the same type of work.</li>
              <li><strong>Dependency on others</strong> → In Indonesia, BPS data (2022) highlighted that one in three women depend financially on their spouse or family, making them more vulnerable during crises.</li>
              <li><strong>Lack of financial literacy programs targeted to women</strong> → According to a survey by OJK (Otoritas Jasa Keuangan, 2019), only 36% of Indonesian women are considered financially literate, compared to 46% of men.</li>
            </ul>
            <p>💡 <strong>These insights show that women, especially in lower-income communities, often lack access to practical, affordable, and structured financial education.</strong> This became the central problem I wanted to address through HerMoney.</p>
          </section>

          {/* 2. My Role in the Project */}
          <section className={styles.section}>
            <h2>2. My Role and Responsibilities</h2>
            <p>As this was an individual project, I took ownership of the full design and development process:</p>

            <h3>My key responsibilities:</h3>
            <ul>
              <li>Conducted desk research & empathy mapping</li>
              <li>Defined user personas and needs</li>
              <li>Designed wireframes and high-fidelity prototypes</li>
              <li>Developed frontend implementation</li>
              <li>Conducted usability testing and iterations</li>
            </ul>
            <p>This individual project allowed me to deeply understand the connection between UX research, design decisions, and technical implementation in solving social problems.</p>
          </section>

          {/* 3. What Made the Problem Interesting & Challenging */}
          <section className={styles.section}>
            <h2>3. Why the Problem Was Interesting and Challenging</h2>
            <h3>🔍 Options I Explored:</h3>
            <ul>
              <li><strong>A mobile app with financial literacy gamification</strong></li>
              <li><strong>A simple blog or content-based platform</strong></li>
              <li><strong>An online learning hub with structured courses</strong></li>
            </ul>

            <h3>🚧 Constraints I Faced:</h3>
            <ul>
              <li><strong>Accessibility:</strong> The platform had to be usable by women from diverse backgrounds, including those with limited digital literacy</li>
              <li><strong>Affordability:</strong> Course pricing and business model had to be inclusive</li>
              <li><strong>Simplicity:</strong> Overloading users with information risked discouraging engagement</li>
              <li><strong>Trust-building:</strong> Financial education requires establishing credibility and trust</li>
            </ul>
          </section>

          {/* 4. Other Ideas Considered (But Rejected) */}
          <section className={styles.section}>
            <h2>4. Other Variants and Why They Didn't Work</h2>
            <ul>
              <li><strong>Gamified App:</strong> Fun but required high development costs and could overwhelm users who just needed clear, practical guidance</li>
              <li><strong>Blog-based Solution:</strong> Easy to implement, but lacked interactive structure and didn't provide a sense of progression in learning</li>
            </ul>
            <p>Both variants didn't align with the goal of creating a <strong>trustworthy, structured, and empowering experience</strong> that would genuinely help women build financial confidence.</p>
          </section>

          {/* 5. Why I Chose This Final Solution */}
          <section className={styles.section}>
            <h2>5. Final Solution: HerMoney Platform</h2>
            <p>I created <strong>HerMoney</strong>, a web platform offering structured financial courses designed specifically for women's needs and learning preferences.</p>

            <h3>✅ Key Features:</h3>
            <ul>
              <li><strong>Lifetime access</strong> with one-time affordable payment</li>
              <li><strong>Structured course categories</strong> (budgeting, saving, investing)</li>
              <li><strong>Real testimonials</strong> to build trust and relatability</li>
              <li><strong>Simple FAQ section</strong> to address common barriers and concerns</li>
              <li><strong>Progress tracking</strong> to maintain motivation and sense of achievement</li>
            </ul>
          </section>

          {/* 6. Measurable Outcomes & Impact */}
          <section className={styles.section}>
            <h2>6. Project Impact & Outcomes</h2>

            <h3>📊 Expected Learning Outcomes:</h3>
            <ul>
              <li>Improved financial literacy scores among women participants</li>
              <li>Increased confidence in making financial decisions</li>
              <li>Better budgeting and saving habits</li>
              <li>Reduced financial dependency on family or partners</li>
            </ul>

            <h3>🎯 Success Metrics:</h3>
            <ul>
              <li>Course completion rates and engagement metrics</li>
              <li>User satisfaction scores and testimonials</li>
              <li>Repeat engagement and referral rates</li>
              <li>Practical application of learned concepts</li>
            </ul>

            <h3>🌍 Social Impact Vision:</h3>
            <ul>
              <li>Breaking intergenerational cycles of financial dependency</li>
              <li>Empowering women to achieve economic independence</li>
              <li>Creating a community of financially literate women</li>
              <li>Contributing to reduced gender wealth gap</li>
            </ul>
          </section>

          {/* 7. Limitations & Future Directions */}
          <section className={styles.section}>
            <h2>7. Limitations & Future Opportunities</h2>
            <p className={styles.caption}>
              <a href="https://hermoney.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
                See detail → Live Website
              </a>
            </p>

            <h3>🛠️ Current Limitations:</h3>
            <ul>
              <li>No offline access for users with limited internet connectivity</li>
              <li>Limited interactivity beyond static course content</li>
              <li>Lacks personalized financial advice and customization</li>
              <li>No community features for peer support and discussion</li>
            </ul>

            <h3>🚀 Future Improvements with More Resources:</h3>
            <ul>
              <li><strong>Launch mobile and desktop apps</strong> with offline learning capabilities</li>
              <li><strong>Build community forums & mentorship spaces</strong> for peer-to-peer support</li>
              <li><strong>Add interactive financial planning tools</strong> and calculators</li>
              <li><strong>Expand course topics</strong> to include entrepreneurship and investment</li>
              <li><strong>Partner with financial institutions</strong> for certified courses</li>
            </ul>
            <p>Each enhancement would move HerMoney closer to becoming a comprehensive financial empowerment ecosystem for women.</p>
          </section>

          {/* Conclusion */}
          <section className={styles.conclusion}>
            <h2>💬 Why This Matters</h2>
            <p>
              <strong>HerMoney is more than just a financial education platform</strong> it's a tool for economic liberation.
              By addressing the root causes of financial inequality through human centered design, we can empower women to break free from dependency cycles,
              build confidence in managing their finances, and create a more equitable future where every woman has the knowledge and tools to achieve financial independence.
            </p>
          </section>
        </div>
      )
    }
  };
  const project = caseStudies[projectId];

  if (!project) {
    return (
      <div className={styles.container}>
        <h2>Project not found or Case Study not available</h2>
        <p>This project doesn't have a detailed case study yet.</p>
        <button onClick={() => navigate("/#portfolio")} className={styles.backButton}>
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate("/#portfolio")}>
        Back to Portfolio
      </button>

      <div className={styles.header}>
        {/* MENGGUNAKAN JUDUL DAN SUBTITLE YANG SESUAI DENGAN PROJECT */}
        <h1 className={styles.title}>{project.caseStudyTitle || project.title}</h1>
        <p className={styles.subtitle}>{project.caseStudySubtitle || project.description}</p>
        <img
          src={getImageUrl(project.imageSrc)}
          alt={project.title}
          className={styles.heroImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.caseStudyContent}>
          {project.content}
        </div>

        <div className={styles.actions}>
          <a href={project.demo} className={styles.button} target="_blank" rel="noopener noreferrer">
            See the design
          </a>
          <a href={project.source} className={styles.buttonSecondary} target="_blank" rel="noopener noreferrer">
            View Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;