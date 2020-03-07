## API testing cURL calls
Test commands for api testing (not actual representations of data structures)

Temp Token:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6ImE5NGE4ZmU1Y2NiMTliYTYxYzRjMDg3M2QzOTFlOTg3OTgyZmJiZDMiLCJ0eXBlIjoidXNlciIsImlhdCI6MTU4MzYwMzk2NiwiZXhwIjoxNTgzNjM5OTY2fQ.OTGMcdjbwiqY4AIPdk405hJaNB_ruZv6Md-eVXhpcVU
```


---
POST - `\login`
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"test","password":"test", "type":"user"}' \
  http://35.193.103.180:3000/login
```
---
POST - `\login`
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"RBC","password":"xyz", "type":"company"}' \
  http://35.193.103.180:3000/login
```
---
GET - `\login`
```
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6ImE5NGE4ZmU1Y2NiMTliYTYxYzRjMDg3M2QzOTFlOTg3OTgyZmJiZDMiLCJ0eXBlIjoidXNlciIsImlhdCI6MTU4MzYwMzk2NiwiZXhwIjoxNTgzNjM5OTY2fQ.OTGMcdjbwiqY4AIPdk405hJaNB_ruZv6Md-eVXhpcVU" http://localhost:3000/login
```
---
POST - `\user`
```
curl --request POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6ImE5NGE4ZmU1Y2NiMTliYTYxYzRjMDg3M2QzOTFlOTg3OTgyZmJiZDMiLCJ0eXBlIjoidXNlciIsImlhdCI6MTU4MzYwMzk2NiwiZXhwIjoxNTgzNjM5OTY2fQ.OTGMcdjbwiqY4AIPdk405hJaNB_ruZv6Md-eVXhpcVU" --data '{"firstname":"xyz","lastname":"xyz", "dob":"1240987"}' http://35.193.103.180:3000/user
```
---
GET - `\user`
```
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6ImE5NGE4ZmU1Y2NiMTliYTYxYzRjMDg3M2QzOTFlOTg3OTgyZmJiZDMiLCJ0eXBlIjoidXNlciIsImlhdCI6MTU4MzYwMzk2NiwiZXhwIjoxNTgzNjM5OTY2fQ.OTGMcdjbwiqY4AIPdk405hJaNB_ruZv6Md-eVXhpcVU" http://35.193.103.180:3000/user
```
---
GET - `\approve`
```
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6ImE5NGE4ZmU1Y2NiMTliYTYxYzRjMDg3M2QzOTFlOTg3OTgyZmJiZDMiLCJ0eXBlIjoidXNlciIsImlhdCI6MTU4MzYwMzk2NiwiZXhwIjoxNTgzNjM5OTY2fQ.OTGMcdjbwiqY4AIPdk405hJaNB_ruZv6Md-eVXhpcVU" http://35.193.103.180:3000/approve
```
POST - `\approve`
```
curl --header "Content-Type: application/json" --request POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6ImE5NGE4ZmU1Y2NiMTliYTYxYzRjMDg3M2QzOTFlOTg3OTgyZmJiZDMiLCJ0eXBlIjoidXNlciIsImlhdCI6MTU4MzYwMzk2NiwiZXhwIjoxNTgzNjM5OTY2fQ.OTGMcdjbwiqY4AIPdk405hJaNB_ruZv6Md-eVXhpcVU" --data '{"companyId":"4e8f5ac2870a991274c0f5826b417fe3730b8c7a737f7377516d14ab688939817e12fa9460ae73b1129a6c726aad2943685f953ff38c37a6b3e3f26fc7178050d70ca3358ab540a985d124f0f3bf9fbcb20f0c153ea697f43ebb9754ecaa9856"}' http://35.193.103.180:3000/approve
```
GET - `\corporate`
```
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJCQyIsInBhc3N3b3JkIjoiNjZiMjc0MTdkMzdlMDI0YzQ2NTI2YzJmNmQzNThhNzU0ZmM1NTJmMyIsInR5cGUiOiJjb21wYW55IiwiaWF0IjoxNTgzNjA0MTgwLCJleHAiOjE1ODM2NDAxODB9.H-2Fe3mPRcC_mtGtzo9z6parqO4oqsoI9anLESLm3o0" http://35.193.103.180:3000/corporate
```
