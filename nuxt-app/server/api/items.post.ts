export default defineEventHandler(async (event) => {
    console.log('POST request to /api/items');

    const newItem = await readBody(event)
    const createdItem = {
        id: Date.now(), // Simple ID generation for demonstration
        ...newItem,
    };
    return createdItem;
});
