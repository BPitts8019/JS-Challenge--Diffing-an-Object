function getChanges (symbol, source, change) {
   let changes = [];

   Object.keys(source).forEach(key => {
      if (!change[key] || source[key] != change[key]) {
         changes.push([symbol, key, source[key]]);
      }
   });

   return changes;
}

function diff (oldCode, newCode) {
   // const oldCode_breakdown = parseObject(oldCode);
   let deletions = getChanges("-", oldCode, newCode);
   let insertions = getChanges("+", newCode, oldCode);
   // let modifications = [];

   //log results
   console.log(`${insertions.length} insertions(+), ${deletions.length} deletions(-)`);
   
   //return results as one array
   return deletions.concat(insertions);
}