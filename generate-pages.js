const fs = require('fs');
const path = require('path');

const arrondissements = [
  { num: "1", name: "Louvre", zip: "75001", quartiers: "Châtelet, Palais-Royal, Vendôme" },
  { num: "2", name: "Bourse", zip: "75002", quartiers: "Montorgueil, Sentier, Opéra" },
  { num: "3", name: "Temple", zip: "75003", quartiers: "Haut-Marais, Arts-et-Métiers, République" },
  { num: "4", name: "Hôtel-de-Ville", zip: "75004", quartiers: "Marais, Île Saint-Louis, Saint-Paul" },
  { num: "5", name: "Panthéon", zip: "75005", quartiers: "Quartier Latin, Saint-Michel, Mouffetard" },
  { num: "6", name: "Luxembourg", zip: "75006", quartiers: "Saint-Germain-des-Prés, Odéon, Luxembourg" },
  { num: "7", name: "Palais-Bourbon", zip: "75007", quartiers: "Tour Eiffel, Invalides, Gros-Caillou" },
  { num: "8", name: "Élysée", zip: "75008", quartiers: "Champs-Élysées, Madeleine, Monceau" },
  { num: "9", name: "Opéra", zip: "75009", quartiers: "South Pigalle (SoPi), Cadet, Grands Boulevards" },
  { num: "10", name: "Entrepôt", zip: "75010", quartiers: "Canal Saint-Martin, Gare du Nord, Château d'Eau" },
  { num: "11", name: "Popincourt", zip: "75011", quartiers: "Bastille, Oberkampf, Voltaire, République" },
  { num: "12", name: "Reuilly", zip: "75012", quartiers: "Bercy, Nation, Gare de Lyon, Daumesnil" },
  { num: "13", name: "Gobelins", zip: "75013", quartiers: "Place d'Italie, Olympiades, BNF" },
  { num: "14", name: "Observatoire", zip: "75014", quartiers: "Montparnasse, Alésia, Denfert-Rochereau" },
  { num: "15", name: "Vaugirard", zip: "75015", quartiers: "Convention, Grenelle, Boucicaut" },
  { num: "16", name: "Passy", zip: "75016", quartiers: "Auteuil, Trocadéro, Porte Maillot" },
  { num: "17", name: "Batignolles-Monceau", zip: "75017", quartiers: "Batignolles, Ternes, Épinettes" },
  { num: "18", name: "Buttes-Montmartre", zip: "75018", quartiers: "Montmartre, Barbès, Marcadet, Clignancourt" },
  { num: "19", name: "Buttes-Chaumont", zip: "75019", quartiers: "La Villette, Buttes-Chaumont, Belleville" },
  { num: "20", name: "Ménilmontant", zip: "75020", quartiers: "Belleville, Ménilmontant, Gambetta" }
];

const templatePath = path.join(__dirname, 'template-arrondissement.html');
const template = fs.readFileSync(templatePath, 'utf8');

arrondissements.forEach((item) => {
  const content = template
    .replace(/\{\{NUM\}\}/g, item.num)
    .replace(/\{\{NAME\}\}/g, item.name)
    .replace(/\{\{ZIP\}\}/g, item.zip)
    .replace(/\{\{QUARTIERS\}\}/g, item.quartiers);

  const fileName = `paris-${item.num}.html`;
  fs.writeFileSync(path.join(__dirname, fileName), content, 'utf8');
  console.log(`تم إنشاء: ${fileName}`);
});

console.log('\n اكتملت العملية بنجاح! تم إنشاء 20 صفحة.');