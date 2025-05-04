# your_app/your_app/api.py
import frappe

@frappe.whitelist(allow_guest=True)
def get_last_purchase_prices(item_code):
    # Fetch the last 3 purchase prices of the item from Purchase Invoice Item
    purchase_prices = frappe.db.get_all(
        'Purchase Invoice Item',
        filters={'item_code': item_code, 'docstatus': 1},
        fields=['rate', 'parent', 'creation'],
        order_by='creation desc',  # Sort by creation date instead of posting_date
        limit=3
    )
    print("callling pythn code")
    print(purchase_prices)
    return purchase_prices
