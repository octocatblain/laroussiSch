import { useState, useEffect } from "react";
import axios from "axios";

interface Option {
  weight: number;
  unit: string;
  textId: string;
  createdAt: string;
  updatedAt: string;
}

const useFetchOptions = (url: string) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setOptions(response.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch options");
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, [url]);

  return { options, loading, error };
};

export default useFetchOptions;
