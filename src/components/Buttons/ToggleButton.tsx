import {HeaderToggleButtonProps} from "../../types/Button.type.ts";

const ToggleButton = ({ onClick, icon: Icon }: Readonly<HeaderToggleButtonProps>) => {
  return (
    <button
      className={`flex items-center justify-center h-full w-full default-background default-border hover-background rounded-lg sm:rounded-full default-text-color font-semibold px-3 py-1 aspect-square`}
      onClick={onClick}
      aria-label="Toggle button"
    >
      {typeof Icon === 'string' ? (
        <img src={Icon} alt="Toggle icon" className="w-5 sm:w-4" />
      ) : (
        Icon && <Icon className="w-4 default-text-color" />
      )}
    </button>
  );
}

export default ToggleButton;
