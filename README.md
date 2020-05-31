# Dinosaurs

## About Dinosaurs

## Project Structure

    dinosaurs                   # project name
    ├── config                  # config application like 'database'
    | └── ...
    ├── controllers             #
    │ └── ...
    ├── handlers                # hand
    │ └── ...
    ├── middleware              #
    │ └── ...
    ├── models                  #
    │ └── ...
    ├── repositories            #
    │ └── ...
    ├── routes                  #
    │ └── ...
    ├── utils                   #
    │ └── ...
    ├── .env                    #
    ├── .env-example            #
    ├── .gitignore              #
    ├── app.ts                  #
    ├── deps.ts                 #
    └── README.md               #

## Features

- [x] [Oak](https://github.com/oakserver/oak) framework.
- [x] [deno-postgres](https://github.com/buildondata/deno-postgres) as postgres driver
- [x] [jwt](https://github.com/timonson/djwt) and [deno-bcrypt](https://github.com/JamesBroadberry/deno-bcrypt) for authentication.
- [x] [deno-nessie](https://github.com/halvardssm/deno-nessie) for database migrations.
- [x] using [yup](https://github.com/jquense/yup) for body data validation using [pika.dev](https://www.pika.dev/)
- [x] handle all errors
- [ ] tests
- [ ] Docker
- [ ] github actions (CI)

## Run Application

    deno run --allow-net --allow-read --allow-write app.ts

## License

The Dinosaurs project is open-sourced software licensed under the [MIT license](LICENSE).
