let cursos = [
  {
    name: "Medio Ambiente",
    number: "30a8-medio-ambiente",
    amount: "Reconocer los elementos que componen el medio ambiente",
    due: "12/05/1995",
    image:
      "https://definicion.de/wp-content/uploads/2009/10/medio-ambiente.jpg",
    content: "https://tavo-blog.gq/",
  },

  {
    name: "Importancia de los recursos",
    number: "7c5e3705-33e3-45ff-bb36-0dbdd6c8ba82",
    amount:
      "Generar en los/las jovenes reflexion y pensamiento critico sobre la importancia de los recursos para la supervivencia",
    due: "10/31/2000",
    image:
      "https://www.nestle.com.ve/sites/g/files/pydnoa526/files/manos-teniendo-bola-planeta-tierra.png",
    content: "https://www.addictinggames.com/embed/html5-games/25165",
  },
  {
    name: "Agua",
    number: "c80f5fe0-3342-46d6-83c0-86b466b8dec2",
    amount: "Crear conciencia en los/las jovenes frente al agua",
    due: "07/22/2003",
    image:
      "https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/temas/agua.jpg",
    content: "",
  },
  {
    name: "Importancia del agua",
    number: "cf765118-ea2f-49ac-8a89-dbed3b72b962",
    amount: "Conocer la percepcion del joven frente a la importancia del agua",
    due: "09/01/1997",
  },
  {
    name: "Contaminacion del agua",
    number: "46946033-12f6-48fd-b5c2-5f677ef819a2",
    amount: "Explorar usos y formas de contaminacion del agua",
    due: "01/27/2998",
  },
  {
    name: "Cuidar nuestra casa",
    number: "d792687a-3309-4045-9d6a-cdab4414078e",
    amount:
      "Concientizar en los/las jovenes la necesidad de cuidar nuestra casa",
    due: "01/27/2998",
  },
  {
    name: "Nuevos productos",
    number: "d855eb80-a927-41c4-a3af-646d9a4bb9b5",
    amount:
      "Reconocer la basura como alternativa de elaboracion de nuevos productos",
    due: "09/01/1997",
  },
  {
    name: "Desarrollo sustentable",
    number: "9817e61e-4d09-4e32-8561-0247461b3052",
    amount: "Comprender el significado de desarrollo sustentable",
    due: "01/27/2998",
  },
  {
    name: "Contaminacion en la comunidad",
    number: "c4a773e6-6a4d-4a8a-a93c-03c65e3e675d",
    amount:
      "Identificar los lugares de la comunidad que presentan algun grado de contaminacion",
    due: "01/27/2998",
  },
];

export function getCursosMedioAmbiente() {
  return cursos;
}

export function getCursoMedioAmbiente(number) {
  return cursos.find((curso) => curso.number === number);
}
