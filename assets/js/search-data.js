// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Automation, data and ML work, mostly from my time at Gaura Travel. Internal details are kept high level on purpose.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Experience, education and skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Code on GitHub. Most of my production work lives in private repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "news-joined-gaura-travel-as-a-data-analyst-intern-and-part-time-data-analyst-and-began-designing-the-playwright-fastapi-n8n-and-php-mysql-automation-architecture",
          title: 'Joined Gaura Travel as a Data Analyst Intern and part-time Data Analyst, and...',
          description: "",
          section: "News",},{id: "news-moved-into-an-ongoing-part-time-data-analyst-role-at-gaura-travel-after-the-internship",
          title: 'Moved into an ongoing part-time Data Analyst role at Gaura Travel after the...',
          description: "",
          section: "News",},{id: "news-started-fine-tuning-modernbert-classifiers-to-turn-call-transcripts-into-live-customer-needs-profiles-for-human-agents",
          title: 'Started fine-tuning ModernBERT classifiers to turn call transcripts into live customer-needs profiles for...',
          description: "",
          section: "News",},{id: "news-now-building-skills-advancing-my-sql-data-and-machine-learning-work-through-projects-at-gaura-travel",
          title: 'Now building skills: advancing my SQL, data and machine learning work through projects...',
          description: "",
          section: "News",},{id: "news-now-reading-technology-books-including-designing-data-intensive-applications-alongside-database-internals-lectures",
          title: 'Now reading: technology books, including Designing Data-Intensive Applications, alongside database internals lectures.',
          description: "",
          section: "News",},{id: "news-now-learning-how-large-language-models-work-and-how-to-apply-them-well-in-automation-data-and-ml-work",
          title: 'Now learning: how large language models work and how to apply them well...',
          description: "",
          section: "News",},{id: "projects-internal-tools",
          title: 'Internal tools',
          description: "Invoice converters, a live flight board and reporting helpers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_internal_tools/";
            },},{id: "projects-home-lab-and-nas",
          title: 'Home lab and NAS',
          description: "Self-hosted n8n on a home NAS, reachable anywhere over Tailscale",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_home_lab/";
            },},{id: "projects-mx3s-ctl",
          title: 'mx3s-ctl',
          description: "A Rust controller for the Logitech MX Master 3S",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_mx3s_ctl/";
            },},{id: "projects-gignestmel",
          title: 'GigNestMel',
          description: "A capstone product supporting gig workers in Melbourne (Distinction)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_gignestmel/";
            },},{id: "projects-automation-platform",
          title: 'Automation platform',
          description: "A four-layer architecture behind 20+ production automations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_automation_platform/";
            },},{id: "projects-airline-group-booking-automations",
          title: 'Airline group-booking automations',
          description: "Air India, AirAsia and Singapore Airlines workflows across portals and Amadeus",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_airline_automations/";
            },},{id: "projects-attribution-and-customer-segmentation",
          title: 'Attribution and customer segmentation',
          description: "Sales attribution plus customer tagging across a large booking history",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_attribution_segmentation/";
            },},{id: "projects-workflow-monitoring",
          title: 'Workflow monitoring',
          description: "Execution tracking, a live dashboard and stall alerts for 80+ n8n workflows",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_workflow_monitoring/";
            },},{id: "projects-email-ingestion-pipelines",
          title: 'Email ingestion pipelines',
          description: "Outlook mailboxes turned into structured, searchable tables",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_email_ingestion/";
            },},{id: "projects-call-intelligence",
          title: 'Call intelligence',
          description: "Fine-tuned classifiers that brief human agents during live calls",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_call_intelligence/";
            },},{id: "projects-inventory-and-pricing-automation",
          title: 'Inventory and pricing automation',
          description: "Marketplace inventory sync and a rule-driven pricing engine",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_inventory_pricing/";
            },},{id: "projects-customer-support-agent",
          title: 'Customer support agent',
          description: "A CRM chatbot that answers real booking questions from live data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_support_agent/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Tushar-Faroque", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
