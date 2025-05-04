// frappe.ui.form.on('Purchase Invoice', {
//     onload: function(frm) {
//         // This is where you can initialize things if needed on form load
//     },

//     // Optionally, you can trigger the call when the form is refreshed
//     refresh: function(frm) {
//         // This could also be used to initialize the prices when the form is first loaded
//     }
// });

// frappe.ui.form.on('Purchase Invoice Item', {
//     item_code: function(frm, cdt, cdn) {
//         let row = locals[cdt][cdn];
//         if (!row.item_code) return;

//         // Now, call the custom Python method to fetch last 3 purchase prices for the selected item
//         frappe.call({
//             method: "dieture.public.python.last_purchase_price.get_last_purchase_prices",
//             args: {
//                 item_code: row.item_code
//             },
//             callback: function(r) {
//                 if (r.message && r.message.length > 0) {
//                     const rates = r.message.map(d => d.rate);
//                     const maxRate = Math.max(...rates);

//                     // Prepare the HTML to show purchase prices with the highest price highlighted
//                     const html = r.message.map(d => {
//                         const bold = d.rate === maxRate ? "font-weight:bold;" : "";
//                         return `<div style="${bold}">₹ ${d.rate} (from ${d.parent})</div>`;
//                     }).join("");

//                     // Set the HTML content in the custom_previous_price field on the Purchase Invoice form
//                     frm.set_value('custom_previous_price', html);
//                 } else {
//                     // If no data found, show a message in the custom_previous_price field
//                     frm.set_value('custom_previous_price', 'No recent prices found');
//                 }
//             }
//         });
//     }
// });


frappe.ui.form.on('Purchase Invoice Item', {
    item_code: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        if (!row.item_code) return;

        frappe.call({
            method: "dieture.public.python.last_purchase_price.get_last_purchase_prices",
            args: {
                item_code: row.item_code
            },
            callback: function(r) {
                if (r.message && r.message.length > 0) {
                    const sorted = r.message
                        .sort((a, b) => b.rate - a.rate)
                        .map(d => `₹ ${d.rate} on ${frappe.datetime.str_to_user(d.creation)}`);
                    frm.set_value('custom_previous_price', sorted.join('\n'));
                } else {
                    frm.set_value('custom_previous_price', 'No recent prices found');
                }
            }
        });
    }
});
