## Week 12, Wednesday, S19
## Lab 19: Task 1: Creating API_NOTES.md
Topic: Music
Supabase project: CSC441-api-ghitahajjari
Table: showcase_items
project URL: https://bjpbahgcufytpjruoabb.supabase.co
GET endpoint: https://bjpbahgcufytpjruoabb.supabase.co/rest/v1/showcase_items?select=*&order=id.asc
HTTP status: 200 OK
Records returned: 5

## Week 12, Wednesday, Lab 19
## Lab 19: Task 7: Question notes
1. A database table stores structured data organized into rows and columns.
2. A table is where the raw data lives inside the database while the API endpoint is the web url that is considered a bridge to let external apps or commands request or receive data over HTTP.
3. GET is an HTTP method used to read and retrieve data from a server without modifying it. My endpoint returns the records formatted as a JSON array of objects.
4. Publishable key is safe to use because it respects row level security rules, whereas the secret key bypasses security policies and can let anyone delete or modify the database.
5. Using "select=*" returned every column for each of the five records, while "select=title,category?" filtered the response to only include the title and category fields.