import { apply, mergeWith, Rule, SchematicContext, strings, template, Tree, url } from '@angular-devkit/schematics';



// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloSchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
   const templateSource = apply(url('./files'), [
    template({
      ...strings,
      ..._options
    })
   ])
    return mergeWith(templateSource)(tree, _context);
  };
}
