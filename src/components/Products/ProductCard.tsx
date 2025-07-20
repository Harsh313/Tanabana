import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag } from 'lucide-react'
import { useCart } from '../../contexts/CartContext'

interface Product {
  id: string
  name: string
  price: number
  image_url: string
  category: string
  description: string
  sizes: string[]
  colors: string[]
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0] || 'M')
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0] || 'Black')
  const [isAdded, setIsAdded] = React.useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      quantity: 1,
      size: selectedSize,
      color: selectedColor
    })
    
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium text-black mb-1 group-hover:text-gray-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
          <p className="text-xl font-bold text-black">${product.price}</p>
          
          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div className="mt-3">
              <p className="text-sm text-gray-600 mb-2">Size:</p>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 text-sm border rounded ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div className="mt-3">
              <p className="text-sm text-gray-600 mb-2">Color:</p>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 text-sm border rounded ${
                      selectedColor === color
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
              isAdded
                ? 'bg-green-600 text-white'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {isAdded ? (
              <span className="flex items-center justify-center">
                ✓ Added to Cart
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </span>
            )}
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard