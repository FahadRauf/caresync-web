# CareSync — Eye Clinic Management System

CareSync is a desktop clinic management system designed specifically for eye clinics. It brings patient records, consultations, eye examinations, prescriptions, spectacles, surgeries, EMR documents, billing, payments, and clinic finances into one centralized application.

This repository contains the **CareSync marketing website**, created to showcase the application, its features, workflow, security model, and multi-user clinic setup.

## About CareSync

CareSync is designed around the day-to-day workflow of an eye clinic.

It allows clinics to manage:

* Patient records and clinical history
* Eye examinations and consultation notes
* Medical prescriptions
* Spectacle prescriptions
* Surgery records and post-operative instructions
* Patient EMR documents and scanned reports
* Bills and payment tracking
* Clinic expenses and financial insights
* Staff roles and permissions
* Printing, PDF generation, and WhatsApp sharing
* Local backups and data recovery

## Key Features

### Patient Management

Search patients by MRN, name, or phone number and maintain a complete patient record containing clinical history, visits, prescriptions, spectacles, surgeries, documents, and bills.

### Clinical Workflow

Record complaints, diagnoses, examination findings, follow-up dates, treatment, and payments within a structured consultation workflow.

### Prescriptions & Spectacles

Create, edit, print, download, and share medical prescriptions and spectacle prescriptions.

### Surgery Management

Record procedures, costs, payment status, post-operative instructions, and medicines.

### EMR

Store scans, reports, and other patient documents in organized patient folders.

### Billing & Finance

Create patient bills, track payments, record clinic expenses, and view financial insights including earnings, refunds, expenses, net income, and outstanding payments.

### Role-Based Access

CareSync supports three staff roles:

* **Doctor** — Full access to clinical, financial, administrative, security, and backup features.
* **Optometrist** — Access to patient and clinical workflows with appropriate restrictions.
* **Finance Manager** — Access to patient payment information and financial operations.

### Multi-PC Support

CareSync can operate across up to three computers within a clinic:

```text
                 Doctor PC
                    Host
              ┌──────────────┐
              │   CareSync   │
              │   Database   │
              └──────┬───────┘
                     │
              Clinic Local Network
                ┌────┴────┐
                │         │
          Optometrist   Finance
             Client      Client
```

The Doctor's PC acts as the Host and stores the clinic database. Client computers connect to the Host over the clinic's local network.

## Privacy & Data Storage

CareSync is designed around local data ownership.

* Patient data is stored on the clinic's own computer.
* The database is encrypted.
* CareSync does not use cloud storage for clinic records.
* Staff access is controlled through separate roles and passwords.
* The application provides recovery-code functionality.
* Doctors can manually create and restore backups.

CareSync should be operated on a private clinic network. Host/Client network traffic is not encrypted, and the application should never be exposed directly to the public internet.

## Website

The marketing website presents CareSync through:

* Product overview
* Feature sections
* Clinical workflow
* Patient record capabilities
* Staff roles
* Multi-PC architecture
* Privacy and security
* Finance and billing
* Backup and data management
* Product demonstration

The design is intentionally positioned as a **premium healthcare technology product** rather than a generic SaaS landing page.

## Tech Stack

* React
* JavaScript
* HTML
* CSS
* Vite

## Project Status

The website is actively being developed alongside the CareSync desktop application.

## License

This project is proprietary software. All rights reserved.
