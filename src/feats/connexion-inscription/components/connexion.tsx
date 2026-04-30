import type { ConnexionType } from "@/types/types";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
export function Connexion({
  formConnexion,
  handleSubmitConnexion,
  handleChangeInputConnexion,
}: ConnexionType) {
  return (
    <motion.div
      key="login"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-sm"
    >
      <h3 className="mb-6 text-center text-lg font-bold">SE CONNECTER</h3>

      <form onSubmit={handleSubmitConnexion} className="flex flex-col gap-3">
        <div className="flex items-center gap-2 border px-1 rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <Mail size={18} className="text-primary" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="py-1.5 flex-1 px-1 outline-none"
            value={formConnexion.email}
            onChange={handleChangeInputConnexion}
          />
        </div>

        <div className="flex items-center gap-2 border px-1 rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <Lock size={18} className="text-primary" />
          <input
            name="password"
            placeholder="Mot de passe"
            type="password"
            className="py-1.5 flex-1 px-1 outline-none"
            value={formConnexion.password}
            onChange={handleChangeInputConnexion}
          />
        </div>

        <div className="flex justify-start">
          <button
            type="submit"
            className="rounded-[10px] bg-gradient-to-br from-primary via-blue-500 to-indigo-600 hover:via-blue-600 hover:to-indigo-700 py-1.5 text-white cursor-pointer px-7 font-bold"
          >
            SE CONNECTER
          </button>
        </div>
      </form>
    </motion.div>
  );
}
