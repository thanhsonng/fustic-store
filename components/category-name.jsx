export default function CategoryName({ category }) {
  return (
    <>
      <h1 className="category-name">{category.name}</h1>

      <style jsx>
        {`
        .category-name {
          font-size: var(--fontsize-small);
          font-weight: normal;
          text-transform: uppercase;
          margin-top: 0;
          margin-bottom: calc(var(--spacing-xl) - var(--fontsize-small) - 2px);
        }
        `}
      </style>
    </>
  );
}