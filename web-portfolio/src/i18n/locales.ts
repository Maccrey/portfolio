export type Locale = "ko" | "en" | "ja" | "zh";

type SkillCategoryKey = "learning" | "strong" | "usable";

export type CopyDictionary = {
  seo: Record<"home" | "about" | "projects" | "skills" | "writing" | "contact", { title: string; description: string }>;
  homePage: {
    strengthsLabel: string;
    strengths: Array<{ title: string; description: string }>;
    selectedWorkEyebrow: string;
    selectedWorkTitle: string;
    allProjects: string;
    buildLogEyebrow: string;
    buildLogTitle: string;
    buildLogDescription: string;
    buildLogCta: string;
    contactTitle: string;
    contactDescription: string;
    contactCta: string;
  };
  aboutPage: {
    howIWorkLabel: string;
    howIWorkTitle: string;
    howIWorkDescription: string;
    whatIBringLabel: string;
    whatIBringTitle: string;
    strengths: { mobile: string; web: string; problemSolving: string; collaboration: string };
    currentBuildLabel: string;
    currentBuildTitle: string;
    currentBuildDescription: string;
    seniorAppTitle: string;
    seniorAppDescription: string;
    familyTitle: string;
    familyDescription: string;
    engineeringTitle: string;
    engineeringDescription: string;
    seniorAppLabel: string;
    familyLabel: string;
    engineeringLabel: string;
    inDevelopment: string;
    launchTitle: string;
    launchDescription: string;
    launchCta: string;
    recentLaunchLabel: string;
    recentLaunchTitle: string;
    recentLaunchDescription: string;
    recentLaunchCta: string;
    projectsCta: string;
    contactCta: string;
  };
  writingPage: { badge: string; title: string; description: string };
  blog: {
    title: string;
    accent: string;
    description: string;
    updating: string;
    allPosts: string;
    loadError: string;
    readMore: string;
    sourceLanguage: string;
  };
  common: { menuToggle: string; themeToggle: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    featuredTitle: string;
    focusPoints: [string, string, string];
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
    kinoraAria: string;
    kinoraBadge: string;
    kinoraDescription: string;
    kinoraCta: string;
    buildLogCta: string;
  };
  footer: string;
};

