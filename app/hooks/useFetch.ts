import { useState, useEffect } from 'react';

type FetchFunction<T> = () => Promise<T>;

const useFetch = <T>(fetchFunction: FetchFunction<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchFunction();
                setData(result);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [fetchFunction]);

    return { data, loading, error };
};

export default useFetch;
