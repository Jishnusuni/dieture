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
  - Workflow-enabled for under review and approval process
- Available under: `dieture/dieture/doctype/supplier_evaluation/`

---

## 📁 Folder Structure

dieture/
├── dieture/
│ ├── doctype/
│ │ └── supplier_evaluation/
│ ├── report/
│ │ └── customer_group_summary_report/
│ └── ...
├── public/
│ ├── js/
│ │ ├── sales_invoice_customer_filter.js
│ │ ├── previous_purchase_price.js
│ └── python/
│ └── last_purchase_price.py
└── README.md


## 📸 Screenshots


![Customer Filter]
*Sales Invoice - Customer filtered by group*
![image](https://github.com/user-attachments/assets/c932035b-9803-4ee5-8807-cefc51d97065)

![Previous Prices]
*Purchase Invoice - Previous 3 prices shown*
![image](https://github.com/user-attachments/assets/e3af0b57-deb1-4cc4-967b-b0a7b6882af1)
![image](https://github.com/user-attachments/assets/eba76da0-5831-4e26-a7f2-b1ccf4f3dd57)



---
