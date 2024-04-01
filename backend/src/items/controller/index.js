const { default: axios } = require('axios');
const config = require('../../../config');
const { parseItem, parseDetailItem } = require('../utils');
const { AUTHOR } = require('../constants');

const getItems = async (res, req) => {
  const search = req.query.q;
  const url = `${config.API_BASE}/sites/MLA/search?q=${search}&limit=4`;

  try {
    const response = await axios.get(url);

    const categories =
      response.data.filters.length > 0
        ? response.data.filters[0].values[0].path_from_root.map(
            (category) => category.name
          )
        : [];

    const items = response.data.results.map((item) => parseItem(item));

    return res.status(200).json({
      author: AUTHOR,
      items,
      categories,
    });
  } catch (e) {
    const response = e.response || {
      status: 500,
      statusText: 'Internal Server Error',
    };

    return res.status(response.status).json({
      status: response.status,
      message: response.statusText,
    });
  }
};

const getItem = async (res, req) => {
  const itemId = req.params.id;

  const itemResponse = axios.get(`${config.API_BASE}/items/${itemId}`);
  const itemResponseDescription = axios.get(
    `${config.API_BASE}/items/${itemId}/description`
  );

  try {
    const results = await Promise.all([itemResponse, itemResponseDescription]);
    const itemResult = results[0].data;
    const descriptionResult = results[1].data;

    const categories = await axios.get(
      `${config.API_BASE}/categories/${itemResult.category_id}`
    );

    const item = parseDetailItem({
      ...itemResult,
      ...descriptionResult,
      categories: categories.data,
    });

    return res.status(200).json({
      author: AUTHOR,
      item,
    });
  } catch (e) {
    const response = e.response || {
      status: 500,
      statusText: 'Internal Server Error',
    };

    return res.status(response.status).json({
      status: response.status,
      message: response.statusText,
    });
  }
};

module.exports = {
  getItems,
  getItem,
};
