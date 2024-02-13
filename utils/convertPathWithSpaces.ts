export const convertPathWithSpaces = (path: string) => {
   return path.replace(/\s/g, '%20')
}

export const convertPathWithSpacesReverse = (path: string) => {
   return path.replace(/%20/g, ' ')
}
