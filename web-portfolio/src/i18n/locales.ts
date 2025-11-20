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
    skills: string;
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
      title: "현재 존재하지 않는 것을 만드는 개발자 Maccrey",
      subtitle: "50세에 개발을 시작해 소셜 임팩트 프로젝트와 실용적인 앱을 만들어왔습니다.",
      cta: "대표 프로젝트 보기",
      featuredTitle: "대표 프로젝트",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
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
    },
    contact: {
      description: "메일 또는 GitHub을 통해 언제든 협업을 제안해주세요.",
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
      title: "Maccrey builds what does not exist yet",
      subtitle: "Started coding at 50 and ships social-impact software with measurable value.",
      cta: "View signature projects",
      featuredTitle: "Featured Projects",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
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
    },
    contact: {
      description: "Reach out for HR screens, freelance work, or impact partnerships.",
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
      skills: "スキル",
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
      skills: "技能",
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
