export const SITE = {
  name: "Bijles Joris Abma",
  tutor: "Joris Abma",
  city: "Almere",
  // TODO: vervang door je echte telefoonnummer (internationaal formaat, zonder +)
  whatsappNumber: "31612345678",
  whatsappDisplay: "+31 6 12 34 56 78",
  email: "info@bijlesjorisabma.nl",
  whatsappMessage:
    "Hoi Joris! Ik heb interesse in bijles en wil graag een gratis kennismaking plannen.",
};

export const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;
