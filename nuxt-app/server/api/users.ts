import { readBody, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
    const method = event.method;
    console.log(`${method} request to /api/users`);

    if (method === 'GET') {
        const query = getQuery(event);
        console.log('Query parameters:', query);

        // Simulate fetching users
        return [
            { id: 1, name: 'User 1', email: 'user1@example.com' },
            { id: 2, name: 'User 2', email: 'user2@example.com' },
        ];
    }

    if (method === 'POST') {
        const newUser = await readBody(event);
        console.log('New user data:', newUser);

        // Simulate creating a new user
        return {
            id: Date.now(),
            ...newUser,
        };
    }
});
