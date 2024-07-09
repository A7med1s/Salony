
const ProductCard = ({product}) => {
  return (
 <>
 <div class="max-w-6xl mx-auto" key={product.id}>
        <div class="flex items-center justify-center ">
            <div class="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
                <div class="bg-fuchsia-300 shadow-xl rounded-lg overflow-hidden my-card">
                    <div class={`product-img bg-cover bg-center h-56 p-4 `} >
                        <div className="bg-black/50 px-2 py-2 rounded-xl">
                        <div class="flex justify-between">
                            <p className="text-fuchsia-300">Discount {product.discount}%</p>
                            <svg id={`my-svg-${product.id}`} onClick={()=>{
                                document.getElementById(`my-svg-${product.id}`).classList.toggle("my-svg")
                            }} class="h-6 w-6 text-white fill-current cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                            </svg>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 text-center">
                        <p class="uppercase tracking-wide font-bold text-gray-700">{product.title}</p>
                        <p class="text-gray-900">{product.price-(product.price * (product.discount /100)) }$</p>
                        
                        <del class="text-gray-900/50">{product.price}$</del>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
 </>
  )
}

export default ProductCard
