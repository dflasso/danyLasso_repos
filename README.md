<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
</p>


# Coding Challenge
Diseñar una solución que administre organizaciones, repositorios y las métricas de los mismos.
- [Arquitectura de la Solución]()
    + Microservicio: [(Mock) Repositorio - Información de verificación]()
    + Microservicio: [Métricas del Repositorio]()
    + Microservicio: [Reportería]()  
    + Microservicio: [Autenticador de usuarios y clientes web]()
    + Microservicio: [Controlador - Tolerancia a fallos]()
- [Modelo de Datos]()
## Instalación

```bash
$ npm install
```

## Ejecutar cada microservicio

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Estandares de código
- Programación Modular
- Clean Arquitecture
- Clean Code
- La códificación de los microservicios se realizo siguiendo los principios SOLID
- El estilo de código se baso en el Zen de Python

# Seguridades
- Solo API de login es pública, el resto requiere de un JWT. Los microservicios ademas de verificar el jwt, comprueban que el ROL pueda consumir la API
- Las contraseñas se encuentran encriptadas con bcrypt
- Helmet, permite proteger la aplicación de algunas vulnerabilidades web conocidas mediante el establecimiento correcto de cabeceras HTTP.
- Guards (Guardianas), en cada Endpoint se establece uno o más guardianes que verifica las políticas de seguridad y lanza un log para futuras auditorias y monitereo.

## Comunicación entre microservicios
La comunicación entre microservicios se hizo mediante API REST, de la siguiente forma:

- HTTP module (Nest wraps Axios) para el consumo de API
- Generación de JWT internos con el ROl = MICROSERVICIO

# Validación de datos de entrada
 - class-validator
 - mapped-types
 - Pipes

 # Documentación de las APIs
 La documentación de la realizo mediante swagger siguiendo las especificaciones de OpenAPI.
## Stay in touch

- Author - [Dany Lasso](https://dflasso.github.io/)
- Linkedin - [Dany Lasso](https://www.linkedin.com/in/dany-lasso-10683b124/)
- Twitter - [@dany_f_lasso](https://twitter.com/dany_f_lasso)
- Email - [dannylasso.a@gmail.com](mailto:dannylasso.a@gmail.com)

## License

Nest is [MIT licensed](LICENSE).
