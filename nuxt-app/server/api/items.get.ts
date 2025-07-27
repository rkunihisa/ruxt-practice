export default defineEventHandler(() => {
    console.log('GET request to /api/items');

    return [
        { id: 1, name: 'Item 1', description: 'Description for Item 1' },
        { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    ];
});
