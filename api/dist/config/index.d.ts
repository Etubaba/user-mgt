declare const _default: () => {
    app: {
        environment: string;
        port: number;
        DB_URL: string;
    };
    jwt: {
        access: {
            secret: string;
            signInOptions: {
                expiresIn: string;
            };
        };
        refresh: {
            secret: string;
            signInOptions: {
                expiresIn: string;
            };
        };
    };
    cors: {
        origin: string;
        methods: string;
        headers: string;
    };
};
export default _default;
