import PropTypes from 'prop-types';

export default function CategoryName({ category }) {
  return (
    <h1 className="category-name">
      {category.name}

      <style jsx>
        {`
        .category-name {
          font-size: var(--fontsize-sm);
          text-transform: uppercase;
          margin-top: 0;
          margin-bottom: calc(var(--spacing-xl) - var(--fontsize-sm) - 2px);
        }
        `}
      </style>
    </h1>
  );
}

CategoryName.propTypes = {
  category: PropTypes.object.isRequired,
};
