import { cn } from "@/lib/utils";
import type { HTMLInputTypeAttribute, ReactNode } from "react";

type ConteneurInputProps = {
  icon: ReactNode;
  imageText?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  value?: string;
  className?: string;
  classNameInput?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function ConteneurInput({
  icon,
  placeholder,
  type = "text",
  name,
  value,
  imageText,
  className,
  classNameInput,
  onChange,
}: ConteneurInputProps) {
  const isFile = type === "file";

  return (
    <label
      htmlFor={name}
      className={cn(
        "flex items-center gap-2 border w-full py-2 px-3 rounded cursor-pointer",
        className
      )}
    >
      <span className="flex-shrink-0">{icon}</span>

      {isFile ? (
        <>
          <span className="text-gray-500">
            {imageText || "Choisir un fichier"}
          </span>
          <input
            id={name}
            type="file"
            name={name}
            onChange={onChange}
            className="hidden"
          />
        </>
      ) : (
        <input
          id={name}
          name={name}
          value={value ?? ""}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          className={cn(
            "flex-1 outline-none bg-transparent",
            classNameInput
          )}
        />
      )}
    </label>
  );
}