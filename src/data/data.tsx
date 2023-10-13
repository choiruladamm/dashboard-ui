import { Icons } from "@/components/Icons";

export const groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Alicia Koch",
        value: "personal",
      },
    ],
  },
  {
    label: "Teams",
    teams: [
      {
        label: "Acme Inc.",
        value: "acme-inc",
      },
      {
        label: "Monsters Inc.",
        value: "monsters",
      },
    ],
  },
];

export const overviewCard = [
  {
    title: "Total Revenue",
    icons: <Icons.dollar />,
    mainValue: "$45,231.89",
    desc: "+20.1% from last month",
  },
  {
    title: "Subscriptions",
    icons: <Icons.doubleUser />,
    mainValue: "+2350",
    desc: "+180.1% from last month",
  },
  {
    title: "Sales",
    icons: <Icons.cardMember />,
    mainValue: "+12,234",
    desc: "+19% from last month",
  },
  {
    title: "Active Now",
    icons: <Icons.pulse />,
    mainValue: "+573",
    desc: "+201 since last hour",
  },
];

export const overviewCart = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export const overviewSales = [
  {
    avatarImg: "/avatar.png",
    avatarFb: "SM",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    sale: "+$1,999.00",
  },
  {
    avatarImg: "/avatar.png",
    avatarFb: "JL",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    sale: "+$39.00",
  },
  {
    avatarImg: "/avatar.png",
    avatarFb: "IN",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    sale: "+$299.00",
  },
  {
    avatarImg: "/avatar.png",
    avatarFb: "WK",
    name: "William Kim",
    email: "sofia.davis@email.com",
    sale: "+$99.00",
  },
  {
    avatarImg: "/avatar.png",
    avatarFb: "SD",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    sale: "+$999.00",
  },
];
