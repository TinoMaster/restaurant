export const bannerTittle = {
   initial: {
      opacity: 0,
      x: '100px',
   },
   animate: {
      opacity: 1,
      x: 0,
   },
}

export const bannerBigTittle = {
   initial: {
      opacity: 0,
      x: '-100px',
   },
   animate: {
      opacity: 1,
      x: 0,
   },
}

export const image1historyHome = {
   initial: {
      opacity: 0,
      x: 8,
      y: 24,
   },
   animate: {
      opacity: 1,
      x: 0,
   },
}

export const image2historyHome = {
   initial: {
      opacity: 0,
      x: -8,
   },
   animate: {
      opacity: 1,
      x: 0,
   },
}

export const containerImagesPrefers = {
   hidden: { y: '100px' },
   show: {
      y: 0,
      transition: {
         staggerChildren: 0.1,
      },
   },
}

export const itemImagePrefer = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
   },
}
