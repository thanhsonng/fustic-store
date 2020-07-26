import { Fragment } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { selectCart } from 'store/selectors';
import { getCartTotal } from 'utils/cart';
import Layout from 'components/layout';
import CartProductSmall from 'components/product/cart-product-small';

function CartPage() {
  const cart = useSelector(selectCart);
  const [vndSubtotal, usdSubtotal] = getCartTotal(cart);
  const [vndShipping, usdShipping] = [35000, 60];
  const [vndTax, usdTax] = [0, 60];
  const [vndTotal, usdTotal] = [
    vndSubtotal + vndShipping + vndTax,
    usdSubtotal + usdShipping + usdTax,
  ];

  return (
    <Layout>
      <Head>
        <title>Shopping Cart – Fustic Store</title>
      </Head>

      <div className="cart-page">
        <div className="cart-entries">
          {cart.map((entry, i) => (
            <Fragment key={`${entry.product.id}${entry.sizeName}`}>
              {i !== 0 && <hr />}
              <CartProductSmall cartEntry={entry} noneditable />
            </Fragment>
          ))}
        </div>

        <div className="total">
          <table>
            <tbody>
              <tr>
                <th>Subtotal</th>
                <td>{vndSubtotal.toLocaleString()} vnd</td>
                <td>${usdSubtotal.toLocaleString()}</td>
              </tr>
              <tr>
                <th>Shipping</th>
                <td>{vndShipping.toLocaleString()} vnd</td>
                <td>${usdShipping.toLocaleString()}</td>
              </tr>
              <tr>
                <th>Tax</th>
                <td>{vndTax.toLocaleString()} vnd</td>
                <td>${usdTax.toLocaleString()}</td>
              </tr>
              <tr />
              <tr>
                <th>Total</th>
                <td>{vndTotal.toLocaleString()} vnd</td>
                <td>${usdTotal.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>
        {`
        .cart-page {
          --padding-page: 30px;

          width: 100%;
          padding: 8rem var(--padding-page) 0;
          display: flex;
          flex-direction: column;
          align-items: center;

          .cart-entries {
            width: 100%;

            hr {
              margin: 2rem 0;
            }
          }

          .total {
            margin-top: 2rem;
            padding: 0;
            width: 100%;

            table {
              text-transform: uppercase;
              width: 100%;

              tr {
                height: 2.2em;
              }

              tr > :first-child {
                text-align: left;
                width: 30%;
              }

              tr > :nth-child(2) {
                text-align: right;
                opacity: 0.4;
                font-weight: var(--fontweight-regular);
                width: 40%;
              }

              tr > :last-child {
                text-align: left;
                opacity: 0.4;
                font-weight: var(--fontweight-regular);
                padding-left: 10%;
                width: 30%;
              }
            }
          }

          @media screen and (min-width: 375px) {
            --padding-page: 50px;
          }
        }
        `}
      </style>
    </Layout>
  );
}

export default CartPage;
