import React from 'react'
const element = {
    totalItem:434,
    totalMRP:545,
    totalDiscount:45,
    finalPayment:5454,
}

function BagSummary() {
  return (
    <div> 
        <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS {element.totalItem} Items</div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{element.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">{element.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{element.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
  )
}

export default BagSummary