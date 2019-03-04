/**
 *
 * Asynchronously loads the component for PieChart
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
