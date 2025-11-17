export type Locale = "ko" | "en" | "ja" | "zh";

export type CopyDictionary = {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
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
  contact: {
    description: string;
    email: string;
    github: string;
    form: string;
  };
  footer: string;
};

export const dictionaries: Record<Locale, CopyDictionary> = {
  ko: {
    hero: {
      title: "현재 존재하지 않는 것을 만드는 개발자 Maccrey",
      subtitle: "50세에 개발을 시작해 소셜 임팩트 프로젝트와 실용적인 앱을 만들어왔습니다.",
      cta: "대표 프로젝트 보기",
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
    contact: {
      description: "메일 또는 GitHub을 통해 언제든 협업을 제안해주세요.",
      email: "이메일 보내기",
      github: "GitHub 살펴보기",
      form: "폼으로 제안하기",
    },
    footer: "사람들의 삶을 바꾸는 소프트웨어를 만듭니다.",
  },
  en: {
    hero: {
      title: "Maccrey builds what does not exist yet",
      subtitle: "Started coding at 50 and ships social-impact software with measurable value.",
      cta: "View signature projects",
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
    contact: {
      description: "Reach out for HR screens, freelance work, or impact partnerships.",
      email: "Send an email",
      github: "Visit GitHub",
      form: "Submit via form",
    },
    footer: "Building software that improves people\'s lives.",
  },
  ja: {
    hero: {
      title: "まだ存在しない価値を形にする開発者 Maccrey",
      subtitle: "50歳で開発を始め、社会的インパクトのあるソフトウェアを届けています。",
      cta: "代表プロジェクト",
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
    contact: {
      description: "メールまたはGitHubでお気軽にご連絡ください。",
      email: "メールを送る",
      github: "GitHubを見る",
      form: "フォームに入力",
    },
    footer: "人の暮らしを良くするソフトウェアを作り続けます。",
  },
  zh: {
    hero: {
      title: "Maccrey 打造尚未存在的產品",
      subtitle: "50歲開始寫程式，專注於帶來社會影響的軟體。",
      cta: "查看重點專案",
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
    contact: {
      description: "歡迎透過 Email 或 GitHub 與我合作。",
      email: "寄送 Email",
      github: "查看 GitHub",
      form: "填寫表單",
    },
    footer: "打造改善生活的軟體。",
  },
};

export const locales: Locale[] = ["ko", "en", "ja", "zh"];
