import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils";
import styles from "./CaseStudy.module.css";

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const caseStudies = {
    "beauty-preneur": {
      title: "Beauty Preneur",
      imageSrc: "portfolio/beautypreneur.png",
      description: "Empowering Underserved Women Through UX: Case Study of BeautyPreneur - Exploring how we designed a user-focused platform to support Indonesian women in rural areas to access beauty education and build sustainable microenterprises.",
      demo: "https://www.figma.com/design/3SeByBQJphBao3gjcTNl2j/FS1-Cut-nyak-dien---Mockup-UI-Design---Prototype?node-id=2021-5&p=f&t=c05eltrGT17C6QHs-0",
      source: "https://github.com/cut-nyak-dien-PI-2024/FE-BeautyPreneur",
      // JUDUL DAN SUBTITLE KHUSUS UNTUK BEAUTYPREENEUR
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
              <li><strong>Top 3 finalist</strong> out of 50+ teams at Perempuan Inovasi 2024.</li>
              <li>Scored <strong>92.8/100</strong> from judges.</li>
              <li>Presented to national parliament representative <strong>Dr. Hetifah Sjaifudian</strong>.</li>
            </ul>

            <h3>👥 Booth Engagement:</h3>
            <ul>
              <li>50+ visitors, strong curiosity from women about affordable beauty training.</li>
            </ul>

            <h3>📱 Usability Testing:</h3>
            <ul>
              <li><strong>92%</strong> would recommend BeautyPreneur to others.</li>
              <li><strong>80%</strong> interested in joining MUA training.</li>
            </ul>

            <h3>🚨 Bug Handling:</h3>
            <ul>
              <li>Fixed QR code redirect issue quickly during Demo Day.</li>
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
            <p>I <strong>initiated and led the research, ideation, and design of the SIBI app</strong> as a solo designer and developer. This included:</p>
            
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
            <p>We focused on a <strong>human-centered, emotionally safe, mobile-first platform</strong> tailored for young mothers — especially those without support systems.</p>
            
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
              <li>Mobile-first design for smartphone users</li>
              <li>Low-data usage considerations</li>
              <li>Simple, intuitive interface for varying digital literacy levels</li>
            </ul>

            <p>This balance of <strong>professional guidance, anonymity, and easy access</strong> was essential to build trust and encourage help-seeking behavior.</p>
          </section>

          {/* 6. Measurable Outcomes (Projected) */}
          <section className={styles.section}>
            <h2>6. Measurable Outcomes (Projected)</h2>
            <p>Since this was a concept prototype, the following were envisioned outcomes:</p>
            <h3>📊 Short-term Impact (3-6 months):</h3>
            <ul>
              <li>Increased help-seeking behavior among mothers within postpartum period</li>
              <li>Reduction in reported feelings of isolation through peer & professional support</li>
              <li>Higher engagement with mental health resources</li>
            </ul>

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
              <li>No offline access for areas with weak internet signals</li>
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

            <h3>✅ User-Centered Design Principles:</h3>
            <ul>
              <li>Clear, jargonfree language accessible to beginners</li>
              <li>Visual hierarchy that prioritizes essential information</li>
              <li>Mobile-responsive design for accessibility</li>
              <li>Inclusive pricing model to ensure affordability</li>
            </ul>

            <h3>✅ Trust-Building Elements:</h3>
            <ul>
              <li>Transparent pricing with no hidden costs</li>
              <li>Real success stories from women learners</li>
              <li>Clear learning outcomes and benefits</li>
              <li>Professional yet approachable visual design</li>
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
              <li><strong>Implement AI-powered personalized learning paths</strong></li>
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
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;