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

## ⚙️ Fixtures Used

Included fixtures to preserve customizations during export/import:

- **Workflow**
- **Workflow State**
- **Workflow Action Master**
- **Report**
  

---



## 📸 Screenshots



*Sales Invoice - Customer filtered by group*

![image](https://github.com/user-attachments/assets/c932035b-9803-4ee5-8807-cefc51d97065)

*Purchase Invoice - Previous 3 prices shown*

![image](https://github.com/user-attachments/assets/e3af0b57-deb1-4cc4-967b-b0a7b6882af1)

![image](https://github.com/user-attachments/assets/eba76da0-5831-4e26-a7f2-b1ccf4f3dd57)

*Customer Group Summary Report

![image](https://github.com/user-attachments/assets/104f6c88-ef90-4706-8aa0-716784684fb5)

*Supplier Evaluation – Form View

![image](https://github.com/user-attachments/assets/eb2410fe-d714-407e-ade0-d5b5de3d314f)

*Supplier Evaluation – Workflow

![image](https://github.com/user-attachments/assets/81c5be85-4440-46ab-8044-8cad2ad676e7)
![image](https://github.com/user-attachments/assets/c5a925a7-6691-4116-9b79-2f15da2c006a)

---


## ✅ Installation

```bash
# Get the app
$ bench get-app dieture https://github.com/Jishnusuni/dieture.git

# Install the app on your site
$ bench --site your-site-name install-app erpnext
$ bench --site your-site-name install-app dieture
