import { motion } from "framer-motion";
import { Lock, Mail, Upload, User } from "lucide-react";
import type { InscriptionType } from "../../../types/types";
export function Inscription({
  formInscription,
  handleSubmitInscription,
  handleChangeInputInscription,
}: InscriptionType) {
  return (
    <motion.div
      key="register"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-sm p-3 absolute right-0"
    >
      <h3 className="mb-4 text-center text-lg font-bold">CREER VOTRE COMPTE</h3>

      <form onSubmit={handleSubmitInscription} className="flex flex-col gap-4">
        <div className="flex items-center gap-2 border px-1 rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <User size={18} className="text-primary" />
          <input
            placeholder="Prénom"
            className="py-1.5 flex-1 px-1 outline-none"
            name="prenom"
            value={formInscription.prenom}
            onChange={handleChangeInputInscription}
          />
        </div>

        <div className="flex items-center gap-2 border px-1 rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <User size={18} className="text-primary " />
          <input
            placeholder="Nom"
            className="py-1.5 flex-1 px-1 outline-none"
            name="nom"
            value={formInscription.nom}
            onChange={handleChangeInputInscription}
          />
        </div>

        <div className="flex items-center gap-2 border px-1 rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <Mail size={18} className="text-primary " />
          <input
            type="email"
            placeholder="Email"
            className="py-1.5 flex-1 px-1 outline-none"
            name="email"
            value={formInscription.email}
            onChange={handleChangeInputInscription}
          />
        </div>

        <div className="flex items-center gap-2 border px-1 rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <Lock size={18} className="text-primary " />
          <input
            placeholder="Mot de passe"
            type="password"
            className="py-1.5 flex-1 px-1 outline-none"
            name="password"
            value={formInscription.password}
            onChange={handleChangeInputInscription}
          />
        </div>

        <label className="flex items-center gap-3 rounded border px-1 py-1.5 cursor-pointer focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <Upload size={18} className="text-primary " />
          Ajouter une image
          <input
            type="file"
            className="hidden"
            name="image"
            onChange={handleChangeInputInscription}
          />
        </label>

        <div className="flex justify-start">
          <button
            type="submit"
            className="rounded-[10px] bg-gradient-to-br from-primary via-blue-500 to-indigo-600 hover:via-blue-600 hover:to-indigo-700 py-1.5 text-white cursor-pointer px-7 font-semibold"
          >
            S'INSCRIRE
          </button>
        </div>
      </form>
    </motion.div>
  );
}
