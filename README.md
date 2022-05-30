# Status

Project to see status and try some services by gRPC calls.

## Dependencies / Libraries

- Styles: emotion (style components)
- Design system: Material UI
- Dates: date-fns
- gRPC: grpc-web & google-protobuf
- Typescript

## Testing

Jest + React Testing Library - Is pending to add more tests, specially for hooks and fetched data. At the moment, there are tests in Header and Footer in order to check are rendered it correctly.

## Run project

# Local

- 1.- Clone project
- 2.- npm i
- 3.- npm run genpb
- 4.- npm run build
- 5.- npm start
- 6.- http://localhost:3000

# Docker

- 1.- Download image (URL)
- 2.- Create container with the image downloaded docker run -it -p 8080:80 --name dockerstatus statusdashboard

## TODO

- Manage the ServerInfo endpoint and add the info to the dashboard following good practices of UX and UI

- Improve textfield number of ping component to enter the number of sequences in order to control that the number only can be between 1 and 10

- Add more tests

- Hide the URL of the API in a .env file
