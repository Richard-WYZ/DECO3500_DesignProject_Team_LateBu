# NutriMate  

## Project Overview

**Project Title:** *NutriMate – Social Cooking System for Student Kitchens*  
**Course:** DECO3500 Social & Mobile Computing  
**Team:** LateBu  

NutriMate is a social design project that aims to transform shared student kitchens into engaging and collaborative environments.  
It encourages students to cook together, share food culture, and build social connections through a hybrid system that links physical and digital interactions.

To see a brief of our design process > **[Design Process Overview](DesignProcessOverview.md)**

---

## Target Users

**Students living in student accommodation who want to socialize.**

These students often feel isolated in their apartments and seek low barrier opportunities to meet others through shared activities like cooking.

## Process Documentation

### 1. Initial Proposal and Tutor Feedback

- **[Design Proposal](Iteration1/Design_Proposal_Evaluation.md)**:
  Tutor feedback identified key gaps:
  - **Definition**: “Healthy food” was unclear; success metrics undefined.
  - **Clarity**: Engagement and outcomes lacked measurable indicators.
  - **Approach**: Overemphasis on app features, less on behavior and context.
  - **Scope**: Audience definition too broad.
**Outcome**: Required narrowing of target group and clearer user centered framing.

### 2. Refining User Focus

- **[Refinement](Iteration1/Refine_Proposal.md)**:
  - Identified two key groups:
    1. **Food Sharers & Socializers**
    2. **Healthy Eating Learners**
  - Core goal: enable students to share recipes offline and cook together, making healthy eating a social, fun experience.
  - Interview framework redesigned to extract motivations, needs, and pain points.

### 3. Early Interviews and Insights

- **[Interview Analysis](Iteration1/Interview_Analysis.md)**:
  - **Food as a social gateway**: cooking together reduces loneliness and builds friendships faster than dining out.
  - **Cultural exchange**: pride in sharing recipes; curiosity in learning others' food traditions.
  - **Peer influence**: demonstrations inspire healthier eating.
  - **Atmosphere > food quality**: belonging and shared experience matter most.
  - **Challenges**: loneliness, shyness, lack of cooking skills, uncertain ingredients, busy schedules.
  - **User needs**:
    - Low barrier entry points to join kitchen activities
    - Ingredient guidance
    - Simple, social friendly formats

### 4. Iteration 2: Focus on Student Kitchens

- **[Refined Proposal](Iteration2/Proposal_V2.md)**
  - **Target User Group**: International Students in Dormitories
    - **Social Needs**: Strong desire to make friends, hindered by cultural differences and shyness.
    - **Daily Life Needs**: Require solutions for meals, including sharing recipes and learning simple cooking.
    - **Sense of Belonging**: Seek recognition and to avoid isolation by sharing their food culture.
    - **Practical Constraints**: Face limitations like busy schedules, tight budgets, and limited kitchen space.
  - User Research Interview Questions
    - **Eating Habits**: Frequency of cooking; dishes they want to share from their hometown.
    - **Socializing**: Experiences cooking with others; challenges in making friends in the dorm.
    - **Bulletin Board & Activities**: Likelihood of participating in a "community recipe board"; preference for sharing medium (photos, text, offline activities).
    - **Interaction Methods**: Preference for physical board messages vs. mobile app communication; interest in small "Cook Together" events.
  - **Bulletin Board Design**: A Hybrid Physical + Digital Interface
    - **Event Announcement Area**: Promotes upcoming "Cook Together" events with a QR code for registration and weekly themes.
    - **Community Recipe Wall**: Allows students to post hometown recipes (multilingual with pictures), linked to detailed instructions via QR code.
    - **Icebreaker Interaction Area**: Features question stickers (e.g., about origin, food recommendations, finding grocery buddies) to encourage interaction.
    - **Kitchen Instruction Area**: Provides rules, guides, and instructions for the shared kitchen using icons and multiple languages.
    - **Digital Interaction Entry**: A prominent QR code links to the supporting App/mini-program with a call-to-action slogan.
  - App / Mini-Program Core Features
    - **Home & Event Registration**: View and sign up for "Cook Together" events with filters (e.g., vegetarian, halal, nationality).
    - **Recipe Sharing**: Browse recipes by nationality/category; functionality to bookmark, comment, and react.
    - **Community Interaction**: "Find a buddy" feature to initiate cooking or shopping; simple messaging/group chats.
    - N**otifications & Guidelines**: Sends kitchen cleaning reminders, booking info (if applicable), and official announcements.
  - Interaction Logic
    - **Physical → Digital**: Users see content on the physical board and scan a QR code to register, bookmark, or comment in the app.
    - **Digital → Physical**: Users upload recipes via the app, which are then printed/projected onto the physical board in the kitchen.
    - **Instant Socializing**: Allows for spontaneous posts in the app to find cooking partners for immediate plans (e.g., sharing ingredients for dinner).
    - **Low-Barrier Participation**: Favors a mini-program or web version over a full app download to ease access for international students.

