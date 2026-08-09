/**
 * CareSync marketing copy — derived from the user guide and verified app source.
 *
 * NEVER claim: cloud sync, automatic backups, internet-based operation,
 * encrypted network traffic, mobile app, automatic WhatsApp attachments,
 * unlimited computers, or features not in the product.
 */

export type ContactInfo = {
  name: string | null;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  pricingUrl: string | null;
  demoBookingUrl: string | null;
};

export const contact: ContactInfo = {
  name: "Fahad Rauf",
  phone: "03371724148",
  whatsapp: null,
  email: "fahadrauf1997@gmail.com",
  pricingUrl: null,
  demoBookingUrl: null,
};

export const footerCredit = "Built with care for doctors by Fahad Rauf";

export const demoVideo: { src: string | null; poster: string } = {
  src: "/videos/demo.mp4",
  poster: "/screens/dashboard.png",
};

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#consultation", label: "Workflow" },
  { href: "#roles", label: "Roles" },
  { href: "#security", label: "Security" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  eyebrow: "Complete clinic management for eye clinics",
  title: "CareSync",
  headline: "Your Eye Clinic. In Sync.",
  description:
    "A complete clinic management system built for modern eye clinics — from patient records and examinations to prescriptions, surgeries, billing and finances.",
  primaryCta: "Watch Demo",
  secondaryCta: "Explore CareSync",
};

export const philosophy = {
  title: "Everything your clinic needs. In one place.",
  points: [
    {
      title: "Scattered records",
      description:
        "Patient details, examination findings, prescriptions, bills and surgery notes often live in separate folders, spreadsheets or paper files.",
    },
    {
      title: "Disconnected workflows",
      description:
        "Clinical work, spectacle prescriptions, document storage and finance rarely share the same system — staff re-enter the same information repeatedly.",
    },
    {
      title: "One connected application",
      description:
        "CareSync brings consultations, prescriptions, spectacles, surgeries, EMR documents and clinic finances into a single desktop workflow.",
    },
  ],
};

export const capabilities = [
  {
    id: "patients",
    title: "Patients",
    description:
      "Search, create, edit and manage complete patient records with demographics, clinical history and contact details.",
    wide: true,
    accent: "clinic" as const,
  },
  {
    id: "consultations",
    title: "Consultations",
    description:
      "Record complaints, diagnosis, notes, follow-ups, payments and detailed eye examination findings in structured visits.",
    wide: true,
    accent: "coral" as const,
  },
  {
    id: "prescriptions",
    title: "Prescriptions",
    description:
      "Create, save, edit, print, download and share prescriptions with quick-add medicines and saved snippets.",
    accent: "rose" as const,
  },
  {
    id: "spectacles",
    title: "Spectacles",
    description:
      "Manage distance vision, near vision, additions and post-mydriatic spectacle prescriptions.",
    accent: "amber" as const,
  },
  {
    id: "surgeries",
    title: "Surgeries",
    description:
      "Record procedures, costs, payment status, post-operative instructions and medicines.",
    accent: "clinic" as const,
  },
  {
    id: "emr",
    title: "EMR",
    description:
      "Store scans, reports and other patient documents in organised folders.",
    accent: "coral" as const,
  },
  {
    id: "billing",
    title: "Billing",
    description:
      "Create detailed itemised bills with automatic totals, then print, save as PDF or share.",
    accent: "amber" as const,
  },
  {
    id: "finance",
    title: "Finance",
    description:
      "Track earnings, expenses, refunds, pending payments and net clinic performance.",
    accent: "rose" as const,
  },
];

export const patientTabs = [
  "Clinical history",
  "Spectacles",
  "Visits",
  "Surgeries",
  "Prescriptions",
  "EMR",
  "Generate Bill",
] as const;

export const consultationSteps = [
  { id: "patient", label: "Patient", detail: "Open or create the record" },
  {
    id: "history",
    label: "Clinical history",
    detail: "Review intake flags and prior conditions",
  },
  {
    id: "exam",
    label: "Eye examination",
    detail: "VA, BCVA, IOP GAT, Pupils, Ant seg, Fundus, OCT CMT",
  },
  {
    id: "diagnosis",
    label: "Diagnosis & notes",
    detail: "Chief complaints, diagnosis, advice and treatment",
  },
  { id: "rx", label: "Prescription", detail: "Build and save medicine lists" },
  {
    id: "spectacles",
    label: "Spectacles",
    detail: "D.V., N.V., Near Add and post-mydriatic Rx",
  },
  {
    id: "surgery",
    label: "Surgery / treatment",
    detail: "Procedures, costs and post-op instructions",
  },
  { id: "bill", label: "Bill", detail: "Itemised billing with automatic totals" },
  {
    id: "followup",
    label: "Follow-up",
    detail: "Schedule return visits with Urdu date preview",
  },
] as const;

export const patientRecordHighlights = [
  "Search by MRN, name or phone number",
  "Complete clinical history in one tab",
  "Structured eye examination per visit",
  "Prescriptions and spectacle records",
  "Surgery records with payment status",
  "EMR document storage",
  "Generate Bill with line items",
  "Compare two visits side by side",
  "Print, PDF and WhatsApp sharing",
  "Payment tracking per visit",
] as const;

