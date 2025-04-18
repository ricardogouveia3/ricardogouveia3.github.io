import Spinner from "./Spinner";
import { CardProps } from "../../types/Card.type.ts";

export default function Card({
                               children,
                               classNames = "",
                               contentClassnames = "p-4 lg:p-6",
                               loading = false,
                             }: Readonly<CardProps>) {
  return (
    <div
      className={`relative default-border default-background flex flex-col overflow-hidden cursor-default transition-all ease-in-out rounded-lg ${classNames}`}
      role="region"
      aria-busy={loading}
    >
      <div className="smooth-noisy-background">
        <div className={`${contentClassnames} above-noise-content-background`}>
          {children}
        </div>
      </div>
      <Spinner isLoading={loading} />
    </div>
  );
}



