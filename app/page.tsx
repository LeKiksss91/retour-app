export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#1A1A17]">
      <div className="mx-auto max-w-xl px-5 pb-16 pt-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#1A1A17]">
          Retour
        </p>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#1A1A17] sm:text-5xl">
          Vos clients satisfaits reviennent. À condition qu’on leur rappelle.
        </h1>

        <p className="mt-5 text-lg leading-relaxed">
          Un client content ne revient pas parce qu’il oublie, pas parce qu’il
          est déçu. Retour envoie le bon rappel au bon moment, tout seul.
        </p>

        <div className="mt-8 rounded-sm border-2 border-[#1F4D3A] bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1A1A17]">
            Exemple
          </p>
          <p className="mt-2 text-lg leading-relaxed">
            20 nouveaux clients par mois, 60 € la séance. Si seulement 4
            d’entre eux reviennent grâce à un rappel, cela fait{" "}
            <span className="font-extrabold underline decoration-[#E8602C] decoration-4 underline-offset-4">
              240 € de plus chaque mois
            </span>
            .
          </p>
        </div>

        <ul className="mt-10 space-y-6">
          <li>
            <h2 className="text-xl font-bold text-[#1A1A17]">
              Rien à tenir à jour
            </h2>
            <p className="mt-1 leading-relaxed">
              Le client laisse son email à la caisse. Vous n’avez plus de
              fichier à gérer.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-bold text-[#1A1A17]">
              Le rappel part au bon moment
            </h2>
            <p className="mt-1 leading-relaxed">
              Après le délai naturel de votre prestation, sans que vous y
              pensiez.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-bold text-[#1A1A17]">
              Vous voyez ce que ça rapporte
            </h2>
            <p className="mt-1 leading-relaxed">
              Un compteur indique combien de clients sont revenus et combien
              ils ont dépensé.
            </p>
          </li>
        </ul>

        <a
          href="#"
          className="mt-10 block w-full rounded-sm bg-[#E8602C] px-6 py-4 text-center text-lg font-bold text-white"
        >
          Commencer, c’est gratuit
        </a>
        <p className="mt-3 text-center text-sm">
          Sans engagement, résiliable à tout moment.
        </p>
      </div>
    </main>
  );
}