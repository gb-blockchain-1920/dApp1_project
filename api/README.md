## API testing cURL calls
Test commands for api testing (not actual representations of data structures)

Temp Token:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inh5eiIsInBhc3N3b3JkIjoiNjZiMjc0MTdkMzdlMDI0YzQ2NTI2YzJmNmQzNThhNzU0ZmM1NTJmMyIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNTgzNTI5MjExLCJleHAiOjE1ODM1NjUyMTF9.ClMRvvYd29-55zGLOc-kuwRehpmoG2ZJYyDSmjLWBUY
```


---
POST - `\login`
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"xyz","password":"xyz", "type":"user"}' \
  http://localhost:3000/login
```
---
GET - `\login`
```
curl -H "Authorization: Bearer <insert token>" http://localhost:3000/login
```
---
POST - `\user`
```
curl --request POST -H "Authorization: Bearer <insert token>" --data '{"username":"xyz","password":"xyz", "type":"user"}' http://35.193.103.180:3000/user
```
---
GET - `\user`
```
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inh5eiIsInBhc3N3b3JkIjoiNjZiMjc0MTdkMzdlMDI0YzQ2NTI2YzJmNmQzNThhNzU0ZmM1NTJmMyIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNTgzNTI5MjExLCJleHAiOjE1ODM1NjUyMTF9.ClMRvvYd29-55zGLOc-kuwRehpmoG2ZJYyDSmjLWBUY" http://35.193.103.180:3000/user
```
