import http from "../http-common";

class GuestDataService {
 
  getAll(id) {
    return http.get(`/find/${id}`);
  }

  create(data) {
    return http.post("/save", data);
  }
  
}

export default new GuestDataService();