import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloSchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create('hello.txt', 'Ceci est un fichier généré par mon schématics');
    return tree;
  };
}
