# Blog application with NextJS and Contentful

This is a codebase for blog application that I build using NextJS with Contentful API

Live Demo: [https://blog.anish1712.now.sh/](https://blog.anish1712.now.sh/)

## Getting Started

### Clone this repo to your machine

```bash
$ git clonegit@github.com:anishagg17/Blog.git
$ cd Blog
```

### Without Docker

Run it locally from [http://localhost:3000](http://localhost:3000):

```bash
$ CONTENTFUL_SPACE_ID=<space_id> CONTENTFUL_ACCESS_TOKEN=<access_token> npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
$ now -e CONTENTFUL_SPACE_ID=<space_id> -e CONTENTFUL_ACCESS_TOKEN=<access_token>
```

### With Docker

Build it with docker:

```bash
# build
$ docker build -t Blog .

# or, use multi-stage builds to build a smaller docker image (for deployment to production)
$ docker build -t nextjs-app -f ./Dockerfile.multistage .
```

Run it locally from [http://localhost:3000](http://localhost:3000):

```bash
$ docker run --rm -it \
    -p 3000:3000 \
    -e "CONTENTFUL_SPACE_ID=<contentful_space_id>" \
    -e "CONTENTFUL_ACCESS_TOKEN=<contentful_access_token>" \
  Blog
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
# Deploy with docker image
$ now --docker -e CONTENTFUL_SPACE_ID=<contentful_space_id> -e CONTENTFUL_ACCESS_TOKEN=<contentful_access_token>
```
