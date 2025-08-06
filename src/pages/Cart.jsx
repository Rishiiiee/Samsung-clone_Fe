import { useEffect, useState } from 'react';
import icon_cart from '../assets/icon_cart.svg';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Cart() {
  const [cartItems, setCartItems] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(239998);
  const [discount, setDiscount] = useState(12000);
  const [voucherCode, setVoucherCode] = useState('');

  useEffect(() => {
    axios.get('https://samsung-clone-be.onrender.com/cart') 
      .then(response => {
        setCartItems(response.data);
        const total = response.data.reduce((sum, item) => {
          const priceValue = item.price ? parseFloat(item.price.replace(/[^0-9.]/g, '')) : 0;
          return sum + priceValue;
        }, 0);
        setTotalPrice(total);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
        setLoading(false);
      });
  }, []);

  const handleRemoveItem = (itemId) => {
    axios.delete(`https://samsung-clone-be.onrender.com/cart/${itemId}`)
      .then(() => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
      })
      .catch(error => {
        console.error('Error removing item:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="main-cart" style={cartStyle.mainCart}>
      <div className="maindiv-inner" style={cartStyle.maindivInner}> 
        <div className="content-container" style={cartStyle.contentContainer}>
          <div className="content-body-container" style={cartStyle.contentBodyContainer}>
            <div className="shopping-cart" style={cartStyle.shoppingCart}>
              {cartItems.length === 0 ? (
                <div className="empty-cart" style={cartStyle.emptyCart}>
                  <div>
                    <img src={icon_cart} alt="" height={48} width={48} />
                  </div>
                  <h2 style={cartStyle.headertagst}>Your cart is empty </h2>
                  <p style={cartStyle.paratagst}>Sign in to your Samsung account to view your saved items</p>
                  <div>
                    <button style={cartStyle.buttonshoppingcon}>Continue Shopping</button>
                    <button style={cartStyle.singlinbutton}>Sign in</button>
                  </div>
                </div>
              ) : (
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <div className='cart-product-body'>
                        <div className='cart-articel-card p-4 bg-white rounded mb-4'>
                          <div className='shoping-cart-count mb-4'>
                            <h4>You have {cartItems.length} items in your cart</h4>
                          </div>
                          
                          {cartItems.map(item => (
                            <div key={item.id} className='mb-4' style={cartStyle.cartporductsection}>
                              <div className='d-flex align-items-center mb-3'>
                                <img 
                                  src={item.images[0] || item.image} 
                                  alt={item.title || item.name} 
                                  height={160} 
                                  width={200} 
                                  className='me-4' 
                                  style={{objectFit: 'contain'}}
                                />
                                <div className='flex-grow-1'>
                                  <h5 className='mb-1'>{item.title || item.name || 'Galaxy S25 Ultra'}</h5>
                                  <p className='mb-1 text-muted'>Titanium Gray, 256 GB</p>
                                  <p className='mb-1 text-muted'>SH-SH3582TB</p>
                                  <p className='mb-1 text-success'>In Stock</p>
                                  <p className='mb-1'>Priority Delivery By Wed, Jun 19th</p>
                                  <p className='mb-1'>Pick up from Samsung BKC Store available</p>
                                </div>
                                <div className='d-flex flex-column align-items-end' style={{paddingRight: '10px'}}>
                                  <h5 className='mb-1'>{item.price}</h5>
                                  <p className='mb-1'><s className='text-muted'>₹129999.00</s></p>
                                  <p className='mb-1 text-danger'>Save ₹12000.00</p>
                                  <div className='d-flex flex-column align-items-end mt-2'>
                                    <button 
                                      className='btn btn-sm btn-outline-secondary mb-2'
                                      onClick={() => handleRemoveItem(item.id)}
                                      style={{width: '100%'}}
                                    >
                                      <img src="https://www.samsung.com/in/web/_next/static/media/icon_bold_action_remove.c6266208.svg" alt="Remove" height={16} width={16} />
                                    </button>
                                    <a href="#" className='text-primary'>Buy more</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className='col-md-4'>
                      <div className='card p-4'>
                        <div className='mb-4'>
                          <label className='form-label' style={{color: 'black'}}>Voucher code</label>
                          <div className='input-group mb-2'>
                            <input 
                              type="text" 
                              className='form-control' 
                              placeholder="Enter Voucher or Coupon" 
                              value={voucherCode}
                              onChange={(e) => setVoucherCode(e.target.value)}
                              style={{color: 'black'}}
                            />
                            <button className='btn btn-primary' disabled>Apply</button>
                          </div>
                          <div className='d-flex justify-content-between'>
                            <a href="#" className='text-primary'>View Eligible Offers</a>
                            <a href="#" className='text-primary'>Voucher not working?</a>
                          </div>
                        </div>

                        <div className='mb-3' style={{color: 'black'}}>
        <div className='d-flex justify-content-between mb-2'>
          <span>Price Breakup</span>
          <a href="#" className='text-primary'>View Tax Breakup</a>
        </div>
        <div className='d-flex justify-content-between mb-2'>
          <span>Price (inclusive of all taxes)</span>
          <span>₹{totalPrice.toLocaleString('en-IN')}.00</span>
        </div>
        <div className='d-flex justify-content-between mb-2'>
          <span>Discount</span>
          <span className='text-danger'>-₹{discount.toLocaleString('en-IN')}.00</span>
        </div>
        <div className='d-flex justify-content-between mb-2'>
          <span>Shipping charges</span>
          <span>₹0.00</span>
        </div>
      </div>

      <div className='border-top pt-3 mb-3' style={{color: 'black'}}>
        <div className='d-flex justify-content-between mb-2'>
          <h5>Total</h5>
          <h5>₹{(totalPrice - discount).toLocaleString('en-IN')}.00</h5>
        </div>
        <div className='d-flex justify-content-between'>
          <small className='text-muted'>Includes GST*</small>
          <div>
            <s className='text-muted me-2'>₹{totalPrice.toLocaleString('en-IN')}.00</s>
            <span className='text-danger'>save ₹{discount.toLocaleString('en-IN')}.00</span>
          </div>
        </div>
      </div>

                        <button className='btn btn-primary w-100 mb-3 py-2'>Continue to checkout</button>

                        <div className='small text-muted'>
                          <p className='fw-bold' style={{color: 'black'}}>Order Cancellation Charges</p>
                          <p style={{color: 'black'}}>Pre-order: No cancellations permitted.<br/>
                          Priority delivery: Fee applicable if order is cancelled or rejected at doorstep<br/>
                          Standard delivery: Fee applicable for cancellations after 2 hours of order placement or doorstep rejections.</p>
                          <a href="#" className='d-block mb-2'>Cancellation policy.</a>
                          <p style={{color: 'black'}}>*For the final GST amount, please refer to the Tax Invoice. For GSTIN purchases, the buyer has to ascertain the eligibility criteria of input tax credit.</p>
                          <p style={{color: 'black'}}>By submitting your order, you agree to the <a href="#" className='text-primary'>Terms of Service</a>, <a href="#" className='text-primary'>Terms of Use</a> and we will use your personal data in accordance with our <a href="#" className='text-primary'>Privacy policy</a>.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )} 
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const cartStyle = {
    mainCart: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    maindivInner: {
        width: '80%',
        margin: '0 auto',
    },
    contentContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentBodyContainer: {
        marginTop: '20px',
        padding: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyCart: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center'
    },
    buttonshoppingcon: {
        color: 'black',
        backgroundColor: '#f0f0f0',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        marginRight: '10px',
    },
    singlinbutton: {
        color: 'white',
        backgroundColor: '#007aff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
    },
    paratagst: {
        color: '#666',
        fontSize: '12px',
        marginTop: '10px',
    },
    headertagst: {
        fontSize: '24px',
        margin: '10px 0'
    },
    cartporductsection: {
        boxSizing: 'border-box',
        boxShadow: '0 2px 4px rgba(25,0,0,0.1)',
        borderRadius: '10px',
        border: '1px solid #3333',
        padding: '15px',
        marginBottom: '15px'
    }
};

export default Cart;