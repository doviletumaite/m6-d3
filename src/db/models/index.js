import product from "./products.js";
import review from "./reviews.js";

product.hasMany(review)
review.belongsTo(product)

export default { review, product }