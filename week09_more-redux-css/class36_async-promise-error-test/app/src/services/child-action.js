import api from './api';

export default function(RESOURCE, url, parentUrl = '') {
  const resource = RESOURCE[0] + RESOURCE.slice(1).toLowerCase();

  if(parentUrl && parentUrl.slice(-1) !== '/') parentUrl += '/'; 

  return {
    [`load${resource}s`](parentId = '') {
      return {
        type: `${RESOURCE}_LOAD`,
        payload: api.get(`${parentUrl}${parentId}${url}`)
          .then(response => ({ parentId, children: response }))
      };
    },
    
    [`add${resource}`](data, parentId = '') {
      return { 
        type: `${RESOURCE}_ADD`, 
        payload: api.post(`${parentUrl}${parentId}${url}`, data)
      };
    },
    
    [`update${resource}`](data, parentId = '') {
      return {
        type: `${RESOURCE}_UPDATE`,
        payload: api.put(`${parentUrl}${parentId}${url}/${data._id}`, data)
      };
    },
    
    [`remove${resource}`](id, parentId = '') {
      return { 
        type: `${RESOURCE}_REMOVE`, 
        payload: api.delete(`${parentUrl}${parentId}${url}/${id}`).then(() => id)
      };
    },
  };
}