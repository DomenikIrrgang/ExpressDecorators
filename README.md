# ExpressDecorators [![Build Status](https://travis-ci.org/DomenikIrrgang/ExpressDecorators.svg?branch=master)](https://travis-ci.org/DomenikIrrgang/ExpressDecorators)

This project is trying to achieve to provide Angular-like annotations for using the express framework.

# Featurelist

This is a list of all features that will be implemented.

## Dependency Injection

- Mark a class as @Injectable() to make it accessable to any other managed class.
- A managed class can be anything, controllers, middlewares or even the server.
- If a class is not a anything of the above three, it needs to be defined as a provider in the module it is needed.
- If an injectable class has dependencies on other injectable classes, it will be inject using the constructor.

```typescript
@Injectable()
export class ExampleInjectableService {

    constructor() {}

    public getSomeData(): Observable<Data> {
        return ["Hello World"];
    }
}
```

## Modules

- A module should be able to define everything related to the application (Controllers, Middlewares).
- A module defines everything all of its controllers and middlewares need. 

Example:

```typescript
@Module({
    controllers: [
        ExampleController
    ],
    middlewares: [
        ExampleMiddleware
    ],
    providers: [
        ExampleInjectableService
    ]
})
export class ExampleModule {}
```

## Server

- The server should be able to mount 1 to n modules.
- It defines on which port it runs.
- Middlewares should be able to be attached.

```typescript
@Server({
    port: 8080,
    middlewares: [
        BodyParser,
        CORS
    ],
    imports: [
        ExampleModule
    ],
    providers: [
        AuthenticationService
    ]
})
export class ExampleServer {}
```

## Controller

- A controller can define functions for a specific routes that handle the request.
- Middlewares should be able to be applied to the controller or controller function.
- Mark functions as Get, Post, Put or Delete to make them resolve to a URI.
- A controller function should be able to have middlewares.

```typescript
@Controller({
    path: '/exmaplepath',
    middlewares: [
        Authorized
    ]
})
export class ExampleController {

    constructor(private exampleInjectableService: ExampleInjectableService) {}

    @Get({
        path: '/{id}',
        middlewares: []
    })
    public getExampleData(@Request() request: Request, @Response() response: Response, @PathVariable() id: number) {
        this.exampleInjectableService.getExampleData().subscribe(data => response.send(data));
    }
}
```

## Middleware

- A middleware should intercept a request to a resource and decide to weather or not the request shall be passed on.

```typescript
export class ExampleMiddleware implements Middleware {

    constructor(private authorizationService: AuthorizationService) {}

    public onRequest(@Request() request: Request, @Response() response: Response, @NextFunction() next: NextFunction, @Header('X-Auth-Token') token: string) {
        this.authorizationService.isAuthorized(token).subscribe(authorized => {
            if (authorized) {
                next()
            } else {
                response.sendStatus(401);
            }
        });
    }
}
```

## App

```typescript
@App({
    bootstrap: [ExampleServer]
})
export class ExampleApp extends ExpressApp {}

const exampleApp = new ExampleApp()
exampleApp.start((server) => {
    console.log("Application is running on port: " + server.port);
}, (error) => {
    console.log("Error: Could not start application.", error);
})
```