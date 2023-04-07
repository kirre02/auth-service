# Auth-service

## Reasoning
Felt like I needed to try creating a auth service as it is something that I wanted to get a better grasp of.
Reason to why I choose typescript, express and prisma is because of ease of use as these are tools that I have used more and feel more secure in compared to using golang.

## Theory
The API returns a short-lived token (JWT), which expires in 15 minutes, and in HTTP cookies, the refresh token expires in 7 days. JWT is currently used for accessing secure ways on API, whereas a refresh token generates another new JWT access token when it expires or even before.

## request flow
![plans for the project](docs/api_plan.png)