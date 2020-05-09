export function RestangularConfigFactory(RestangularProvider){
    RestangularProvider.setBaseUrl("http://localhost:8080/");
    RestangularProvider.setDefaultHeaders({'Access-Control-Allow-Origin': '*'})
    RestangularProvider.addResponseInterceptor((data, operation, what, url, response, deferred)=> {
        return data;
      });
      
      RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params)=> {
        
        return {
          headers: Object.assign({}, headers)
        }
      });

      RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {

        return true;
      });
}
