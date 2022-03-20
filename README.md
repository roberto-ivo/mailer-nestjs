<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qk-x51pF--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://rohanfaiyaz.com/img/nestjs-graphql.png" width="420" alt="Nest Logo" /></a>
</p>
  
## Description

Repository created to run an email module built with [Nest](https://docs.nestjs.com/).

## :package: Pré-requisitos

Before starting, you will need to have the following tools installed on your machine:

- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)


## 🎲 Running the app

### Step 1: Get the code on your machine

```bash
# clone the repository
git clone https://github.com/roberto-ivo/module-email-nestjs.git

# access the project folder in terminal/cmd
cd module-email-nestjs
```

### Step 2: Modifying gmail credentials

```bash
# enter the directory
cd config
```

Modify the variables in default.yml to your credentials:
<p align="center">
  <img src="https://raw.githubusercontent.com/roberto-ivo/module-email-nestjs/master/images/credencials.png" alt="credencials" />
</p>

### Step 3: Configure Gmail SMTP Server

In order for us to use Gmail's SMTP server services, you need to allow access to less secure applications [here](https://myaccount.google.com/u/0/lesssecureapps?pli=1).

### Step 4: Run docker
```bash
# watch mode
$ docker-compose up --build
```

## :rocket: Go to [Preview](http://localhost:3000/graphql)
<p align="center">
  <img src="https://raw.githubusercontent.com/roberto-ivo/module-email-nestjs/master/images/preview.png" width="720" alt="preview" />
</p>

## 🛠 Technologies

The following tools were used in building the project:

- [Nest.js](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [TypeORM](https://typeorm.io/#/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)

## :construction_worker: Author
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/roberto-ivo" ><img src="https://avatars.githubusercontent.com/u/44208645?v=4" width="100px;" alt="" style="border-radius: 50%"/><br /><sub><b>Roberto Ivo</b></sub></a><br /></td>
  </tr>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
