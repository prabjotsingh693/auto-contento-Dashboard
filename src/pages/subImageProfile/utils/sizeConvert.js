
/**
 * 
 * @param {image url} img 
 * @param {*facebook,twitter..} platform 
 * convert the size of image accordingly
 */
const sizeCovert = (img, platform)=>{
    const platformSizes = {
        facebook:"facebook",
        twitter:"twitter",
        pinterest:"pinterest",
        general:'1600px+1200px',
        instagram: 'ig-portrait',
        linkedin:'1200px+628px'
    }
     
    const updatedImage = img + "&size="+ platformSizes[platform] ;
    return updatedImage
}

export default sizeCovert;