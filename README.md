# website
FORT Remote Services Website

## Containerization
Using [Dockerfile](./Dockerfile), Create a **nginx** docker image with built static pages.  
```sh
docker build -t fortremote-web:test .
```

## Orchestration
Using [docker-compose](./docker-compose.yml), run Fortremote in a **docker-stack**.  
