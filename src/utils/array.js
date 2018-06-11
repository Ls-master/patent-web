// export const forDel = (arr, delarr) => {
//   for(let len=arr.length,i=len-1; i>0; i--){
//     if(i in delarr) {
//       arr.splice(i,1);
//     }
//   }
//   return arr;
// }

export default {
  forDel(arr, delarr) {
    for(let len=arr.length,i=len-1; i>=0; i--){
      for(let j=0; j<delarr.length; j++) {
        if(i === delarr[j]) {
          arr.splice(i,1);
        }
      }
    }
    return arr;
  },

}
