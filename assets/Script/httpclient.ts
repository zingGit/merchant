export default class HttpClient {

    public static post(url: string, params?: object): Promise<any> {
        return new Promise( resolve => {
            
            const timer = setTimeout(() => { resolve(null)
                console.warn("http post timeout...")
            }, 5000)

            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    const response = xhr.responseText;
                    console.warn("post res:",response);
                    clearInterval(timer)
                    const data = JSON.parse(response)
                    if(data.code != 0) {
                    }
                    resolve && resolve(data)
                }else {
                    console.warn("http request:", xhr.response)
                }
            };
    
            xhr.open("POST", url, true);
            xhr.timeout = 5000
            xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            const data  = JSON.stringify(params)
            
            xhr.send(data);

        })

    }

}