export const roles = [
  {
    id: "doctor",
    title: "Doctor",
    subtitle: "Full access",
    accent: "clinic" as const,
    items: [
      "Patients, visits and examinations",
      "Prescriptions, spectacles and surgeries",
      "EMR uploads and directory",
      "Bills and Operations (Insights & Entries)",
      "Settings, staff passwords, LAN and backups",
      "Security, recovery code and login activity",
    ],
  },
  {
    id: "optometrist",
    title: "Optometrist",
    subtitle: "Clinical workflow access",
    accent: "coral" as const,
    items: [
      "Patients and full visit records",
      "Spectacle prescriptions",
      "Directory and printing / PDFs",
      "Quick-add medicines and saved snippets",
      "PDF download folder settings",
    ],
  },
  {
    id: "finance",
    title: "Finance Manager",
    subtitle: "Financial workflow access",
    accent: "amber" as const,
    items: [
      "Patient list (Visits and Surgeries tabs only)",
      "Visit and surgery payment amounts",
      "Operations — Insights and Entries",
      "Financial summary and clinic expenses",
      "Outstanding balances and who owes money",
    ],
  },
] as const;

export const architecture = {
  title: "One clinic, multiple computers",
  description:
    "The Doctor's PC is the Host — it stores the encrypted database and runs the LAN server. Finance and Optometrist PCs connect as Clients over your clinic's private network.",
  hostLabel: "Doctor PC — Host",
  hostDetail: "Database + CareSync server · port 3847",
  clientLabels: ["Optometrist PC — Client", "Finance PC — Client"],
  notes: [
    "One Host plus up to two Client PCs",
    "Client PCs do not store the database",
    "Unattended Host mode lets staff work when the Doctor has not signed in",
    "All PCs must be on the same local network",
  ],
};

export const securityPoints = [
  {
    title: "Stored on your computer",
    description:
      "All records live in an encrypted database on the Host PC under your Windows user profile.",
  },
  {
    title: "No cloud dependency",
    description:
      "CareSync does not send data to the internet or a cloud service for normal clinic operation.",
  },
  {
    title: "Role-based staff access",
    description:
      "Doctor, Optometrist and Finance Manager each sign in with their own password and permissions.",
  },
  {
    title: "Doctor password & recovery code",
    description:
      "The database is encrypted with the Doctor password. A one-time recovery code is the only way back in if the password is forgotten.",
  },
  {
    title: "Login activity monitoring",
    description:
      "Review successful logins and failed password attempts from Settings and the dashboard banner.",
  },
  {
    title: "Manual backups you control",
    description:
      "Create backups from Settings and store them on external media — CareSync does not back up automatically.",
  },
];

export const securityLimitation = {
  title: "Responsible deployment on a private clinic network",
  description:
    "Traffic between Host and Client PCs is not encrypted. Keep CareSync on a private clinic network and never expose port 3847 to the internet.",
};

export const outputs = [
  {
    id: "print",
    title: "Print",
    steps: ["Clinic letterhead", "Print-ready window", "Windows print dialog"],
    note: "Choose Save as PDF in the print dialog if you prefer a PDF from the print flow.",
  },
  {
    id: "pdf",
    title: "PDF",
    steps: ["Download PDF", "Saved to your configured folder", "Path confirmed on screen"],
    note: "Set the PDF download folder in Settings under PDF downloads.",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    steps: [
      "Opens the patient's WhatsApp chat",
      "PDF saved to your folder",
      "You attach the file manually in WhatsApp",
    ],
    note: "WhatsApp does not allow applications to attach files automatically. Requires a valid Pakistani mobile number on the patient record.",
  },
];

export const financeMetrics = [
  { label: "Total earnings", hint: "Visit payments + paid surgeries" },
  { label: "Total expenses", hint: "Clinic spendings log" },
  { label: "Fee refunds", hint: "Refunded visit fees" },
  { label: "Net earnings", hint: "Earnings − refunds − expenses" },
  { label: "Patients seen", hint: "Visits in selected period" },
  { label: "Pending payments", hint: "Outstanding balances" },
] as const;

export const financeEntries = [
  "Log clinic expenses with date, amount and notes",
  "Edit or delete spending entries",
  "See who owes money across visits and surgeries",
  "Filter Insights and patient lists by period",
] as const;

export const backups = {
  title: "You control your data. You control your backups.",
  points: [
    "CareSync does not automatically back up your database.",
    "Create backups from Settings → Backup & restore at the end of each clinic day.",
    "Store backup files on an external drive or another safe location.",
    "Keep at least one copy away from the main PC.",
    "Store your recovery code separately and securely — without it, a forgotten Doctor password cannot be recovered.",
  ],
};

export const goodPractices = [
  "Lock CareSync when leaving the PC",
  "Back up every clinic day",
  "Keep an off-site backup",
  "Store the recovery code safely",
  "Change staff passwords when staff leave",
  "Review failed-login activity",
  "Keep CareSync on a private clinic network",
  "Never expose port 3847 to the internet",
  "Keep Windows updated",
  "Use Windows login passwords",
] as const;

export const finalCta = {
  title: "A smarter way to run your eye clinic.",
  description:
    "Keep your patients, consultations, prescriptions, surgeries, documents and finances connected in one place.",
  primaryCta: "Request a Demo",
  secondaryCta: "Watch the Demo",
};

export const examRows = [
  { label: "VA", formLabel: "VA" },
  { label: "BCVA", formLabel: "BCVA" },
  { label: "IOP", formLabel: "IOP GAT" },
  { label: "Pupil", formLabel: "Pupils" },
  { label: "Anterior Segment", formLabel: "Ant seg" },
  { label: "Fundus", formLabel: "Fundus" },
  { label: "OCT CMT", formLabel: "OCT CMT" },
] as const;

export const sampleLetterhead = {
  specialization: "Consultant Ophthalmologist",
  name: "Dr. Sample Physician",
  credentials: ["MBBS, FCPS Ophthalmology", "Fellowship in Vitreoretinal Surgery"],
  phone: "03XX-XXXXXXX",
  clinicName: "Sample Eye Clinic",
  patient: {
    name: "Sample Patient",
    gender: "Male",
    age: "45",
    mrn: "202608-0001",
    visit: "#1",
    date: "01-08-2026",
  },
};
