let actividades = [
  {
    name: "Actividad 1",
    number: "4b49-actividad-1",
    completed: false,
    amount: "Reconocer los elementos que componen el medio ambiente",
    due: "12/05/1995",
    image:
      "https://definicion.de/wp-content/uploads/2009/10/medio-ambiente.jpg",
    content: "https://es.educaplay.com/juego/7148994-componentes_naturales.html",
  },
  {
    name: "Actividad 2",
    number: "c46a9eb3-aa59-47da-9eb7-cb1c87d29027",
    completed: false,
    amount: "Reconocer los elementos que componen el medio ambiente",
    due: "12/05/1995",
    image:
      "https://definicion.de/wp-content/uploads/2009/10/medio-ambiente.jpg",
    content: "https://www.youtube.com/embed/n8_s_bjmenk",
  },
  {
    name: "Actividad 3",
    number: "8e03a1e0-af80-42a4-b353-98937f603469",
    completed: false,
    amount: "Reconocer los elementos que componen el medio ambiente",
    due: "12/05/1995",
    image:
      "https://definicion.de/wp-content/uploads/2009/10/medio-ambiente.jpg",
    content: "",
  },
];

export function getActividadesMedioAmbiente() {
  return actividades;
}

export function getActividadMedioAmbiente(number) {
  return actividades.find((curso) => curso.number === number);
}
