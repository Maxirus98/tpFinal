export class Inventaire{
    inventaireIngredientSucre:string[];
    inventaireIngredientSale:string[];
    inventaireComplet:string[];
    inventaireBoisson:string[]; 
    constructor(){
        this.inventaireBoisson = [
            "Crème fouetée",
            "Crème glacée vanille",
            "Crème glacée chocolat",
            "Crème glacée noisette",
            "Frappé au chocolat au lait",
            "Frappé au chocolat noir",
            "Frappé au chocolat-noisette",
            "Lait",
            "Smoothie mangue",
            "Smoothie fraise",
            "Smoothie pêche-framboise",
            "Smoothie pêche",
            "Menthe",
            "Épinard"
        ]

    this.inventaireIngredientSucre = [
            "Coulis au chocolat noir",
            "Coulis au chocolat lait",
            "Coulis au chocolat blanc",
            "Crêpe sucrée",
            "Fraise",
            "Raisin",
            "Bleuet",
            "Orange",
            "Ananas",
            "Banane",
            "Pomme",
            "Poire",
            "Retaille de brownies",
            "Guimauve",
            "Gauffre",
            "Sucre glacé",
            "Crème fouetée",
            "Crème glacée vanille",
            "Crème glacée chocolat",
            "Crème glacée noisette",
            "Praligrain",
            "Amande",
            "Noisette",
            "Yaourt",
            "Oreo",
            "Bonbon Arc-en-ciel",
            "Crumble au miel",
            "Perle croquante chocolat è la fraise",
            "Perle croquante caramel fleur de sel",
            "Coulis de framboise",
            "Coulis caramel fleur de sel",
            "Tartinade choco-noisette",
    ];

    this.inventaireIngredientSale = [
        "Crêpe salée",
        "Oeuf",
        "Menthe",
        "Patate",
        "Saumon",
        "Poulet",
        "Jambon",
        "Dinde",
        "Épinard",
        "Salade",
        "Tomate",
        "Concombre",
        "Oignon rouge",
        "Gruyère suisse",
        "Fromage de chèvre",
        "Fromage feta",
        "Sel",
        "Poivre",
        "Beurre",
        "Raclette",
        "Sauce dijon",
        "Sauce Juliette & Chocolat",
        "Sauce béchamel",
        "Sauce BBQ au cacao",
        "Sauce pesto"
    ];
  this.inventaireComplet = this.inventaireIngredientSale.concat(this.inventaireIngredientSucre).concat(this.inventaireBoisson);
  }
}