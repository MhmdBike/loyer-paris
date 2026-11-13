const fs = require('fs');
const path = require('path');

const arrondissements = [
  { id: 1, zip: '75001', quartiers: 'Louvre, Palais-Royal, Châtelet, Place Vendôme' },
  { id: 2, zip: '75002', quartiers: 'Bourse, Sentier, Montorgueil, Gaillon' },
  { id: 3, zip: '75003', quartiers: 'Temple, Haut-Marais, Arts-et-Métiers, Enfants-Rouges' },
  { id: 4, zip: '75004', quartiers: 'Hôtel-de-Ville, Marais, Saint-Gervais, Notre-Dame' },
  { id: 5, zip: '75005', quartiers: 'Panthéon, Quartier Latin, Saint-Victor, Val-de-Grâce' },
  { id: 6, zip: '75006', quartiers: 'Luxembourg, Saint-Germain-des-Prés, Odéon, Monnaie' },
  { id: 7, zip: '75007', quartiers: 'Palais-Bourbon, Invalides, Gros-Caillou, École-Militaire' },
  { id: 8, zip: '75008', quartiers: 'Champs-Élysées, Madeleine, Faubourg-du-Roule, Europe' },
  { id: 9, zip: '75009', quartiers: 'Opéra, Grands Boulevards, Chaussée-d\'Antin, Saint-Georges' },
  { id: 10, zip: '75010', quartiers: 'Canal Saint-Martin, République, Hôpital Saint-Louis, Porte Saint-Denis' },
  { id: 11, zip: '75011', quartiers: 'Bastille, Popincourt, Oberkampf, Voltaire, Roquette' },
  { id: 12, zip: '75012', quartiers: 'Reuilly, Bercy, Bel-Air, Picpus, Gare de Lyon' },
  { id: 13, zip: '75013', quartiers: 'Gobelins, Place d\'Italie, Olympiades, Maison-Blanche' },
  { id: 14, zip: '75014', quartiers: 'Montparnasse, Alésia, Petit-Montrouge, Plaisance' },
  { id: 15, zip: '75015', quartiers: 'Vaugirard, Grenelle, Convention, Javel, Saint-Lambert' },
  { id: 16, zip: '75016', quartiers: 'Passy, Auteuil, Muette, Porte Dauphine' },
  { id: 17, zip: '75017', quartiers: 'Batignolles, Ternes, Épinettes, Plaine de Monceaux' },
  { id: 18, zip: '75018', quartiers: 'Montmartre, Abbesses, Goutte d\'Or, Grandes-Carrières' },
  { id: 19, zip: '75019', quartiers: 'Buttes-Chaumont, La Villette, Pont-de-Flandre, Combat' },
  { id: 20, zip: '75020', quartiers: 'Belleville, Ménilmontant, Gambetta, Père-Lachaise' }
];

const templatePath = path.join(__dirname, 'template-arrondissement.html');

if (!fs.existsSync(templatePath)) {
  console.error("خطأ: ملف template-arrondissement.html غير موجود في المجلد!");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');
const currentYear = new Date().getFullYear().toString();

arrondissements.forEach(arrond => {
  let outputHtml = template
    .replace(/{{ARROND}}/g, arrond.id.toString())
    .replace(/{{ZIP}}/g, arrond.zip)
    .replace(/{{QUARTIERS}}/g, arrond.quartiers)
    .replace(/{{YEAR}}/g, currentYear);

  const outputFileName = `paris-${arrond.id}.html`;
  fs.writeFileSync(path.join(__dirname, outputFileName), outputHtml, 'utf-8');
  console.log(`تم توليد: ${outputFileName}`);
});

console.log("\nتم توليد الـ 20 صفحة بنجاح بتصميمها الجديد!");