import http from "../http-common";

class OfferService {
  getAll() {
    return http.get("/getAllOffers");
  }

  create(data) {
    return http.post("/addOffer", data);
  }

  delete(id) {
    return http.delete(`/deleteOffer/${id}`);
  }


  findByName(name) {
    return http.get(`/offers?name=${name}`);
  }
}

export default new OfferService();