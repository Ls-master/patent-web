// @flow

export default {
  forDel(arr: (?number)[], delarr: number[]): (?number)[] {
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
