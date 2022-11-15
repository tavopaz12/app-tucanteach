let cursos = [
  {
    name: "Desarrollo Humano",
    number: '0bc6ec04-5175-4f4c-8ad4-86d897931a65',
    amount: "$10,800",
    due: "12/05/1995",
    content: 'https://www.addictinggames.com/embed/html5-games/25172'
  },
  {
    name: "Stankonia",
    number: 'a1956521-1ed8-4d77-99eb-c31163f2d109',
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: '7125898d-548b-4286-bd74-807544ad8065',
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 'd133180d-7fa0-43ef-8b15-063f377399f7',
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: '9114c649-e85e-4b19-a91b-0e6b820b3805',
    amount: "$4,600",
    due: "01/27/2998",
  },
  {
    name: "Wide Open Spaces",
    number: '10fc629d-4782-4576-8b89-0f7fac77e964',
    amount: "$4,600",
    due: "01/27/2998",
  },
  {
    name: "Tubthumper",
    number: 'a9fcd2d7-0b62-4b0e-bfea-a139bab94687',
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: '425aa70e-e3f5-430d-8c82-43dbc70ad71c',
    amount: "$4,600",
    due: "01/27/2998",
  },
  {
    name: "Wide Open Spaces",
    number: '6ef58753-d1ce-40db-afca-ffa4a0472b7b',
    amount: "$4,600",
    due: "01/27/2998",
  },
];

export function getCursosDesarrolloHumano() {
  return cursos;
}

export function getCursoDesarrolloHumano(number) {
  return cursos.find((curso) => curso.number === number);
}
