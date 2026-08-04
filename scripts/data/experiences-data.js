const tlrExperiences = [
  {
    id: 1,
    author: "مریم احمدی",
    role: "آموزگار پایه پنجم",
    location: "اصفهان",
    stage: "primary",
    grade: "5",
    category: "creative-teaching",
    title: "آموزش کسرها با بازارچه کوچک کلاسی",
    summary:
      "دانش‌آموزان در گروه‌های کوچک یک بازارچه ساختند و مفاهیم کسر را در یک موقعیت واقعی تمرین کردند.",
    keywords: [
      "ریاضی",
      "کسر",
      "یادگیری مشارکتی"
    ],
    createdAt: "2026-08-03",
    savedCount: 18,
    reactions: {
      inspiring: 32,
      creative: 41,
      practical: 26,
      transferable: 19
    }
  },
  {
    id: 2,
    author: "علی رضایی",
    role: "دبیر علوم دوره اول متوسطه",
    location: "شیراز",
    stage: "middle",
    grade: "8",
    category: "assessment",
    title: "خودارزیابی مفهومی در پایان درس علوم",
    summary:
      "دانش‌آموزان سه مفهوم اصلی درس را با زبان خود توضیح می‌دهند و میزان اطمینانشان را ثبت می‌کنند.",
    keywords: [
      "علوم",
      "خودارزیابی",
      "بازخورد"
    ],
    createdAt: "2026-08-02",
    savedCount: 13,
    reactions: {
      inspiring: 21,
      creative: 18,
      practical: 35,
      transferable: 28
    }
  },
  {
    id: 3,
    author: "نرگس محمدی",
    role: "دبیر ادبیات دوره دوم متوسطه",
    location: "تبریز",
    stage: "high",
    grade: "11",
    category: "educational-technology",
    title: "ساخت پادکست برای تحلیل شخصیت‌های ادبی",
    summary:
      "دانش‌آموزان در گروه‌های سه‌نفره یک شخصیت ادبی را تحلیل کردند و نتیجه را به شکل پادکست ارائه دادند.",
    keywords: [
      "ادبیات",
      "پادکست",
      "فناوری آموزشی"
    ],
    createdAt: "2026-07-30",
    savedCount: 27,
    reactions: {
      inspiring: 29,
      creative: 44,
      practical: 20,
      transferable: 24
    }
  }
];

const tlrTeachers = [
  {
    name: "مریم احمدی",
    role: "آموزگار ابتدایی",
    score: 118
  },
  {
    name: "نرگس محمدی",
    role: "دبیر ادبیات",
    score: 104
  },
  {
    name: "علی رضایی",
    role: "دبیر علوم",
    score: 96
  }
];

const tlrReactionTypes = [
  {
    key: "inspiring",
    emoji: "👏",
    label: "الهام‌بخش"
  },
  {
    key: "creative",
    emoji: "💡",
    label: "خلاقانه"
  },
  {
    key: "practical",
    emoji: "✨",
    label: "کاربردی"
  },
  {
    key: "transferable",
    emoji: "🤝",
    label: "قابل‌انتقال"
  }
];