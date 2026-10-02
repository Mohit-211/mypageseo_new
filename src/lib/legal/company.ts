import type { LegalBlock } from "./types";

/** Legal entity details shared by every legal document. */
export const COMPANY = {
  brand: "Mypageseo",
  legalName: "Devereaux and Bhagat Private Limited",
  cin: "U73100UP2026PTC242365",
  gstin: "09AAMCD3858J1Z2",
  email: "contact@mypageseo.com",
  registeredOffice: [
    "UGF, Graphix Tower 2, Sector-62,",
    "Noida, Uttar Pradesh 201301, India",
  ],
  canadianMailingAddress: "82 Westmorland St, Fredericton, NB E3B 3L3, Canada",
} as const;

/** The "Contact us" block that closes both documents. */
export const companyContactBlocks: LegalBlock[] = [
  {
    type: "address",
    lines: [
      `**${COMPANY.legalName}**`,
      `**${COMPANY.brand}**`,
      "",
      "Registered Office:",
      ...COMPANY.registeredOffice,
      "",
      `Email: ${COMPANY.email}`,
      "",
      "Canadian Mailing Address:",
      COMPANY.canadianMailingAddress,
    ],
  },
];
