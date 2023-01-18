import { useEffect, useRef, useState } from "react";
import { useServiceContext } from "../providers/ServiceProvider";

<<<<<<< HEAD
const useConnectSelectField = (props: {
  url: string;
  searchParams?: Record<string, any>;
  filterOptions?: (options: any[]) => any[];
}) => {
  const {
    url,
    filterOptions = (options) => options,
    searchParams = {},
  } = props;
  const [options, setOptions] = useState<any[]>([]);
=======
const useConnectSelectField = (url: any) => {
  const [options, setOptions] = useState([]);
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { service } = useServiceContext();

  useEffect(() => {
    const controller = new AbortController();
    fetchOptions(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  const fetchOptions = async (signal: AbortSignal) => {
    setLoading(true);
    try {
      const {
        data: { results },
<<<<<<< HEAD
      } = await service.fetchOptions({ url }, { signal, params: searchParams });

      if (results && Array.isArray(results)) {
        setOptions(filterOptions(results));
=======
      } = await service.fetchOptions({ url }, { signal });

      if (results) {
        setOptions(results);
>>>>>>> fdf2328 (OTAT-216: rename and restructre projects)
        setError(false);
      } else {
        setOptions([]);
        setError(true);
      }

      setLoading(false);
    } catch (e) {
      console.error(e);
      setOptions([]);
      setLoading(false);
      setError(true);
    }
  };

  return { options, loading, error, fetchOptions };
};

export default useConnectSelectField;
