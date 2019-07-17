// function parseObject (target) {
//    return {
//       keys: Object.keys(target),
//       values: Object.values(target)
//    }
// }

function getChanges (symbol, source, change) {
   let changes = [];

   Object.keys(source).forEach(key => {
      if (!change[key]) {
         changes.push([symbol, key, source[key]]);
      }
   });

   return changes;
}

function diff (newCode, oldCode) {
   // const oldCode_breakdown = parseObject(oldCode);
   let deletions = getChanges("-", oldCode, newCode);
   let additions = getChanges("+", newCode, oldCode);
   // let modifications = [];

   return deletions.concat(additions);
}


//Test Deletions
{
   let nc = {
      apples: 3, 
      oranges: 4
   };

   let oc = {
      apples: 3, 
      grapes: 5
   };

   console.log(diff(nc, oc));
}