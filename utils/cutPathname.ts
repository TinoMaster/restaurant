export const cutPathnameByPiece = (pathname: string, piece: number) => {
   const pathnameArr = pathname.split('/')

   return pathnameArr.slice(0, piece + 1).join('/')
}
