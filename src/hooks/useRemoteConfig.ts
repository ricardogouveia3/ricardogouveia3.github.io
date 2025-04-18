import { useEffect, useState } from "react";
import {fetchAndActivate, getValue, remoteConfig} from "@apis/firebase";

export const useRemoteConfig = (key: string) => {
  const [value, setValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadRemoteValue = async () => {
      try {
        await fetchAndActivate(remoteConfig);
        const configValue = getValue(remoteConfig, key).asString();
        setValue(configValue);
      } catch (error) {
        console.error("Error fetching remote config: ", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadRemoteValue().then();
  }, [key]);
  
  return { value, loading };
};
