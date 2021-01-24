const { totalRegister } = require("./../services/common");
const paginationInfo = async ({ req, Model }) => {
  try {
    const { baseUrl: endpoint } = req;
    const total = await totalRegister(Model);

    const moreInfo = {
      next: null,
      prev: null,
    };
    // 3 > 20
    if (total > process.env.LIMIT_RESPONSE) {
      if (req.query.page) {
        const page = parseInt(req.query.page); // page=patata
        // si page es >=2
        if (page > 1) {
          moreInfo.prev = `${process.env.BASE_URL}${endpoint}?page=${page - 1}`;
          moreInfo.next = `${process.env.BASE_URL}${endpoint}?page=${page + 1}`;

          // si page es 1
        } else {
          moreInfo.prev = null;
          moreInfo.next = `${process.env.BASE_URL}${endpoint}?page=${page + 1}`;
        }
        // no está definido page?
      } else {
        moreInfo.prev = null;
        moreInfo.next = `${process.env.BASE_URL}${endpoint}?page=2`;
      }

      moreInfo.limit = process.env.LIMIT_RESPONSE;
      moreInfo.total = total;
    } else {
      moreInfo.limit = process.env.LIMIT_RESPONSE;
      moreInfo.total = total;
    }
    return moreInfo;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { paginationInfo };
