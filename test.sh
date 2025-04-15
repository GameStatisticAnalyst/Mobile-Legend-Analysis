#!/bin/bash

# Login and store cookies in a jar
LOGIN_RESPONSE=$(curl -s -i -X POST \
  -H "Content-Type: application/json" \
  -d '{"email":"user1@user.com","password":"12345678"}' \
  -c cookies.txt \
  http://localhost:3000/api/auth/callback/credentials)

# Check if login was successful
if [[ $LOGIN_RESPONSE != *"302 Found"* ]]; then
  echo "Login failed"
  exit 1
fi

# Test currentUser endpoint with stored cookies
curl -i \
  -b cookies.txt \
  http://localhost:3000/api/currentUser

# Clean up
rm cookies.txt
