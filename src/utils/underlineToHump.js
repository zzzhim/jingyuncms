// 下划线转驼峰
export function underlineToHump(s){
  var a = s.split("_");
  var result = a[0];
  for(var i=1;i<a.length;i++){
      result = result + a[i].slice(0,1).toUpperCase() + a[i].slice(1);
  }
  return result
}