- **[Further Interviews and Observations](Iteration2/Interview_and_Observation_Findings.md)**:
  - **Kitchen as a social blind spot**: rarely used, avoided due to uncertainty and awkwardness.
  - **Isolation**: particularly strong among studio residents.
  - **Preference for small groups**: overcrowding reduces comfort.
  - **Friction points**: unclear availability, complicated sign up, missed spontaneous opportunities.
  - **Motivators**:
    - Healthy eating with shared learning
    - Incentives like tickets and small rewards
- **[Needs & Pain Points Analysis](Iteration2/User_Needs_Pain_Point_Expectations.md)**:
  Reconfirmed students want kitchens to become **social, manageable, and rewarding**.

### 5. Prototype Development

- **[Prototype](Iteration2/prototype.md)**:
  Focus on **making kitchens more social, engaging, and accessible**.
  **Core Features:**
  - **Homepage**: weekly events, cuisine categories, ticket based entry
  - **Activity Details**: schedules, recipe info, AI driven nutrition analysis
  - **Cooking Process**: step by step guidance, avatars, AI cooking support
  - **End Page**: AI generated digital or printed souvenirs
  **Supporting Functions:**
  - Kitchen reservation system
  - QR code ticketing
  - AI health analysis
  - Real time guidance during cooking
  - Illustrative activity “souvenir” printing
  **Core Flow**: **Reserve → Scan → Cook → Celebrate**

### 6. Prototype Evaluation

- **[Evaluation](prototype_evaluation/Prototype_Evaluation.md)**:
  - **Purpose & Evaluation Type**
    - **Purpose**: To explore user interaction with the social cooking system prototype in a realistic shared environment.
    - **Focus**: Understand how the system supports or hinders social interaction, collaboration, and engagement throughout a cooking event's lifecycle (booking, participating,     - completing).
    - **Type**: A formative evaluation aimed at identifying areas for improvement and generating design implications, not at validating usability scores.
  - **Evaluation Design & Methods**
    - Uses a mixed-methods approach across four dimensions:
    - Real Task Performance: Scenario Walkthrough of the full workflow.
    - Behavioral & Social Interaction: Observation of collaboration and communication.
    - Cognitive Process: Embedded Think-Aloud protocol during individual decisions.
    - Emotional & Reflective Response: Post-Interview to gather feelings and suggestions.
  - **Participants & Setting**
    - Target Group: International students or apartment residents with experience in shared kitchens.
    - Group Size: 6-8 participants total (3-4 pairs).
    - Setting: A simulated apartment common area and shared kitchen.
  - **Procedure**
    - A structured, 25-30 minute session per pair:
    - Introduction (2 min): Briefing and consent.
    - Scenario Walkthrough (10-15 min): Participants complete three connected scenes (Booking, Cooking, Completion) while being observed.
    - Think-Aloud (2-3 min): Participants verbalize thoughts during individual tasks.
    - Post-Interview (5-8 min): Semi-structured interview to reflect on the experience.
    - Wrap-Up (2 min): Closing and thanks.
  - **Data Collection & Analysis**
    - Data Collected: Video/audio recordings, field notes, think-aloud transcripts, and interview notes.
    - Analysis Layers: Findings are analyzed across behavioral, cognitive, and emotional layers to derive design implications.
  - **Key Findings & Design Implications**
    - **Finding 1: Lack of Booking Feedback**
      - **Issue**: Anonymous booking caused uncertainty and reduced user control.
      - **Implication**: Provide lightweight personal linkage (e.g., a QR ticket with a confirmation page and cancel option).
    - **Finding 2: Unclear Preparation Requirements**
      - **Issue**: Participants were unsure what to bring, causing hesitation.
      - **Implication**: Bridge the digital-physical gap with "Preparation Tips" on the activity page and ticket.
    - **Finding 3: Persistent Social Discomfort**
      - **Issue**: Participants interacted with the system more than each other.
      - **Implication**: Embed subtle social prompts or shared micro-tasks into the task flow to encourage interaction.
    - **Finding 4: Lack of Micro-Scale Social Options**
      - **Issue**: Users preferred cooking in small, familiar groups over open participation.
      - **Implication**: Offer flexible group formation (e.g., "Join with a friend" option).
    - **Finding 5: Missed Social Reinforcement**
      - **Issue**: The social experience ended with the activity; no mechanism for post-event reflection.
      - **Implication**: Extend social connection with a post-event page or social wall for sharing.
  - **Ethics**
    - Informed consent for recording is required.
    - Participants can withdraw at any time.
    - Data is used for academic purposes only, with no sensitive personal data collected.
  - **Expected Outcomes**
    - Identification of design barriers and enablers for social interaction.
    - Insights into collaboration patterns and emotional engagement.
    - Actionable design implications for refining the prototype.

