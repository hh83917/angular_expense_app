Topic: Expense Management single page application

Basic Usage Instruction:

Add New Expense Button:
- Toggles a panel to add new expense
- Input:
	Merchant Name: Enter merchant name (default: None)
	Date: format: yyyy-MM-dd (default: today's date)
	Total Expense: enter numbers (default: 0)
	Comment: Enter comments (default: None)
- Add Expense button: add the new expense and clear the input fields
- Close button: close the new expense panel

Search:
- ability to search the merchant name from Expenses List and Reimbursed Table

Expenses Table:
- Fields:
	- Status
	- Merchant Name
	- Date
	- Expense amount
	- Comments
- Edit Button:
	- Toggles edit mode (Once toggled, click save to exit edit mode)
	- Save Button: Save entered inputs
	- Delete Button: Delete the selected row
	-Status Field: Select "New" or "Reimbursed", selected field updates immediately. Item will be sent to the Reimbursed Table.

	**Once "Reimbursed" status is selected, the item is no longer editable or deletable**

- Total Expenses:
	- Dynamicly updates grand total as items are added, removed, or sent to Reimbursed Table.
