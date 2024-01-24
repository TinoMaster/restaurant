export const cutPathnameByPiece = (
   pathname: string,
   from: number,
   piece: number
) => {
   const pathnameArr = pathname.split('/')

   return `/` + pathnameArr.slice(from, piece).join('/')
}