### 7. Exhibit

- **[Exhibit](prototype_evaluation/Exhibit.md)**:
  - **Purpose of the Exhibit**
    - To publicly showcase the final NutriMate prototype.
    - To communicate the design concept, demonstrate interactive features, and gather real-time feedback from a wider audience.
    - Specific goals were to present the complete user journey (booking → participation → reflection), engage visitors with a demo, and gather new insights.
  - **Preparation Materials**
    - **Poster**: Designed to visually summarize the system's concept, motivation, and design process.
      - Highlighted key problems: social discomfort, missed social moments, and participation barriers.
      - Illustrated core features: lobby/elevator screens for booking, kitchen displays for cooking, and AI-generated souvenirs.
    - **Intro Website**: Served as a promotional platform to explain the project.
      - Presented the project concept, design process, system features, and a visual demonstration of the prototype.
  - **Exhibition Execution**
    - The team set up an interactive display featuring the prototype screen, printed ticket function, and the introductory website.
    - Activities included live demonstrations of the full user journey and engaging in discussions and Q&A sessions with visitors and tutors.
    - The setup successfully attracted attention and encouraged hands-on interaction.
  - **Audience Feedback & Insights**
    - **Positive Reception**: Appreciation for the holistic design connecting physical and digital experiences and its relevance to real social challenges in student housing.
    - **Critical Feedback:**
      - **Unclear Physical Flow**: Some visitors were confused about how the "booking-cooking-printing" sequence would work in a real environment without guidance.
      - **Scalability Concerns**: Questions were raised about handling multiple groups or larger kitchens, and the lack of a feature for users to upload their own activities.
  - **Team Reflection & Learning Outcomes**
    - Gained experience in translating research and prototypes into public-facing artifacts and managing live audience interaction.
    - Recognized the importance of simplifying communication for non-technical audiences, using effective visual aids, and observing spontaneous reactions as a valuable form of evaluation.

### 8. Ethical Consideration

- **[Ethical Consideration](ethical_considerations.md)**:
  - **Core Ethical Principle**
    - The design process is guided by the understanding that technology shapes social contexts and values, not just provides functionality.
    - The primary goal is to create a system that empowers users and strengthens community, rather than one that constrains them.
  - **Identified Ethical Risks**
    - **Privacy & Data**: Potential exposure of user activity (e.g., when and with whom someone is cooking).
    - **Social Pressure**: Anxiety or fear of rejection that may deter users from joining public cooking sessions.
    - **Representation & Inclusion**: Risk of overlooking cultural or dietary diversity in recipes or AI-generated content.
    - **Technological Dependence**: The system might replace natural, spontaneous face-to-face interaction.
    - **Public Visibility**: Public displays of activities could pressure users through unwanted social exposure.
  - **Implemented Mitigation Strategies**
    - **Transparency**: Clear communication about data use; no login required.
    - **Informed Consent**: Obtained for all research, with the option to withdraw at any time.
    - **Privacy Design**: No storage of identifiable data; all participation is anonymous and local.
    - **Inclusivity**: Designing events and materials to represent diverse cultures and food traditions.
    - **Empowerment**: User control over participation (voluntary scanning, sharing).
    - **Reflection**: The team held reflective sessions after each design iteration.
  - **Framework Application (Loke & Matthews)**
    - **Responsibility**: Continuous reflection on the system's impact on social behavior and community inclusion.
    - **Accountability**: Documentation of ethical decisions and justifications in the project wiki.
    - **Transparency**: Users are informed about how their information is generated and used.
    - **Inclusivity**: Interfaces and activities designed to be accessible to all students.
    - **Reflexivity**: The team acknowledges its own biases and revisits assumptions through feedback.
  - **Future Ethical Considerations**
    - **Data Ownership**: Grant users the ability to delete or export their data if accounts are introduced.
    - **Social Dynamics**: Ongoing observation of the system's effect on inclusivity and peer relationships.
    - **AI Illustration Bias**: Regular evaluation of AI-generated content to prevent cultural stereotypes.
    - **Public Exposure**: Reassess how event visibility impacts user comfort and autonomy.
    - **Sustainability**: Ensure all components align with environmentally responsible practices.
  - **Summary**
    - The ethical approach aims to go beyond "doing no harm" to actively empower users and build community.
    - By applying established frameworks, the team maintains a reflective process that prioritizes transparency, inclusivity, and respect for user privacy and autonomy.

