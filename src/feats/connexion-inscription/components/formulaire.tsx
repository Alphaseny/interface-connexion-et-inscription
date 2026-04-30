import { Paragraphe } from "@/components/paragraphe";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useChangeInput from "../hooks/use-change-input.hook";
import useSubmit from "../hooks/use-submit.hook";
import { Inscription } from "../inscription";
import { Connexion } from "./connexion";

export default function Formulaire() {
  const [isLoginMode, setIsLoginMode] = useState(false);

  // ===== CONNEXION ========
  const {
    form: formConnexion,
    handleChangeInput: handleChangeConnexion,
    resetForm: resetConnexion,
  } = useChangeInput({
    email: "",
    password: "",
  });

  const { handleSubmit: handleSubmitConnexion } = useSubmit({
    onSuccess: () => setIsLoginMode(false),
    resetForm: resetConnexion,
  });

  // ===== INSCRIPTION ========
  const {
    form: formInscription,
    handleChangeInput: handleChangeInscription,
    resetForm: resetInscription,
  } = useChangeInput({
    prenom: "",
    nom: "",
    email: "",
    password: "",
    image: null,
  });

  const { handleSubmit: handleSubmitInscription } = useSubmit({
    onSuccess: () => setIsLoginMode(false),
    resetForm: resetInscription,
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="relative flex h-[480px] w-[820px] overflow-hidden rounded-2xl bg-white/80 backdrop-blur-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        {/* FORMULAIRE */}
        <div className="grid w-full grid-cols-2">
          <div className="flex items-center justify-center p-6">
            <AnimatePresence mode="sync">
              {!isLoginMode ? (
                <Connexion
                  key="login"
                  formConnexion={formConnexion}
                  handleSubmitConnexion={handleSubmitConnexion}
                  handleChangeInputConnexion={handleChangeConnexion}
                />
              ) : (
                <Inscription
                  key="register"
                  formInscription={formInscription}
                  handleSubmitInscription={handleSubmitInscription}
                  handleChangeInputInscription={handleChangeInscription}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* PANNEAU BLEU */}
        <motion.div
          initial={false}
          animate={{ x: isLoginMode ? "-100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute top-0 left-1/2 flex h-full w-1/2 flex-col items-center justify-center 
          bg-gradient-to-br from-primary via-blue-500 to-indigo-600 
          px-10 text-white
          ${isLoginMode ? "rounded-r-[80px]" : "rounded-l-[80px]"}`}
        >
          <div className="relative h-[200px] w-full flex items-center justify-center overflow-hidden">
            {/* TEXTE BIENVENUE */}
            <motion.div
              style={{ pointerEvents: isLoginMode ? "none" : "auto" }}
              animate={{
                opacity: isLoginMode ? 0 : 1,
                y: isLoginMode ? -40 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute text-center"
            >
              <h2 className="mb-4 text-3xl font-bold">Bienvenue sur Ipsum !</h2>

              <Paragraphe className="mb-6 text-sm text-white/90">
                Pour accéder aux fonctionnalités de la plateforme, veuillez vous
                authentifier.
              </Paragraphe>

              <button
                onClick={() => setIsLoginMode(true)}
                className="rounded border-2 border-white/80 px-8 py-1 font-semibold 
                transition hover:bg-white hover:text-primary hover:scale-105 cursor-pointer"
              >
                S'INSCRIRE
              </button>
            </motion.div>

            {/* TEXTE RETOUR */}
            <motion.div
              style={{ pointerEvents: isLoginMode ? "auto" : "none" }}
              animate={{
                opacity: isLoginMode ? 1 : 0,
                y: isLoginMode ? 0 : 40,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute text-center"
            >
              <h2 className="mb-4 text-3xl font-bold">Bon retour !</h2>

              <Paragraphe className="mb-6 text-sm text-white/90">
                Merci de vous connecter pour continuer.
              </Paragraphe>

              <button
                onClick={() => setIsLoginMode(false)}
                className="border-2 border-white/80 px-8 py-1 rounded font-bold 
                transition hover:bg-white hover:text-primary hover:scale-105 cursor-pointer"
              >
                SE CONNECTER
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
