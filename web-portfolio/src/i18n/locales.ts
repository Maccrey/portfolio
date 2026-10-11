export type Locale = "ko" | "en" | "ja" | "zh";

type SkillCategoryKey = "learning" | "strong" | "usable";

export type CopyDictionary = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    featuredTitle: string;
  };
  nav: {
    home: string;
    projects: string;
    blog: string;
    skills: string;
    about: string;
    contact: string;
  };
  sections: {
    projects: string;
    skills: string;
    contact: string;
  };
  pages: {
    projects: {
      badge: string;
      description: string;
    };
    skills: {
      badge: string;
      description: string;
    };
    contact: {
      badge: string;
    };
    about: { badge: string; title: string; description: string };
  };
  contact: {
    description: string;
    email: string;
    github: string;
    form: string;
    directEmail: string;
  };
  skillsSection: {
    categories: Record<SkillCategoryKey, string>;
    countLabel: string;
  };
  projectCard: {
    status: {
      live: string;
      prototype: string;
      inDevelopment: string;
    };
    detailCta: string;
  };
  projectDetail: {
    labels: {
      problem: string;
      audience: string;
      contribution: string;
      impact: string;
    };
    stack: string;
    highlights: string;
  };
  footer: string;
};

export const dictionaries: Record<Locale, CopyDictionary> = {
  ko: {
    hero: {
      badge: "Impact Builder",
      title: "아이디어를 실제 제품으로 완성하는 개발자, Maccrey",
      subtitle: "50세에 개발을 시작해 Flutter 앱과 웹 서비스를 직접 기획·개발·출시해왔습니다. 이제는 사용자 문제를 끝까지 해결하는 제품 개발과 팀의 다음 단계를 함께하고 싶습니다.",
      cta: "만든 제품 살펴보기",
      featuredTitle: "대표 프로젝트",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      blog: "개발 기록",
      skills: "기술 역량",
      about: "소개",
      contact: "문의",
    },
    sections: {
      projects: "프로젝트",
      skills: "스킬 & 성장",
      contact: "연락하기",
    },
    pages: {
      projects: {
        badge: "Projects",
        description: "프로젝트마다 문제 정의, 대상 사용자, 기여도를 명확히 정리했습니다.",
      },
      skills: {
        badge: "Skills",
        description: "배우는 기술, 강점 기술, 즉시 투입 가능한 기술을 구분해 성장 방향을 설명합니다.",
      },
      contact: {
        badge: "Contact",
      },
      about: { badge: "ABOUT MACCREY", title: "문제를 발견하고 끝까지 제품으로 만드는 개발자", description: "50세에 개발을 시작한 뒤 아이디어를 실제 사용 가능한 서비스로 연결해왔습니다. 기획부터 구현, 출시, 운영 중의 개선까지 직접 경험하며 배운 점을 기록합니다." },
    },
    contact: {
      description: "정규직 채용, Flutter·웹 제품 개발 의뢰, 기술 협업을 환영합니다. 문제와 목표를 간단히 알려주시면 함께 범위와 다음 단계를 이야기하겠습니다.",
      email: "이메일 보내기",
      github: "GitHub 살펴보기",
      form: "폼으로 제안하기",
      directEmail: "직접 메일 보내기",
    },
    skillsSection: {
      categories: {
        learning: "현재 배우는 기술",
        strong: "강점 기술",
        usable: "사용 가능 기술",
      },
      countLabel: "{{count}}개 스킬",
    },
    projectCard: {
      status: {
        live: "운영 중",
        prototype: "프로토타입",
        inDevelopment: "개발 중",
      },
      detailCta: "자세히 보기",
    },
    projectDetail: {
      labels: {
        problem: "문제 정의",
        audience: "대상 사용자",
        contribution: "기여도",
        impact: "임팩트",
      },
      stack: "기술 스택",
      highlights: "하이라이트",
    },
    footer: "사람들의 삶을 바꾸는 소프트웨어를 만듭니다.",
  },
  en: {
    hero: {
      badge: "Impact Builder",
      title: "Maccrey turns ideas into products people can use",
      subtitle: "I started coding at 50 and have planned, built, and launched Flutter apps and web products. I am ready to help teams solve real user problems.",
      cta: "Explore selected work",
      featuredTitle: "Featured Projects",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      blog: "Blog",
      skills: "Skills",
      about: "About",
      contact: "Contact",
    },
    sections: {
      projects: "Projects",
      skills: "Skills & Growth",
      contact: "Contact",
    },
    pages: {
      projects: {
        badge: "Projects",
        description: "Each project documents the problem, audience, and contribution clearly.",
      },
      skills: {
        badge: "Skills",
        description: "I separate learning, strong, and ready-to-ship skills to show growth focus.",
      },
      contact: {
        badge: "Contact",
      },
      about: { badge: "ABOUT MACCREY", title: "A developer who takes problems from idea to product", description: "Since starting to code at 50, I have turned ideas into usable services and learned through planning, implementation, launch, and iteration." },
    },
    contact: {
      description: "Open to full-time roles, Flutter and web product engagements, and technical partnerships. Share the problem and goal, and we can discuss scope and next steps.",
      email: "Send an email",
      github: "Visit GitHub",
      form: "Submit via form",
      directEmail: "Email me directly",
    },
    skillsSection: {
      categories: {
        learning: "Currently learning",
        strong: "Core strengths",
        usable: "Ready to apply",
      },
      countLabel: "{{count}} skills",
    },
    projectCard: {
      status: {
        live: "Live",
        prototype: "Prototype",
        inDevelopment: "In development",
      },
      detailCta: "View details",
    },
    projectDetail: {
      labels: {
        problem: "Problem",
        audience: "Audience",
        contribution: "Contribution",
        impact: "Impact",
      },
      stack: "Tech stack",
      highlights: "Highlights",
    },
    footer: "Building software that improves people's lives.",
  },
  ja: {
    hero: {
      badge: "インパクトビルダー",
      title: "まだ存在しない価値を形にする開発者 Maccrey",
      subtitle: "50歳で開発を始め、社会的インパクトのあるソフトウェアを届けています。",
      cta: "代表プロジェクトを見る",
      featuredTitle: "代表プロジェクト",
    },
    nav: {
      home: "ホーム",
      projects: "プロジェクト",
      blog: "ブログ",
      skills: "スキル",
      about: "プロフィール",
      contact: "連絡先",
    },
    sections: {
      projects: "プロジェクト",
      skills: "スキルと成長",
      contact: "コンタクト",
    },
    pages: {
      projects: {
        badge: "Projects",
        description: "各プロジェクトの課題・対象・貢献内容を明確に整理しています。",
      },
      skills: {
        badge: "Skills",
        description: "学習中・強み・即投入可能なスキルを分けて成長の方向性を示します。",
      },
      contact: {
        badge: "Contact",
      },
      about: { badge: "ABOUT MACCREY", title: "課題を見つけ、製品として最後まで形にする開発者", description: "50歳で開発を始めて以来、アイデアを実際に使えるサービスへつなげてきました。企画から実装、公開、改善までの経験を記録しています。" },
    },
    contact: {
      description: "メールまたはGitHubでお気軽にご連絡ください。",
      email: "メールを送る",
      github: "GitHubを見る",
      form: "フォームに入力",
      directEmail: "メールで直接連絡",
    },
    skillsSection: {
      categories: {
        learning: "学習中のスキル",
        strong: "強みのスキル",
        usable: "即戦力スキル",
      },
      countLabel: "全{{count}}スキル",
    },
    projectCard: {
      status: {
        live: "運用中",
        prototype: "プロトタイプ",
        inDevelopment: "開発中",
      },
      detailCta: "詳しく見る",
    },
    projectDetail: {
      labels: {
        problem: "課題",
        audience: "対象",
        contribution: "担当領域",
        impact: "成果",
      },
      stack: "技術スタック",
      highlights: "ハイライト",
    },
    footer: "人の暮らしを良くするソフトウェアを作り続けます。",
  },
  zh: {
    hero: {
      badge: "Impact Builder",
      title: "Maccrey 打造尚未存在的產品",
      subtitle: "50歲開始寫程式，專注於帶來社會影響的軟體。",
      cta: "查看重點專案",
      featuredTitle: "代表專案",
    },
    nav: {
      home: "首頁",
      projects: "專案",
      blog: "部落格",
      skills: "技能",
      about: "關於我",
      contact: "聯絡",
    },
    sections: {
      projects: "專案",
      skills: "技能與成長",
      contact: "聯絡",
    },
    pages: {
      projects: {
        badge: "Projects",
        description: "每個專案都清楚說明問題、使用者與貢獻內容。",
      },
      skills: {
        badge: "Skills",
        description: "區分學習中、核心、可立即投入的技能，展現成長方向。",
      },
      contact: {
        badge: "Contact",
      },
      about: { badge: "ABOUT MACCREY", title: "從發現問題到完成產品的開發者", description: "50歲開始寫程式以來，我持續將想法轉化為可實際使用的服務，並記錄規劃、開發、上線與改進的經驗。" },
    },
    contact: {
      description: "歡迎透過 Email 或 GitHub 與我合作。",
      email: "寄送 Email",
      github: "查看 GitHub",
      form: "填寫表單",
      directEmail: "直接寄信",
    },
    skillsSection: {
      categories: {
        learning: "學習中的技能",
        strong: "核心技能",
        usable: "立即可用",
      },
      countLabel: "{{count}} 項技能",
    },
    projectCard: {
      status: {
        live: "上線中",
        prototype: "原型",
        inDevelopment: "開發中",
      },
      detailCta: "查看更多",
    },
    projectDetail: {
      labels: {
        problem: "問題",
        audience: "目標族群",
        contribution: "貢獻",
        impact: "成效",
      },
      stack: "技術堆疊",
      highlights: "亮點",
    },
    footer: "打造改善生活的軟體。",
  },
};

export const locales: Locale[] = ["ko", "en", "ja", "zh"];
