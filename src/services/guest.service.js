import http from "../http-common";

class GuestDataService {
 
  getAll() {
    return http.get("/find");
  }

  create(data) {
    return http.post("/save", data);
  }
  
  delete = (id) => {
    return http.delete(`/delete/${id}`);
  };

}

export default new GuestDataService();