export const dictionaries: Record<Locale, CopyDictionary> = {
  ko: {
    seo: {
      home: { title: "Flutter · 웹 제품 개발자 Maccrey 포트폴리오", description: "아이디어를 제품으로 만드는 개발자 Maccrey의 프로젝트, 기술 역량, KINORA 개발 이야기와 채용·협업 문의를 확인하세요." },
      about: { title: "개발자 소개와 KINORA 개발기", description: "50세에 개발을 시작한 Maccrey의 제품 개발 방식과 Flutter·Firebase 기반 가족 돌봄 서비스 KINORA의 개발 목표, 출시 알림을 확인하세요." },
      projects: { title: "프로젝트 사례", description: "Flutter 앱과 웹 제품을 기획하고 개발해 출시한 프로젝트 사례, 해결한 문제와 기술적 기여를 확인하세요." },
      skills: { title: "기술 역량", description: "Flutter, Firebase, 웹 제품 개발과 AI 연동 경험 및 현재 학습 중인 기술을 소개합니다." },
      writing: { title: "개발 기록과 문제 해결 과정", description: "50 year old flutter developer challenge 카테고리에서 Flutter, Firebase, AI 제품을 만들며 겪은 고민과 해결 과정을 읽어보세요." },
      contact: { title: "채용 · 개발 의뢰 · 협업 문의", description: "Maccrey와 정규직 채용, Flutter·웹 제품 개발, 기술 협업을 논의해보세요. 이메일과 문의 방법을 안내합니다." },
    },
    homePage: {
      strengthsLabel: "개발 강점",
      strengths: [
        { title: "기획부터 출시까지", description: "아이디어를 실제 서비스로 만들고 운영하며 개선합니다." },
        { title: "모바일과 웹 제품", description: "Flutter 앱부터 다국어 웹 서비스와 정적 사이트까지 구현합니다." },
        { title: "사용자 문제에 집중", description: "접근성, 데이터 보호, 실제 사용 흐름을 설계에 반영합니다." },
      ],
      selectedWorkEyebrow: "주요 작업", selectedWorkTitle: "실제로 공개하고 운영하는 제품", allProjects: "전체 프로젝트 보기",
      buildLogEyebrow: "개발 기록", buildLogTitle: "만드는 과정과 어려웠던 지점도 기록합니다", buildLogDescription: "현재 진행 중인 개발, 기술적 선택의 이유, 막혔던 문제와 해결 과정을 블로그에 남깁니다.", buildLogCta: "개발 기록 보기",
      contactTitle: "함께 만들 프로젝트를 찾고 계신가요?", contactDescription: "채용, 제품 개발, 기술 협업 이야기를 나눠요.", contactCta: "협업 문의하기",
    },
    aboutPage: {
      howIWorkLabel: "일하는 방식", howIWorkTitle: "기술보다 먼저, 사용자의 문제를 구체적으로 봅니다", howIWorkDescription: "요구사항을 작은 흐름으로 나누고, 동작하는 제품을 빠르게 만들며, 출시 후 실제 사용에서 발견한 문제를 다시 다룹니다. 접근성·개인정보·운영 가능성도 초기 설계에 포함합니다.",
      whatIBringLabel: "제가 기여하는 것", whatIBringTitle: "제품을 끝까지 책임지는 실행력", strengths: { mobile: "Flutter 앱과 Firebase 연동, 인증·데이터 흐름", web: "제품형 웹앱, 다국어 사이트, 정적 배포와 SEO", problemSolving: "막힌 이유와 검증 방법을 기록하고 재발을 줄이는 방식", collaboration: "불확실한 요구를 작은 결정과 확인 가능한 결과로 전환" },
      currentBuildLabel: "현재 개발 중 · Flutter · Firebase · AI", currentBuildTitle: "KINORA — 대화에서 시작하는 가족 돌봄", currentBuildDescription: "KINORA는 어르신이 AI 캐릭터와 자연스럽게 대화하며 식사, 수분 섭취, 복약, 수면, 통증, 기분 같은 일상을 돌아보고, 가족은 필요한 생활 변화와 안부를 확인하도록 돕는 서비스입니다. 감시를 늘리는 대신, 어르신의 자율성과 가족의 안심이 함께 지켜지는 경험을 만들고 있습니다.",
      seniorAppLabel: "어르신 앱", familyLabel: "가족 경험", engineeringLabel: "제품 엔지니어링", seniorAppTitle: "매일 쓰고 싶은 대화", seniorAppDescription: "캐릭터와의 대화를 통해 생활 상태를 부담 없이 표현하고, 이전 대화 맥락을 이어갈 수 있도록 설계합니다.", familyTitle: "필요한 변화만 전달", familyDescription: "가족에게 모든 대화를 공개하지 않고, 동의와 관계 범위 안에서 안부 확인에 필요한 요약을 전달하는 흐름을 고민합니다.", engineeringTitle: "제품과 안전을 함께 설계", engineeringDescription: "Flutter·Firebase 제품 구현과 함께 대화 기억, 데이터 최소화, 동의, 알림의 정확성과 실패 상황을 계속 검토합니다.",
      inDevelopment: "출시 준비 중", launchTitle: "KINORA의 출시 소식을 가장 먼저 받아보세요", launchDescription: "제품 소개와 출시 알림 등록은 KINORA 공식 페이지에서 확인할 수 있습니다.", launchCta: "KINORA 출시 알림 등록",
      recentLaunchLabel: "최근 출시 · 2026", recentLaunchTitle: "maccrey.com — 모두의 박물관", recentLaunchDescription: "3D 마을을 걸으며 블록체인, 금융, 성수 등 여러 주제의 디지털 박물관을 둘러보는 공개 웹 프로젝트입니다. 지식 콘텐츠를 전시처럼 발견하고 탐험하는 경험으로 바꾸는 데 집중했습니다.", recentLaunchCta: "박물관 둘러보기", projectsCta: "프로젝트 사례 보기", contactCta: "채용·개발 의뢰 문의",
    },
    writingPage: { badge: "BUILD LOG · TISTORY", title: "개발 과정과 문제 해결 기록", description: "완성된 결과뿐 아니라 만들면서 마주친 질문, 선택의 이유, 시행착오와 배운 점을 씁니다. 아래 글은 지정한 개발 도전기 카테고리만 가져옵니다." },
    blog: { title: "개발 기록", accent: "& 고민", description: "카테고리에서 진행 중인 개발과 문제 해결 기록을 소개합니다.", updating: "새 글 확인 중…", allPosts: "티스토리에서 전체 글 보기", loadError: "글을 불러오지 못했습니다. 티스토리에서 기록을 확인해주세요.", readMore: "자세히 읽기", sourceLanguage: "블로그 원문은 한국어로 작성되었습니다." },
    common: { menuToggle: "메뉴 열기", themeToggle: "테마 전환" },
    hero: {
      badge: "Impact Builder",
      title: "아이디어를 실제 제품으로 완성하는 개발자, Maccrey",
      subtitle: "50세에 개발을 시작해 Flutter 앱과 웹 서비스를 직접 기획·개발·출시해왔습니다. 이제는 사용자 문제를 끝까지 해결하는 제품 개발과 팀의 다음 단계를 함께하고 싶습니다.",
      cta: "만든 제품 살펴보기",
      featuredTitle: "대표 프로젝트",
      focusPoints: ["Flutter · Firebase", "웹 · AI 제품", "기획 · 개발 · 출시"],
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
      kinoraAria: "KINORA 출시 알림",
      kinoraBadge: "KINORA · 출시 준비 중",
      kinoraDescription: "출시 알림을 등록하고 KINORA의 소식을 받아보세요.",
      kinoraCta: "출시 알림 등록",
      buildLogCta: "개발 기록 보기",
    },
    footer: "사람들의 삶을 바꾸는 소프트웨어를 만듭니다.",
  },
  en: {
    seo: {
      home: { title: "Flutter & Web Product Developer | Maccrey", description: "Explore Maccrey's shipped products, Flutter and web development skills, KINORA build notes, and opportunities for hiring or collaboration." },
      about: { title: "About Maccrey and the KINORA Build", description: "Learn how Maccrey, who began coding at 50, builds products and is developing KINORA, a Flutter and Firebase family care service with launch updates." },
      projects: { title: "Selected Product Projects", description: "Explore shipped Flutter apps and web products, the problems they solve, and Maccrey's engineering contributions." },
      skills: { title: "Technical Skills", description: "Explore Maccrey's experience with Flutter, Firebase, web products, AI integrations, and technologies currently being learned." },
      writing: { title: "Development Notes and Problem Solving", description: "Read build notes from the 50 year old flutter developer challenge category, including decisions and lessons from Flutter, Firebase, and AI projects." },
      contact: { title: "Hiring, Product Development, and Collaboration", description: "Discuss a full-time role, Flutter or web product work, or technical collaboration with Maccrey." },
    },
    homePage: {
      strengthsLabel: "Engineering strengths",
      strengths: [
        { title: "From planning to launch", description: "I turn ideas into working services, operate them, and improve them over time." },
        { title: "Mobile and web products", description: "I build everything from Flutter apps to multilingual web products and static sites." },
        { title: "Focused on user problems", description: "Accessibility, data protection, and real user flows shape my design decisions." },
      ],
      selectedWorkEyebrow: "SELECTED WORK", selectedWorkTitle: "Products I have shipped and operate", allProjects: "View all projects",
      buildLogEyebrow: "BUILD LOG", buildLogTitle: "I document the hard parts of building, too", buildLogDescription: "I write about current work, why I chose an approach, where I got stuck, and how I resolved it.", buildLogCta: "Read development notes",
      contactTitle: "Looking for a developer to build with?", contactDescription: "Let's talk about a role, a product, or a technical partnership.", contactCta: "Start a conversation",
    },
    aboutPage: {
      howIWorkLabel: "HOW I WORK", howIWorkTitle: "Understand the user's problem before choosing technology", howIWorkDescription: "I break requirements into small flows, build something usable quickly, and revisit problems found after launch. Accessibility, privacy, and operability are part of the initial design.",
      whatIBringLabel: "WHAT I BRING", whatIBringTitle: "Ownership from first idea through ongoing product work", strengths: { mobile: "Flutter apps, Firebase integration, authentication, and data flows", web: "Product web apps, multilingual sites, static deployment, and SEO", problemSolving: "Documenting root causes and verification to prevent repeat failures", collaboration: "Turning unclear requests into small decisions and reviewable outcomes" },
      currentBuildLabel: "CURRENT BUILD · FLUTTER · FIREBASE · AI", currentBuildTitle: "KINORA — family care that starts with conversation", currentBuildDescription: "KINORA helps older adults reflect on everyday life—meals, hydration, medication, sleep, pain, and mood—through natural conversations with an AI character. Family members can follow relevant changes and check in. The goal is to support peace of mind while preserving independence, not to increase monitoring.",
      seniorAppLabel: "SENIOR APP", familyLabel: "FAMILY EXPERIENCE", engineeringLabel: "PRODUCT ENGINEERING", seniorAppTitle: "A conversation worth returning to", seniorAppDescription: "The senior app makes it easy to share how the day is going and continue with context from earlier conversations.", familyTitle: "Share only the changes that matter", familyDescription: "Rather than expose every conversation, the family experience shares useful check-in summaries within the bounds of consent and relationships.", engineeringTitle: "Design the product and its safeguards together", engineeringDescription: "Alongside Flutter and Firebase implementation, I review conversation memory, data minimization, consent, notification accuracy, and failure cases.",
      inDevelopment: "In development", launchTitle: "Get KINORA launch updates first", launchDescription: "Visit the official KINORA page to learn about the product and sign up for launch updates.", launchCta: "Get KINORA launch updates",
      recentLaunchLabel: "RECENT LAUNCH · 2026", recentLaunchTitle: "maccrey.com — Museum for Everyone", recentLaunchDescription: "A public web project where visitors walk through a 3D village and explore digital museums about blockchain, finance, Seongsu, and more. It turns learning into an exhibit visitors can discover and explore.", recentLaunchCta: "Explore the museum", projectsCta: "Explore project case studies", contactCta: "Discuss hiring or product work",
    },
    writingPage: { badge: "BUILD LOG · TISTORY", title: "Development notes and problem solving", description: "I share the questions, trade-offs, failed attempts, and lessons behind the finished products. Posts below are limited to the selected developer challenge category." },
    blog: { title: "Development notes", accent: "& challenges", description: "Build notes and problem-solving stories from this category.", updating: "Checking for new posts…", allPosts: "View all posts on Tistory", loadError: "Posts could not be loaded. You can read the archive on Tistory.", readMore: "Read more", sourceLanguage: "Original blog posts are written in Korean." },
    common: { menuToggle: "Open menu", themeToggle: "Toggle theme" },
    hero: {
      badge: "Impact Builder",
      title: "Maccrey turns ideas into products people can use",
      subtitle: "I started coding at 50 and have planned, built, and launched Flutter apps and web products. I am ready to help teams solve real user problems.",
      cta: "Explore selected work",
      featuredTitle: "Featured Projects",
      focusPoints: ["Flutter · Firebase", "Web · AI products", "Plan · build · launch"],
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
      kinoraAria: "KINORA launch updates",
      kinoraBadge: "KINORA · In development",
      kinoraDescription: "Sign up to receive KINORA launch updates.",
      kinoraCta: "Get launch updates",
      buildLogCta: "Read development notes",
    },
    footer: "Building software that improves people's lives.",
  },
  ja: {
    seo: {
      home: { title: "Flutter・Webプロダクト開発者 Maccrey", description: "Maccreyが公開したプロダクト、Flutter・Web開発の経験、KINORAの開発記録、採用・協業の情報をご覧ください。" },
      about: { title: "開発者紹介とKINORA開発記録", description: "50歳で開発を始めたMaccreyのものづくりと、Flutter・Firebaseで開発中の家族ケアサービスKINORAについて紹介します。" },
      projects: { title: "プロダクト開発事例", description: "公開済みのFlutterアプリとWebプロダクト、解決した課題、開発への貢献をご覧ください。" },
      skills: { title: "技術スキル", description: "Flutter、Firebase、Webプロダクト、AI連携の経験と現在学習中の技術を紹介します。" },
      writing: { title: "開発記録と問題解決", description: "50 year old flutter developer challengeカテゴリから、Flutter・Firebase・AIプロダクトの開発で得た工夫や学びを紹介します。" },
      contact: { title: "採用・開発依頼・協業のご相談", description: "正社員採用、Flutter・Web開発、技術協業についてMaccreyにご相談ください。" },
    },
    homePage: {
      strengthsLabel: "開発の強み",
      strengths: [
        { title: "企画からリリースまで", description: "アイデアをサービスにし、運用しながら改善します。" },
        { title: "モバイルとWeb", description: "Flutterアプリから多言語Webサービス、静的サイトまで開発します。" },
        { title: "ユーザーの課題に集中", description: "アクセシビリティ、データ保護、実際の利用フローを設計に反映します。" },
      ],
      selectedWorkEyebrow: "公開したプロダクト", selectedWorkTitle: "公開・運用しているプロダクト", allProjects: "すべてのプロジェクトを見る",
      buildLogEyebrow: "開発記録", buildLogTitle: "開発の過程や難しかった点も記録します", buildLogDescription: "現在の開発、技術選択の理由、行き詰まった問題と解決方法をブログにまとめています。", buildLogCta: "開発記録を読む",
      contactTitle: "一緒にプロジェクトを作りませんか？", contactDescription: "採用、プロダクト開発、技術協業についてお話ししましょう。", contactCta: "協業について問い合わせる",
    },
    aboutPage: {
      howIWorkLabel: "仕事の進め方", howIWorkTitle: "技術を選ぶ前に、ユーザーの課題を具体的に捉える", howIWorkDescription: "要件を小さなフローに分け、動くプロダクトを素早く作り、公開後に見つかった課題にも取り組みます。アクセシビリティ、プライバシー、運用性も初期設計に含めます。",
      whatIBringLabel: "提供できること", whatIBringTitle: "アイデアから継続的な改善まで責任を持つ実行力", strengths: { mobile: "Flutterアプリ、Firebase連携、認証とデータフロー", web: "Webアプリ、多言語サイト、静的デプロイとSEO", problemSolving: "原因と検証方法を記録し、同じ問題の再発を防ぐ", collaboration: "曖昧な要望を小さな判断と確認可能な成果に変える" },
      currentBuildLabel: "開発中 · Flutter · Firebase · AI", currentBuildTitle: "KINORA — 会話から始まる家族ケア", currentBuildDescription: "KINORAは、高齢者がAIキャラクターとの自然な会話を通じて食事、水分、服薬、睡眠、痛み、気分など日々の生活を振り返り、家族が必要な変化を知って安否を確認できるサービスです。見守りを強めるのではなく、本人の自立と家族の安心が両立する体験を目指しています。",
      seniorAppLabel: "高齢者向けアプリ", familyLabel: "家族向け体験", engineeringLabel: "プロダクト開発", seniorAppTitle: "毎日使いたくなる会話", seniorAppDescription: "日々の様子を気軽に話し、以前の会話の流れを引き継げるよう設計しています。", familyTitle: "必要な変化だけを共有", familyDescription: "会話をすべて家族に見せず、同意と関係性の範囲内で安否確認に役立つ要約を共有します。", engineeringTitle: "プロダクトと安全性を一緒に設計", engineeringDescription: "Flutter・Firebaseの実装とともに、会話の記憶、データ最小化、同意、通知の正確さや障害時の動作を検討しています。",
      inDevelopment: "開発中", launchTitle: "KINORAのリリース情報をいち早く受け取る", launchDescription: "サービスの詳細とリリース通知の登録はKINORA公式ページをご覧ください。", launchCta: "KINORAのリリース通知に登録",
      recentLaunchLabel: "最近公開 · 2026", recentLaunchTitle: "maccrey.com — みんなの博物館", recentLaunchDescription: "3Dの街を歩き、ブロックチェーン、金融、聖水などのデジタル博物館を巡る公開Webプロジェクトです。知識を展示のように発見し、探索できる体験を目指しました。", recentLaunchCta: "博物館を見る", projectsCta: "プロジェクト事例を見る", contactCta: "採用・開発の相談をする",
    },
    writingPage: { badge: "BUILD LOG · TISTORY", title: "開発の過程と問題解決の記録", description: "完成した成果だけでなく、開発中に直面した疑問、選択の理由、試行錯誤や学びを記録しています。表示する記事は指定した開発チャレンジカテゴリに限定しています。" },
    blog: { title: "開発記録", accent: "と課題", description: "このカテゴリから開発の進捗と問題解決の記録を紹介します。", updating: "新しい記事を確認中…", allPosts: "Tistoryですべての記事を見る", loadError: "記事を読み込めませんでした。Tistoryの記録をご確認ください。", readMore: "続きを読む", sourceLanguage: "ブログ記事の原文は韓国語です。" },
    common: { menuToggle: "メニューを開く", themeToggle: "テーマを切り替え" },
    hero: {
      badge: "インパクトビルダー",
      title: "まだ存在しない価値を形にする開発者 Maccrey",
      subtitle: "50歳で開発を始め、社会的インパクトのあるソフトウェアを届けています。",
      cta: "代表プロジェクトを見る",
      featuredTitle: "代表プロジェクト",
      focusPoints: ["Flutter · Firebase", "Web · AIプロダクト", "企画 · 開発 · 公開"],
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
      kinoraAria: "KINORAリリース通知",
      kinoraBadge: "KINORA · 開発中",
      kinoraDescription: "リリース通知に登録してKINORAの最新情報を受け取りましょう。",
      kinoraCta: "リリース通知に登録",
      buildLogCta: "開発記録を読む",
    },
    footer: "人の暮らしを良くするソフトウェアを作り続けます。",
  },
  zh: {
    seo: {
      home: { title: "Flutter 與 Web 產品開發者 Maccrey", description: "探索 Maccrey 已上線的產品、Flutter 與 Web 開發能力、KINORA 開發紀錄，以及聘用與合作資訊。" },
      about: { title: "開發者介紹與 KINORA 開發紀錄", description: "了解 50 歲開始寫程式的 Maccrey 如何打造產品，以及以 Flutter 和 Firebase 開發的家庭照護服務 KINORA。" },
      projects: { title: "產品開發案例", description: "瀏覽已推出的 Flutter 應用程式與網頁產品、解決的問題，以及 Maccrey 的工程貢獻。" },
      skills: { title: "技術能力", description: "了解 Flutter、Firebase、網頁產品與 AI 整合經驗，以及目前學習中的技術。" },
      writing: { title: "開發紀錄與問題解決", description: "閱讀 50 year old flutter developer challenge 分類中的 Flutter、Firebase 與 AI 產品開發心得和解決方式。" },
      contact: { title: "聘用、產品開發與合作洽詢", description: "歡迎與 Maccrey 討論正職聘用、Flutter 或網頁產品開發及技術合作。" },
    },
    homePage: {
      strengthsLabel: "開發優勢",
      strengths: [
        { title: "從規劃到上線", description: "將想法做成實際服務，持續營運並改善。" },
        { title: "行動與網頁產品", description: "從 Flutter App 到多語網站與靜態網站皆能實作。" },
        { title: "以使用者問題為核心", description: "將無障礙、資料保護與實際使用流程納入設計。" },
      ],
      selectedWorkEyebrow: "精選作品", selectedWorkTitle: "已公開並持續營運的產品", allProjects: "查看所有專案",
      buildLogEyebrow: "開發紀錄", buildLogTitle: "也記錄打造產品時遇到的難題", buildLogDescription: "分享目前的開發進度、技術選擇原因、遇到的阻礙與解決過程。", buildLogCta: "閱讀開發紀錄",
      contactTitle: "正在尋找合作開發的夥伴嗎？", contactDescription: "歡迎交流聘用、產品開發或技術合作。", contactCta: "聯絡合作",
    },
    aboutPage: {
      howIWorkLabel: "工作方式", howIWorkTitle: "先釐清使用者問題，再選擇技術", howIWorkDescription: "將需求拆成小流程，快速打造可運作的產品，並持續處理上線後發現的問題。無障礙、隱私與可維運性也會納入初期設計。",
      whatIBringLabel: "我能帶來的價值", whatIBringTitle: "從構想到持續改善，對產品負責到底", strengths: { mobile: "Flutter App、Firebase 整合、驗證與資料流程", web: "產品型網站、多語網站、靜態部署與 SEO", problemSolving: "記錄根因與驗證方式，降低問題再次發生", collaboration: "把不明確需求拆成小決策與可檢視成果" },
      currentBuildLabel: "目前開發中 · Flutter · Firebase · AI", currentBuildTitle: "KINORA — 從對話開始的家庭照護", currentBuildDescription: "KINORA 讓長者透過與 AI 角色自然對話，回顧飲食、飲水、服藥、睡眠、疼痛與心情；家人則能了解重要變化並關心近況。產品希望兼顧長者自主與家人的安心，而不是增加監控。",
      seniorAppLabel: "長者 App", familyLabel: "家庭體驗", engineeringLabel: "產品工程", seniorAppTitle: "讓人想每天使用的對話", seniorAppDescription: "讓長者輕鬆分享日常，也能延續先前對話的脈絡。", familyTitle: "只分享重要變化", familyDescription: "不公開所有對話，而是在同意與關係範圍內，提供關心近況所需的摘要。", engineeringTitle: "同步設計產品與安全性", engineeringDescription: "除了 Flutter 與 Firebase 實作，也持續檢視對話記憶、資料最小化、同意、通知準確性與失敗情境。",
      inDevelopment: "開發中", launchTitle: "搶先接收 KINORA 上線消息", launchDescription: "產品介紹與上線通知登記請前往 KINORA 官方網站。", launchCta: "登記 KINORA 上線通知",
      recentLaunchLabel: "近期上線 · 2026", recentLaunchTitle: "maccrey.com — 大家的博物館", recentLaunchDescription: "一個公開網頁專案，讓訪客漫步 3D 城鎮，探索區塊鏈、金融、聖水等主題的數位博物館，將知識內容變成可探索的展覽體驗。", recentLaunchCta: "探索博物館", projectsCta: "查看專案案例", contactCta: "洽談聘用或開發合作",
    },
    writingPage: { badge: "BUILD LOG · TISTORY", title: "開發過程與問題解決紀錄", description: "除了完成成果，也記錄開發時遇到的問題、選擇理由、嘗試與學習。以下文章只顯示指定的開發挑戰分類。" },
    blog: { title: "開發紀錄", accent: "與挑戰", description: "從此分類分享開發進度與問題解決過程。", updating: "正在檢查新文章…", allPosts: "在 Tistory 查看所有文章", loadError: "無法載入文章，請前往 Tistory 查看紀錄。", readMore: "閱讀更多", sourceLanguage: "部落格原文以韓文撰寫。" },
    common: { menuToggle: "開啟選單", themeToggle: "切換主題" },
    hero: {
      badge: "Impact Builder",
      title: "Maccrey 打造尚未存在的產品",
      subtitle: "50歲開始寫程式，專注於帶來社會影響的軟體。",
      cta: "查看重點專案",
      featuredTitle: "代表專案",
      focusPoints: ["Flutter · Firebase", "Web · AI 產品", "規劃 · 開發 · 上線"],
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
      kinoraAria: "KINORA 上線通知",
      kinoraBadge: "KINORA · 開發中",
      kinoraDescription: "登記上線通知，接收 KINORA 最新消息。",
      kinoraCta: "登記上線通知",
      buildLogCta: "閱讀開發紀錄",
    },
    footer: "打造改善生活的軟體。",
  },
};

export const locales: Locale[] = ["ko", "en", "ja", "zh"];
