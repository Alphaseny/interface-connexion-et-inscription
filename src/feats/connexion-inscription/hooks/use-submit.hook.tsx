import type { SubmitPropsType } from "@/types/types";

export default function useSubmit({
  onSuccess,
  resetForm,
}: SubmitPropsType = {}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (resetForm) {
      resetForm();
    }

    if (onSuccess) {
      onSuccess();
    }
  };

  return { handleSubmit };
}