### 9. Future Plan

- **[Future Plan](prototype_evaluation/Future_Plan.md)**:
  - **Goals**
    - Evolve the prototype into a more **adaptive and sustainable** system for real-world deployment.
    - Focus on enhancing **scalability, personalization, and long-term engagement**.
  - **System Refinement**
    - **Booking & User Identification:**
      - Introduce a lightweight, anonymous identification system via a QR code on the printed ticket.
      - Develop a mobile confirmation page linked to the QR code, allowing users to track bookings, receive updates, and cancel events.
      - Aims to increase user control and a sense of ownership without mandatory account registration.
    - **Preparation Information:**
      - Enhance activity detail pages and the new mobile confirmation page with clear instructions on required tools and ingredients.
  - **Social Interaction Enhancement**
    - **Encouraging Natural Conversation:**
      - Introduce contextual social prompts (like "Share a cooking tip") during the cooking activity to stimulate spontaneous conversation and reduce hesitation.
    - **Group Flexibility:**
      - Implement a "Join with a friend" or "Small group mode" feature to allow users to form micro-communities.
      - Addresses the need for comfort and autonomy by supporting smaller, familiar groups.
  - **System Expansion & Scalability**
    - Add a feature that allows users to **create and upload** their own cooking events.
  - **Evaluation & Real-World Testing**
    - Conduct **longitudinal evaluations** in real apartment environments.
    - Key metrics will include the system's impact on **social connectedness** over time and the **sustainability** of user participation and engagement.
  - **Long-Term Vision**
    - Transform NutriMate into a broader **social platform** for various communal activities (like workshops, hobbies, wellness events).
    - The ultimate vision is to design technology that **encourages face-to-face interaction**, using digital interfaces as tools to foster genuine human connection and strengthen community ties.

## Key Findings from the Process

- **Awareness & Context Awareness**
  - Students lack real time information on kitchen availability, discouraging use.

- **Collaboration & Mutual Learning**
  - Students want to cook together, learn new recipes, and exchange cultural knowledge, but lack easy channels to initiate.

- **Coordination & Articulation**
  - Current booking and communication processes are too complex, reducing motivation.

- **Conversation & Interaction**
  - Dorm kitchens lack natural, low pressure social interaction points.

- **Presence & Transience**
  - Idle moments (like waiting for the elevator) are underutilized as triggers for engagement.

- **Activity Traces**
  - Students want **public screens** for visibility (activity info) but **private mobile apps** for managing participation.

- **Synchronous / Asynchronous Modes**
  - Students seek both live activities (cooking sessions) and asynchronous contributions (recipe sharing, rating).

- **Context Specific, Location Aware Engagement**
  - Students are motivated when activities connect directly to their immediate environment (e.g., lobby screens, kitchen-specific prompts).

## Current Concept: Kitchen Activity Booking & Recipe Sharing System

- **Lobby based Booking Screen** (location aware and context sensitive)
- **Healthy Recipe Sharing** (upload from phone, linked to kitchen timetable)
- **AI Health Rating** (nutrition evaluation, 1–5 stars)
- **Kitchen Activity Timetable** (availability, participants, spots left)
- **Interactive Ticket System** (drag and print tickets as engagement and proof of participation)

## State of the Project

- Multiple user groups and motivations identified through iterative interviews.
- Core concept evolved from **abstract health focused app** to **concrete, social kitchen engagement system**.
- Documented user needs, pain points, and motivators consistently across iterations.
- Built **prototypes** reflecting real user insights, tested and refined.
- Process and findings are clearly documented in the [github](https://github.com/Richard-WYZ/DECO3500_DesignProject_Team_LateBu), linking interviews, analysis, design refinements, and prototypes.
