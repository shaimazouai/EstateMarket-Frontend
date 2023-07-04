import httpMain from "../http-common";

const getAllOffers = async () => {
	try {
		const response = await httpMain({
			method: 'GET',
			url: '/getAllOffers'
		});
		return response;
	} catch (e) {
		throw e;
	}
};

const OfferService = {
	getAllOffers
};

export default OfferService();