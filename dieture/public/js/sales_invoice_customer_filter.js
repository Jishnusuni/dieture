frappe.ui.form.on('Sales Invoice', {
    customer: {
        get_query: function() {
            return {
                filters: {
                    customer_group: 'Dieture Subscribers'
                }
            };
        }
    }
});
