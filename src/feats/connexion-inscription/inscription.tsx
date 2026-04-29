import { motion } from "framer-motion";
import { Lock, Mail, Upload, User } from "lucide-react";
import type { InscriptionType } from "../../types/types";
export function Inscription({
  formInscription,
  handleSubmitInscription,
  handleChangeInputInscription,
}: InscriptionType) {
  return (
    <motion.div
      key="register"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-sm p-3 absolute right-0"
    >
      <h3 className="mb-4 text-center text-2xl font-bold">CREER UN COMPTE</h3>

      <form onSubmit={handleSubmitInscription} className="flex flex-col gap-4">
        <div className="flex items-center gap-2 border px-1 rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <User size={18} />
          <input
            placeholder="Prénom"
            className="py-1.5 flex-1 px-1 outline-none"
            name="prenom"
            value={formInscription.prenom}
            onChange={handleChangeInputInscription}
          />
        </div>

        <div className="flex items-center gap-2 border px-1 rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <User size={18} />
          <input
            placeholder="Nom"
            className="py-1.5 flex-1 px-1 outline-none"
            name="nom"
            value={formInscription.nom}
            onChange={handleChangeInputInscription}
          />
        </div>

        <div className="flex items-center gap-2 border px-1 rounded focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <Mail size={18} />
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
          <Lock size={18} />
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
          <Upload size={18} />
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
            className="rounded-[10px] bg-primary py-1.5 text-white cursor-pointer px-7"
          >
            S'INSCRIRE
          </button>
        </div>
      </form>
    </motion.div>
  );
}
