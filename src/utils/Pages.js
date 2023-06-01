export const getPagecount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}
