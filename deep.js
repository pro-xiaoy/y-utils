// const deepClone = (obj) => {
//   let dist;
//   if(typeof obj === 'Object') {
//     if(Array.isArray(obj)){
//       dist = []
//     } else if(obj.constructor === Object) {
//       dist = {}
//     }
//     for(var i in obj) {
//       dist[i] = deepClone(obj[i])
//     }
//     return dist
//   } else {
//     return obj
//   }
// }
function deepClone(obj) {
  let dist;

  if (typeof obj === "object") {
    if(Array.isArray(obj)) {
      dist = []
    } else if(obj.constructor === Object) {
      dist = {}
    }
    for (var i in obj) {
      dist[i] = deepClone(obj[i]);
    }
    return dist;
  } else {
    return obj;
  }
};