1. Crea un array de personas 100 con las caracteristicas:

nombre : string,
id: string (irrepetible),
ventas : number
[En un solo loop]

2. Sobre la lista anterior, enlaza cada persona a otra agregando la propiedad `parentId` a los registros. 2 personas al azar no deben tener un valor en `parentId`. No se permite recursion entre las relaciones a ningun nivel (es decir, (A) tiene de padre a (B), y (B) tiene de padre a (A). O también (A) tiene de padre a (B), (B) tiene de padre a (C), (C) tiene de padre a (A)).
[En un solo loop]

3. Con los resultados del ejercicio anterior, agrega una propiedad `ventas_descendencia`, que calcule las ventas de todos los descendientes de esa persona, o 0 si no tiene descendientes.
[En un solo loop]