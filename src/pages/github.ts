export const GET = async () => new Response(null, {
    status: 302,
    headers: {
        'Location': 'https://github.com/a-poor',
    },
});