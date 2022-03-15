import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Du3I8pAV-YEoaTI-0LVyOObJqNSVQEdChD7Xf2bdBmhDEB81J_id4Yky_eSVButEtGdH1RZo7BYmgXmvbMIPtHXEiTIwfjH7jImpZeglp1zoIFmqQc8UBukziBEqYnYx'
    }
});