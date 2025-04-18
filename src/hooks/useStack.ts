import { useEffect, useState } from "react";
import { getTech } from "../api/tech";
import {TechItem} from "../types/Marquee.type.ts";

export function useStack() {
  const [tech, setTech] = useState<TechItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTech().then((data) => {
      setTech(shuffleArray(data));
      setLoading(false);
    });
  }, []);

  return { tech, loading };
}

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}
