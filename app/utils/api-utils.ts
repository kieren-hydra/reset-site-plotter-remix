const apiBaseUrl = process.env.RESET_API_BASE_URL;

export const GET = async (path: string) => {
    try {
        const response = await fetch(`${apiBaseUrl}${path}`);

        if (!response.ok) {
            return { error: `Failed to fetch data: ${response.status} ${response.statusText}` };
        }

        const data = await response.json();
        return { data };
    } catch (error) {
        console.error('API GET request error:', error);
        return { error: 'Network error occurred while fetching data' };
    }
}