/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class restoDataSource {
  static async getListResto() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailResto(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.log(error);
    }
  }

  static async postReview(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY_REVIEW,
      },
      body: data,
    });
    return response.json();
  }
}

export default restoDataSource;
