import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloSchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const message = ` Ceci est un fichier généré par  ${_options.nom}!`;
    tree.create('hello_dynamique.txt', message);
    return tree;
  };
}
