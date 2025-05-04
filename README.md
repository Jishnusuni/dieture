# Dieture - Frappe Custom App for ERPNext

**Dieture** is a custom Frappe app designed to extend ERPNext . It introduces enhancements in Sales, Purchase, Reporting, and Supplier Management through custom scripts and workflows.

---

## 🔧 Features

### 1. Sales Invoice: Filter Customer by Group
- Only customers belonging to the **"Dieture Subscribers"** customer group are selectable in the **Sales Invoice** form.
- Implemented via custom JS script inside `public/js`.

### 2. Purchase Invoice: Show Previous 3 Purchase Prices
- Below the **Item Table**, the last 3 purchase prices for each selected item are shown to help with informed pricing.
- Logic handled via custom Python and JS in `public/` directory.

### 3. Customer Group Summary Report
- Custom **Query Report** displaying each customer group and the total count of customers in that group.
- Located under: `dieture/report/customer_group_summary_report/`

### 4. Supplier Evaluation with Workflow
- Custom Doctype: **Supplier Evaluation**
  - Fields: Supplier, Rating, Comment
  - Workflow-enabled for review and approval process
- Available under: `dieture/dieture/doctype/supplier_evaluation/`

---

## 📁 Folder Structure
