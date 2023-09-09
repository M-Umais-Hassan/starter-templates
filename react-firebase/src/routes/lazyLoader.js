import { lazy, Suspense } from "react";
import Spinner from "components/common/spinner";
import PropTypes from "prop-types";

const LazyLoader = ({ page }) => {
  const LazyComponent = lazy(() => import(`pages/${page}`));

  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent />
    </Suspense>
  );
};

LazyLoader.propTypes = {
  page: PropTypes.string
};

export default LazyLoader;
