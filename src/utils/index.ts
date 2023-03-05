/*
! 分页处理
**/
export function pageSizefilter(array = [], page_size = 1, page_number = 10) {
  const startIndex = (page_number - 1) * page_size;
  const endIndex = Math.min(startIndex + page_size, array.length);
  return array.slice(startIndex, endIndex);
}

