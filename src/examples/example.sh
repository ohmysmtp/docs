curl "https://app.mailpace.com/api/v1/send" \
  -X POST \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -H "MailPace-Server-Token: 6b6dbe32-012d-4fd4-8bd1-2276f6e1de8c" \
  -d '{
    "from": "SOMEONE@google.com",
    "to": "SOMEONE@SOMEWHERE.com",
    "subject": "Hello from MailPace.com",
    "textbody": "HTML Body is auto-generated"
  }'