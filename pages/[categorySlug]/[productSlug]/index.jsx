import Head from 'next/head';
import Layout from 'components/layout';
import CategoryName from 'components/category-name';
import ProductImages from 'components/product-images';
import Select from 'components/select';
import Button from 'components/button';

export default function Product({ category, product }) {
  return (
    <Layout>
      <Head>
        <title>{product.name} – {category.name} – Not At All Clothing</title>
      </Head>

      <CategoryName category={category} />

      <ProductImages product={product} />

      <div className="product">
        <h2 className="name">{product.name}</h2>
        <div className="price">{product.priceVnd.toLocaleString()} vnd / ${product.priceUsd.toLocaleString()}</div>

        <div style={{ marginBottom: 'var(--spacing-sm)' }}>
          <label htmlFor="select">
            Size
            {' '}
            <Select id="select">
              {product.sizes.map((size) => (
                <option value={size} key={size}>{size}</option>
              ))}
            </Select>
          </label>
          <span className="guide">H: &lt; 165cm</span>
        </div>

        <Button>Add To Cart</Button>
      </div>

      <style jsx>
        {`
        .product {
          text-align: left;
          width: 100%;
          margin-top: var(--spacing-lg);
          padding: 0 var(--padding-page) 0;

          .name {
            font-size: var(--fontsize-normal);
            font-weight: normal;
            margin: 0 0 var(--spacing-sm);
          }

          .price {
            color: var(--color-accent);
            font-family: var(--font-number);
            margin-bottom: var(--spacing-md);
          }

          .guide {
            margin-left: var(--spacing-md);
          }
        }
        `}
      </style>
    </Layout>
  );
}

// GET /products
export async function getStaticPaths() {
  const products = [
    {
      id: 1,
      categoryId: 1,
      categorySlug: 't-shirts',
      name: 'ACID TEE',
      slug: 'acid-tee',
      images: [
        {
          url: 'https://instagram.fhan2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/94425713_2823540537767418_7774663410383496143_n.jpg?_nc_ht=instagram.fhan2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=eHJHiJVtinoAX_XBfwf&oh=536eb24c7cb72df87d88ed3bd102f2b3&oe=5ED22BF0',
          isThumbnail: true,
        },
        {
          url: 'https://instagram.fhan2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/94596078_239220547436358_7000800720627787831_n.jpg?_nc_ht=instagram.fhan2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=S_v4tBT98MAAX9OcG0Y&oh=84cabbd58fdc4003d2cb2543d31a40cb&oe=5ED097EF',
          isThumbnail: false,
        },
      ],
      priceVnd: 420000,
      priceUsd: 20,
      sizes: ['S', 'M', 'L'],
    },
    {
      id: 2,
      categoryId: 1,
      categorySlug: 't-shirts',
      name: 'DOPE ACID TEE',
      slug: 'dope-acid-tee',
      images: [
        {
          url: 'https://instagram.fhan2-4.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91573456_2423894274376846_58500752945725425_n.jpg?_nc_ht=instagram.fhan2-4.fna.fbcdn.net&_nc_cat=110&_nc_ohc=1VX0g1NShg8AX9LaJ6E&oh=d5adda87f8ebb1b8f148e15d0f7285ad&oe=5ED20043',
          isThumbnail: true,
        },
        {
          url: 'https://instagram.fhan2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91933100_2497616580568763_5396839963480248638_n.jpg?_nc_ht=instagram.fhan2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=PdjyG2d0o-sAX9E1bs1&oh=81dac363e17ef4fffbd47bbbe6950e0e&oe=5ECFEAF0',
          isThumbnail: false,
        },
      ],
      priceVnd: 420000,
      priceUsd: 20,
      sizes: ['S', 'M', 'L'],
    },
  ];

  const categorySlugs = new Set(products.map((product) => product.categorySlug));
  const paths = [...categorySlugs].reduce((acc, categorySlug) => {
    const prods = products.filter((product) => product.categorySlug === categorySlug);
    const ps = prods.map((prod) => ({ params: { categorySlug, productSlug: prod.slug } }));
    return [...acc, ...ps];
  }, []);

  return {
    paths,
    fallback: false,
  };
}

// GET /categories/:slug
// GET /categories/:category_slug/products/:slug
export async function getStaticProps({ params }) {
  const category = {
    id: 1,
    name: params.categorySlug,
    slug: params.categorySlug,
  };

  const product = {
    id: 1,
    categoryId: 1,
    categorySlug: params.categorySlug,
    name: 'ACID TEE',
    slug: 'acid-tee',
    images: [
      {
        url: 'https://instagram.fhan2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/94425713_2823540537767418_7774663410383496143_n.jpg?_nc_ht=instagram.fhan2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=eHJHiJVtinoAX_XBfwf&oh=536eb24c7cb72df87d88ed3bd102f2b3&oe=5ED22BF0',
        isThumbnail: true,
      },
      {
        url: 'https://instagram.fhan2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/94596078_239220547436358_7000800720627787831_n.jpg?_nc_ht=instagram.fhan2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=S_v4tBT98MAAX9OcG0Y&oh=84cabbd58fdc4003d2cb2543d31a40cb&oe=5ED097EF',
        isThumbnail: false,
      },
    ],
    priceVnd: 420000,
    priceUsd: 20,
    sizes: ['S', 'M', 'L'],
  };

  return {
    props: {
      category,
      product,
    },
  };
}