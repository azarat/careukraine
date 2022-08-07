interface ProductsSizesProps {
    sizes: string[]
    onClick: (size: string) => void
    currentSize: string
}

const ProductsSizes = ({ sizes, onClick, currentSize }: ProductsSizesProps) => {
    return (
        <div className="product-sizes">
            <div className="product-sizes__label">SIZE</div>
            <div className="product-sizes__items">
                {!!sizes && sizes.length && sizes.map((size, index) =>
                    <div className={`product-sizes__item${currentSize == size ? " active" : ""}`} onClick={() => onClick(size)} key={index}>{size}</div>
                )}
            </div>
        </div>
    )
}

export default ProductsSizes