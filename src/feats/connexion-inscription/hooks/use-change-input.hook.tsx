import { useState } from "react";

export default function useChangeInput<T>(initialState: T) {
  const [form, setForm] = useState<T>(initialState);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const resetForm = () => setForm(initialState);

  return { form, setForm, handleChangeInput, resetForm };
}
