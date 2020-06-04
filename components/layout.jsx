/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  const [reveal, setReveal] = useState(null);

  return (
    <div className="container">
      <Head>
        <title>Not At All Clothing</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="menu">
        <Link href="/"><a className="item">Products</a></Link>
        <ul>
          <li><Link href="/[categorySlug]" as="/t-shirts"><a className="subitem">T-Shirts</a></Link></li>
          <li><Link href="/[categorySlug]" as="/sweaters"><a className="subitem">Sweaters</a></Link></li>
          <li><Link href="/[categorySlug]" as="/hoodies"><a className="subitem">Hoodies</a></Link></li>
          <li><Link href="/[categorySlug]" as="/prints"><a className="subitem">Prints</a></Link></li>
        </ul>

        <Link href="/contact"><a className="item">Contact</a></Link>
        <a href="https://www.instagram.com/notatallstore" className="item">Instagram</a>
        <a href="https://www.facebook.com/notatall.clothing" className="item">Facebook</a>

        <img src="/logo.svg" alt="Logo" className="logo" />
      </div>

      <div className="main-page">
        <div className="overlay" onClick={() => setReveal(null)} onKeyPress={() => setReveal(null)} />

        <header>
          <button type="button" className="menu-button" onClick={(e) => { e.stopPropagation(); setReveal(!reveal ? 'menu' : null); }}>
            <div className="hamburger-icon">
              <div />
              <div />
              <div />
            </div>
          </button>
          <Link href="/">
            <a className="brand">
              <img src="/brand.svg" alt="Brand" />
            </a>
          </Link>
          <button type="button" className="cart-button" onClick={(e) => { e.stopPropagation(); setReveal(!reveal ? 'cart' : null); }}>
            Cart (1)
          </button>
        </header>

        <main>
          {children}
        </main>

        <footer>
          Not At All Clothing
        </footer>
      </div>

      <div className="cart">
        <table>
          <thead>
            <tr>
              <th>Cart (1)</th>
              <th>420,000 vnd</th>
              <th>$20.00</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ACID TEE</td>
              <td>420,000</td>
              <td>20.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx>
        {`
        .container {
          overflow: hidden;
        }

        @media screen and (max-width: 1200px) {
          .menu {
            position: fixed;
            top: 0;
            height: 100%;
            width: 280px;
            left: ${reveal === 'menu' ? '0' : '-280px'};
            transition: left 0.3s ease;
          }

          .main-page {
            position: relative;
            overflow-x: hidden;
            min-height: 100vh;
            left: ${reveal === 'menu' ? '280px' : reveal === 'cart' ? '-280px' : '0'};
            transition: left 0.3s ease;
          }

          .cart {
            position: fixed;
            top: 0;
            height: 100%;
            width: 280px;
            right: ${reveal === 'cart' ? '0' : '-280px'};
            transition: right 0.3s ease;
          }
        }

        @media screen and (min-width: 1200px) {
          .container {
            display: grid;
            grid-template-columns: 280px 1fr 280px;
            grid-template-areas: "menu-button brand cart-button";

            .main-page {

              header .menu-button, header .cart-button {
                display: none;
              }
            }

            .cart {
              padding-top: calc(26px + 2 * var(--padding-header) + var(--spacing-xl));
            }
          }
        }

        .menu {
          padding: 30px;
          padding-top: calc(26px + 2 * var(--padding-header) + var(--spacing-xl));

          .item, .subitem {
            display: block;
          }

          .item {
            font-weight: bold;
            margin-bottom: var(--spacing-md);
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            margin-top: var(--spacing-xs);
            margin-bottom: var(--spacing-xl);

            li {
              margin-bottom: var(--spacing-md);

              .subitem {
                text-transform: uppercase;
                font-family: var(--font-heading);
              }
            }
          }

          .logo {
            width: 4rem;
            margin-top: var(--spacing-md);
          }
        }

        .cart {
          font-family: var(--font-number);
          font-size: var(--fontsize-small);
          padding: 15px;

          table th, table td {
            height: 25px;

            &:first-child {
              text-align: left;
              width: 100px;
            }

            &:nth-child(2) {
              text-align: left;
              width: 90px;
            }

            &:last-child {
              text-align: right;
              width: 50px;
            }
          }
        }

        .main-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: calc(26px + 2 * var(--padding-header));

          position: relative;

          .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            display: ${reveal ? 'block' : 'none'};
            opacity: 0;
          }

          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-bottom: var(--spacing-xl);
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
          }

          header {
            position: fixed;
            top: 0;
            z-index: 1000;
            width: 100vw;
            padding: var(--padding-header);
            background-color: var(--color-background);

            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas: "menu-button brand cart-button";

            .menu-button, .cart-button {
              background-color: transparent;
              border: none;
              padding: 0 7px;
            }

            .menu-button {
              grid-area: menu-button;
              justify-self: left;

              .hamburger-icon {
                width: 20px;
                height: 20px;

                div {
                  height: 2px;
                  background-color: var(--color-text);
                  margin: 4px 0;
                }
              }
            }

            .brand {
              grid-area: brand;
              justify-self: center;
              display: flex;
              align-items: center;
            }

            .cart-button {
              grid-area: cart-button;
              justify-self: right;
              opacity: ${reveal === 'cart' ? 0 : 1};
              font-size: var(--fontsize-small);
            }
          }
        }
      `}
      </style>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};
