export const PLAN_PRICING = {
  USD: {
    base: {
      monthly: 149,
      setup: 300,
    },
    standard: {
      monthly: 199,
      setup: 550,
    },
    elite: {
      monthly: 249,
      setup: 800,
    },
  },

  CAD: {
    base: {
      monthly: 199,
      setup: 400,
    },
    standard: {
      monthly: 249,
      setup: 650,
    },
    elite: {
      monthly: 299,
      setup: 900,
    },
  },
} as const;
