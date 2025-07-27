export default defineEventHandler(() => {
    console.log('Hello from the API!');

    return {
        apiRoute: 'hello',
        message: 'Hello, world!',
        timestamp: new Date().toISOString(),
    };
});
