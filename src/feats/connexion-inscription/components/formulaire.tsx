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
        <div className="grid w-full grid-cols-2">
          {/* GAUCHE (FORMULAIRE) */}
          <div className="flex items-center justify-center p-6">
            <AnimatePresence mode="wait">
              {!isLoginMode ? (
                <Connexion
                  formConnexion={formConnexion}
                  handleSubmitConnexion={handleSubmitConnexion}
                  handleChangeInputConnexion={handleChangeConnexion}
                />
              ) : (
                <Inscription
                  formInscription={formInscription}
                  handleSubmitInscription={handleSubmitInscription}
                  handleChangeInputInscription={handleChangeInscription}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* PANNEAU BLEU ANIMÉ */}
        <motion.div
          animate={{ x: isLoginMode ? "-100%" : "0%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`absolute top-0 left-1/2 flex h-full w-1/2 flex-col items-center justify-center gap-6 
          bg-gradient-to-br from-primary via-blue-500 to-indigo-600 
          px-10 text-white transition-all duration-300
          ${isLoginMode ? "rounded-r-[80px]" : "rounded-l-[80px]"}`}
        >
          <AnimatePresence>
            {!isLoginMode ? (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h2 className="mb-4 text-3xl font-bold">
                  Bienvenue sur Ipsum !
                </h2>

                <Paragraphe className="mb-6 text-sm text-white/90">
                  Pour accéder aux fonctionnalités de la plateforme, veuillez
                  vous authentifier.
                </Paragraphe>

                <button
                  onClick={() => setIsLoginMode(true)}
                  className="rounded-lg border-2 border-white/80 px-8 py-2 font-semibold 
                  transition-all duration-300 hover:bg-white hover:text-primaryhover:scale-105"
                >
                  S'INSCRIRE
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="await"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h2 className="mb-4 text-3xl font-bold">Bon retour !</h2>

                <Paragraphe className="mb-6 text-sm text-white/90">
                  Merci de vous connecter pour continuer.
                </Paragraphe>

                <button
                  onClick={() => setIsLoginMode(false)}
                  className="rounded-lg border-2 border-white/80 px-8 py-2 font-semibold 
                  transition-all duration-300 hover:bg-white hover:text-primaryhover:scale-105"
                >
                  SE CONNECTER
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
