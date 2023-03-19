## Dev/Local mode setup process
- Clone the repo and `cd` into the folder.
- Execute the following command `./bin/setup` in terminal inside the folder.
- After setup, execute `./bin/dev` in terminal to start the severs.
- Navigate to `localhost:3000` in browser's tab and input the below credentials(`seeded user`) to login
```
email: sample@google.com
password: welcome
```

- You will be navigated to the `/feed` page where you can:-
  - Type the email of a person you want to refer.
  - A list of all the referred users will displayed in the topmost table.
  - Below table consists of the users that you have referred and they have signed up in the app.

- To login via api:-
  - Open postman and enter this url `localhost:3000/api/v1/login` and select post method.
  - In the body tab select `raw` and then select `application.json` from dropdown.
  - Paste the following credentials `{"user": {"email": "sample@google.com", "password": "welcome"}}`
  - Server will log you in and return an authenticity token which you can copy and use it in future to fetch the data from the app via api.
  - Same goes for signup via api, just use `/api/v1/users` and add the below payload to create the user
  ```
  {"user": {"email": "xyz@google.com", "password": "welcome", "password_confirmation": "welcome", "first_name":"xyz", "last_name": "abc"}}
  ```

- To fetch data using auth token:-
  - Use `GET` method and `/api/v1/referral` endpoint to fetch referral data.
  - Set the headers in below format
  ```
    X-Auth-Email: sample@google.com
    X-Auth-Token: (auth token copied from the login above)
  ```
