let oldCode, newCode;

//insertions only
{
   oldCode = {
      apples: 3, 
      oranges: 4
   }

   newCode = {
      apples: 3, 
      oranges: 4,
      bananas: 2,
      kiwi: 10
   };

   //2 insertions, 0 deletions
   console.log(diff(oldCode, newCode));
}

//deletions only
{
   oldCode = newCode;

   newCode = {
      kiwi: 10
   };

   //0 insertions, 3 deletions
   console.log(diff(oldCode, newCode));
}

//mods only
{
   oldCode = newCode;

   newCode = {
      kiwi: 24
   };

   //1 insertions, 1 deletions
   console.log(diff(oldCode, newCode));
}

// insertions and deletions
{
   oldCode = newCode;

   newCode = {
      grapes: 4,
      oranges: 5,
      plums: 7,
      pears: 10,
      strawberries: 20
   };

   //5 insertions, 1 deletions
   console.log(diff(oldCode, newCode));
}

//insertions, deletions, and mods
{
   oldCode = newCode;

   newCode = {
      grapes: 15,
      oranges: 9,
      kiwi: 6,
      bananas: 6
   };

   //4 insertions, 5 deletions
   console.log(diff(oldCode, newCode));
}

//no changes
{
   oldCode = newCode;

   //0 insertions, 0 deletions
   console.log(diff(oldCode, newCode));
}