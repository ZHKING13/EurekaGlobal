import React from "react";
import { InfiniteMovingCards } from "./ui/infiniteScrol";
import FeedbackCard from "./FeedBack";


function Testimanials() {
  return (
      <div className="flex text-primary flex-wrap items-center" >
          <InfiniteMovingCards direction="right" items={testimonials} />
   </div>
  );
}

const testimonials = [
  {
    quote:
      "Grâce à Eureka Global, notre entreprise a navigué avec confiance à travers les défis. Leurs conseils stratégiques ont été inestimables.",
    name: "Sophie Martin",
    title: "CEO, Martin & Co.",
  },
  {
    quote:
      "Travailler avec Eureka Global a été une expérience transformative pour notre équipe. Leur approche personnalisée a vraiment fait la différence.",
    name: "Alexandre Dupont",
    title: "Directeur des Opérations, Dupont Enterprises",
  },
  {
    quote:
      "Eureka Global a dépassé nos attentes à chaque étape. Leur engagement envers notre succès était palpable, et nous avons vu des résultats tangibles.",
    name: "Julie Leclerc",
    title: "Directrice Financière, Leclerc & Fils",
  }
];


export default Testimanials;
