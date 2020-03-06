## API testing cURL calls

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"xyz","password":"xyz", "type":"user"}' \
  http://localhost:3000/login
```

```
curl -H "Authorization: Bearer <insert token>" http://localhost:3000/login
```
